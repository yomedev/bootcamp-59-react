import { Button } from "../../components/Button";
import { ArticlesItem } from "../../components/Articles/ArticlesItem";
import { ArticlesSearch } from "../../components/Articles/ArticlesSearch";
import { ArticlesLoader } from "../../components/Articles/ArticlesLoader";
import { ArticlesError } from "../../components/Articles/ArticlesError/ArticlesError";
import { fetchStatus } from "../../constants/fetchStatus";
import { useDispatch, useSelector } from "react-redux";
import { getArticlesThunk } from "../../redux/articles/articlesThunk";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

const PER_PAGE = 6;

export const ArticlesPage = () => {
  const { data, status } = useSelector((state) => state.articles);
  const { articles, total } = data;
  const dispatch = useDispatch();

  const [searchParams, setSearchParams] = useSearchParams();

  const page = searchParams.get("page") || 1;
  const search = searchParams.get("search") || "";

  const queryParams = Object.fromEntries(searchParams.entries());

  useEffect(() => {
    dispatch(getArticlesThunk({ page, search }));
  }, [dispatch, page, search]);

  if (status === fetchStatus.LOADING || status === fetchStatus.IDLE) {
    return <ArticlesLoader />;
  }

  if (status === fetchStatus.ERROR) {
    return <ArticlesError />;
  }

  const pageAmount = Math.ceil(total / PER_PAGE);

  return (
    <>
      <ArticlesSearch />
      <div className="container-fluid g-0">
        <div className="row">
          {articles?.map((article) => (
            <ArticlesItem key={article._id} article={article} />
          ))}
        </div>
      </div>

      <div className="pagination">
        <div className="btn-group my-4 mx-auto btn-group-lg">
          {[...Array(pageAmount)].map((_, index) => (
            <Button
              disabled={index + 1 === Number(page)}
              key={index}
              onClick={() =>
                setSearchParams({ ...queryParams, page: index + 1 })
              }
            >
              {index + 1}
            </Button>
          ))}
        </div>
      </div>
    </>
  );
};
