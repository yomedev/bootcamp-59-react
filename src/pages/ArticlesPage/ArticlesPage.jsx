import { Button } from "../../components/Button";
import { ArticlesItem } from "../../components/Articles/ArticlesItem";
import { ArticlesSearch } from "../../components/Articles/ArticlesSearch";
import { ArticlesLoader } from "../../components/Articles/ArticlesLoader";
import { ArticlesError } from "../../components/Articles/ArticlesError/ArticlesError";
import { fetchStatus } from "../../constants/fetchStatus";
import { useDispatch, useSelector } from "react-redux";
import { getArticlesThunk } from "../../redux/articles/articlesThunk";
import { useEffect } from "react";

export const ArticlesPage = () => {
  const { data: articles, status } = useSelector((state) => state.articles);
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getArticlesThunk())
  }, [dispatch])

  if (status === fetchStatus.LOADING || status === fetchStatus.IDLE) {
    return <ArticlesLoader />;
  }

  if (status === fetchStatus.ERROR) {
    return <ArticlesError />;
  }

  return (
    <>
      <ArticlesSearch />
      <div className="container-fluid g-0">
        <div className="row">
          {articles?.map((article) => (
            <ArticlesItem key={article.id} article={article} />
          ))}
        </div>
      </div>

      <div className="pagination">
        <div className="btn-group my-4 mx-auto btn-group-lg">
          {[...Array(5)].map((_, index) => (
            <Button key={index}>{index + 1}</Button>
          ))}
        </div>
      </div>
    </>
  );
};
