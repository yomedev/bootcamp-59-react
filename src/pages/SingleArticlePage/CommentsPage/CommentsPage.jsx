import { useCallback, useEffect, useState } from "react";

import { toast } from "react-toastify";
import { getComments } from "../../../services/commentsServices";

export const CommentsPage = () => {
  const [comments, setComments] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  const fetchComments = useCallback(
    () =>
      getComments()
        .then(setComments)
        .catch(() => {
          toast.error("Something went wrong!");
        }),
    []
  );

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

  if (!comments?.length) {
    return <p>No comments yet!</p>;
  }

  return (
    <>
      <ul className="list-group">
        {comments.map((comment) => (
          <li
            key={comment.id}
            className="list-group-item list-group-item-action py-4"
          >
            <div className="d-flex w-100 justify-content-between">
              <small>{comment.user.username}</small>
            </div>

            <div className="mb-4 mt-3">{comment.body}</div>
          </li>
        ))}
      </ul>
    </>
  );
};