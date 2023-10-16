import { useState } from "react";

import { toast } from "react-toastify";

import { Loader } from "../../components/Loader";
import { getArticleInfo } from "./helpers";
import { createArticleService } from "../../services/articlesServices";
import { useNavigate } from "react-router-dom";

const { title, content, author, urlToImage, publishedAt } = getArticleInfo();

const initialState = {
  title,
  content,
  urlToImage,
  author,
  publishedAt,
};

export const NewArticlePage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [form, setForm] = useState(() => getArticleInfo());

  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleReset = () => setForm(initialState);

  const handleSubmit = (event) => {
    event.preventDefault();

    const isEmpty = Object.values(form).some((item) => !item);
    if (isEmpty) {
      toast.error("Fill all required fields!");
      return;
    }
    setIsLoading(true);
    createArticleService(form)
      .then((data) => {
        toast.success("Article was successfully created!");
        navigate(`/articles/${data.id}`);
      })
      .catch(() => toast.error("Something went wrong"))
      .finally(() => setIsLoading(false));
  };

  return (
    <>
      {isLoading && <Loader />}

      <form action="#" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="d-block form-label">
            <p>Post title</p>
            <input
              value={form.title}
              onChange={handleChange}
              type="text"
              name="title"
              className="form-control"
              placeholder="Post title ..."
            />
          </label>
        </div>

        <div className="mb-3">
          <label className="d-block form-label">
            <p>Post content</p>
            <textarea
              value={form.content}
              onChange={handleChange}
              className="form-control"
              name="content"
              rows="10"
              placeholder="Post content"
            />
          </label>
        </div>

        <div className="mb-3">
          <label className="d-block form-label">
            <p>Image url</p>
            <input
              type="text"
              name="urlToImage"
              value={form.urlToImage}
              onChange={handleChange}
              className="form-control"
              placeholder="https://example.com/samll_image.jpeg"
            />
          </label>

          {form.urlToImage && (
            <img
              src={form.urlToImage}
              className="img-thumbnail"
              alt=""
              style={{ height: "200px" }}
            />
          )}
        </div>

        <div className="d-flex mt-5">
          <button
            type="button"
            className="d-block btn btn-secondary me-4"
            onClick={handleReset}
          >
            Reset form
          </button>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </>
  );
};