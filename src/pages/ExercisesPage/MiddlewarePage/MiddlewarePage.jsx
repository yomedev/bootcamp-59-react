import { getArticlesService } from "../../../services/articlesServices";

export const MiddlewarePage = () => {

  const handleFetch = () => {
    getArticlesService()
  }

  return (
    <button className="btn btn-primary my-4" onClick={handleFetch}>
      Get articles
    </button>
  );
};