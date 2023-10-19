import { useCallback, useEffect, useState } from "react";

import { toast } from "react-toastify";
import {
  getCommentsService,
  createCommentService,
  deleteCommentsService,
} from "../../../services/commentsServices";
import { useParams } from "react-router-dom";
import clsx from "clsx";
import { useSelector } from "react-redux";
import {
  selectUserToken,
  selectUserName,
} from "../../../redux/users/usersSelectors";

export const CommentsPage = () => {
  const [comments, setComments] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  const token = useSelector(selectUserToken);

  const userName = useSelector(selectUserName);

  const { articleId } = useParams();
  const [content, setContent] = useState("");
  const handleChange = (event) => setContent(event.target.value);
  const handleReset = () => setContent("");
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!content.trim()) {
      toast.error("Fill all required fields!");
      return;
    }
    setIsLoading(true);
    createCommentService({ content, author: userName, articleId })
      .then((data) => {
        toast.success("You have successfully created a new comment!");
        setComments((prev) => [...prev, data]);
        handleReset();
      })
      .catch(() => {
        toast.error("Something went wrong!");
      })
      .finally(() => setIsLoading(false));
  };

  const fetchComments = useCallback(
    () =>
      getCommentsService(articleId)
        .then(setComments)
        .catch(() => {
          toast.error("Something went wrong!");
        }),
    [articleId]
  );

  const handleDelete = (id) => {
    deleteCommentsService(id)
      .then(() =>
        setComments((prev) => prev.filter((comment) => comment._id !== id))
      )
      .catch(() => {
        toast.error("Something went wrong!");
      });
  };

  useEffect(() => {
    setIsLoading(true);
    fetchComments().finally(() => setIsLoading(false));
  }, [fetchComments]);

  if (isLoading) {
    return (
      <div className="spinner-border text-primary">
        <span className="visually-hidden">Loading...</span>
      </div>
    );
  }

  return (
    <>
      {token && (
        <form action="#" className="my-5" onSubmit={handleSubmit}>
          <label className="d-block form-label">
            <p>Post content</p>
            <textarea
              rows="5"
              value={content}
              onChange={handleChange}
              className="form-control"
              placeholder="Write your feedback"
            />
          </label>
          <button
            type="submit"
            className={clsx(
              "btn btn-primary my-2",
              isLoading ? "disabled" : ""
            )}
          >
            {isLoading && (
              <span className="spinner-grow spinner-grow-sm mr-2" />
            )}
            Submit
          </button>
        </form>
      )}
      {comments?.length ? (
        <ul className="list-group">
          {comments.map((comment) => (
            <li
              key={comment._id}
              className="list-group-item list-group-item-action py-4"
            >
              <div className="d-flex w-100 justify-content-between">
                <small>{comment.author}</small>
              </div>

              <div className="mb-4 mt-3">{comment.content}</div>
              <button
                className="btn btn-danger"
                onClick={() => handleDelete(comment._id)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No comments yet!</p>
      )}
    </>
  );
};