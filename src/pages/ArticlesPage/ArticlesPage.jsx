import { Button } from "../../components/Button";
import { ArticlesItem } from "../../components/Articles/ArticlesItem";
import { ArticlesSearch } from "../../components/Articles/ArticlesSearch";
import { ArticlesLoader } from "../../components/Articles/ArticlesLoader";
import { ArticlesError } from "../../components/Articles/ArticlesError/ArticlesError";
import { getArticlesService } from "../../services/articlesServices";
import { useCallback, useMemo } from "react";
import { useFetch } from "../../hooks/useFetch";
import { fetchStatus } from "../../constants/fetchStatus";
import { useSearchParams } from "react-router-dom";

export const ArticlesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const page = searchParams.get("page") ?? 1;
  const query = searchParams.get("search") ?? "";

  const queryParams = useMemo(() => {
    return Object.fromEntries(searchParams.entries());
  }, [searchParams]);


  const fetchArticles = useCallback(
    () => getArticlesService(query, page),
    [page, query]
  );

  const handleLoadMore = (page) => {
    setSearchParams({ ...queryParams, page });
  };

  const { data: articles, status } = useFetch(fetchArticles);

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
            <Button
              onClick={() => handleLoadMore(index + 1)}
              disabled={index + 1 === Number(page)}
              key={index}
            >
              {index + 1}
            </Button>
          ))}
        </div>
      </div>
    </>
  );
};
