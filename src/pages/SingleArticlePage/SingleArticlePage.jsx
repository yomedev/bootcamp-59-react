import { useEffect, useState } from "react";

import { toast } from "react-toastify";
import { Link, Outlet, useLocation, useParams } from "react-router-dom";

import { Loader } from "../../components/Loader";
import { getSingleArticleService } from "../../services/articlesServices";

export const SingleArticlePage = () => {
  const { articleId } = useParams();

  const location = useLocation();
  const prevLocation = location.state?.from ?? "/articles";

  const [article, setArticle] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);

    getSingleArticleService(articleId)
      .then(setArticle)
      .catch(() => {
        toast.error("Something went wrong!");
      })
      .finally(() => setIsLoading(false));
  }, [articleId]);

  if (isLoading) {
    return <Loader />;
  }

  if (!article) {
    return <></>;
  }

  return (
    <>
      <Link to={prevLocation} className="btn btn-primary my-3">
        Back
      </Link>
      <img
        src={article.urlToImage || "/default_image.png"}
        alt={article.title}
        className="img-fluid mb-4"
        style={{ maxHeight: "600px", width: "100%", objectFit: "cover" }}
      />
      <h1 className="mb-5">{article.title}</h1>

      <div>{article.content}</div>

      <Link state={location.state} to="comments" className="btn btn-primary my-4">
        Vew post comments
      </Link>
      <Outlet />
    </>
  );
};
