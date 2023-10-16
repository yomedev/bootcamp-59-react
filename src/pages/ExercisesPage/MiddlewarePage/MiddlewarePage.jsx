import { useDispatch } from "react-redux";
import { getArticlesService } from "../../../services/articlesServices";
import { articlesThunk } from "../../../redux/store";

export const MiddlewarePage = () => {
  const dispatch = useDispatch();

  const handleFetch = () => {
    dispatch({ type: "test" });
    dispatch(articlesThunk());
    getArticlesService();
  };

  return (
    <button className="btn btn-primary my-4" onClick={handleFetch}>
      Get articles
    </button>
  );
};
