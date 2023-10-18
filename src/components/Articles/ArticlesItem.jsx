import formatDistanceToNow from "date-fns/formatDistanceToNow";
import { Link, useLocation } from "react-router-dom";

import { cutString } from "../../helpers/cut-string";
import { useDispatch, useSelector } from "react-redux";
import { deleteArticleThunk } from "../../redux/articles/articlesThunk";
import { selectUserData } from "../../redux/users/usersSelectors";

export const ArticlesItem = ({ article }) => {
  const location = useLocation();

  const user = useSelector(selectUserData);

  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteArticleThunk(article._id));
  };

  return (
    <div className="col-12 col-lg-6 col-xl-4 mb-4">
      <div className="card">
        <img
          height="250px"
          alt={article.title}
          src={article.urlToImage ?? "/default_image.png"}
          className="card-img-top"
          style={{ objectFit: "cover" }}
        />

        <div className="card-body">
          <h5 className="card-title">{cutString(article.title, 60)}</h5>

          <p className="card-text">{cutString(article.content, 60)}</p>

          <ul className="list-group list-group-flush mb-4">
            <li className="list-group-item">Author: {article.author}</li>
            <li className="list-group-item">
              Created: {formatDistanceToNow(new Date(article.createdAt))}
            </li>
          </ul>

          <div className="d-flex">
            {user?._id === article.userId && (
              <button
                onClick={handleDelete}
                type="button"
                className="btn btn-danger"
              >
                Delete article
              </button>
            )}

            <Link
              state={{ from: location }}
              to={article._id}
              className="btn btn-primary ms-3"
            >
              Read article
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
