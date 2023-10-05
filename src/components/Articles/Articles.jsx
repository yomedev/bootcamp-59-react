import { useCallback, useEffect, useState } from "react";

import { Button } from "../Button";

import { ArticlesItem } from "./ArticlesItem";
import { ArticlesSearch } from "./ArticlesSearch";
import { ArticlesLoader } from "./ArticlesLoader";
import { ArticlesError } from "./ArticlesError/ArticlesError";
import { toast } from "react-toastify";
import { getArticlesService } from "../../services/articlesServices";
import { fetchStatus } from "../../constants/fetchStatus";
import { useFetch } from "../../hooks/useFetch";
// const articles = [...Array(6)];

// const PER_PAGE = 6;


export const Articles = () => {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  const fetchArticles = useCallback(() => getArticlesService(search, page), [page, search])

  const { data, status } = useFetch(fetchArticles);
  const articles = data.articles;

  const handleChangeSearch = (value) => {
    setSearch(value);
    setPage(1);
  };

  const handleLoadMore = () => {
    setPage((prev) => prev + 1);
  };

  // const canLoadMore = Math.ceil(this.totalResults / PER_PAGE) > page;

  return (
    <>
      <ArticlesSearch onSubmit={handleChangeSearch} />
      {status === fetchStatus.LOADING && <ArticlesLoader />}
      {status === fetchStatus.ERROR && <ArticlesError />}
      <div className="container-fluid g-0">
        <div className="row">
          {articles?.map((article) => (
            <ArticlesItem key={article.url} article={article} />
          ))}
        </div>
      </div>

      {true && (
        <div className="pagination">
          <div className="btn-group my-4 mx-auto btn-group-lg">
            <Button onClick={handleLoadMore}>Load more</Button>
          </div>
        </div>
      )}
    </>
  );
};

// export class Articles extends Component {
//   state = {
//     articles: [],
//     isLoading: false,
//     isError: false,
//     status: fetchStatus.IDLE,
//     search: "",
//     page: 1,
//   };

//   totalResults = null;

//   async componentDidMount() {
//     // this.setState({ isLoading: true });
//     this.setState({ status: fetchStatus.LOADING });
//     try {
//       const { articles } = await getArticlesService();
//       console.log(articles);
//       this.setState({ articles: articles, status: fetchStatus.SUCCESS });
//     } catch (error) {
//       toast.error(error.message);
//       // this.setState({isError: true})
//       this.setState({ status: fetchStatus.ERROR });
//     }
//     // finally {
//     //   this.setState({ isLoading: false });
//     // }
//   }

//   async componentDidUpdate(_, prevState) {
//     const { search, page } = this.state;
//     if (prevState.search !== search || prevState.page !== page) {
//       this.setState({ status: fetchStatus.LOADING });
//       try {
//         const { articles, totalResults } = await getArticlesService(
//           search,
//           page
//         );
//         this.totalResults = totalResults;
//         console.log(totalResults);
//         this.setState((prevState) => ({
//           articles: page > 1 ? [...prevState.articles, ...articles] : articles,
//           status: fetchStatus.SUCCESS,
//         }));
//       } catch (error) {
//         toast.error(error.message);
//         this.setState({ status: fetchStatus.ERROR });
//       }
//     }
//   }

//   handleChangeSearch = (value) => {
//     this.setState({ search: value, page: 1 });
//   };

//   handleLoadMore = () => {
//     this.setState((prevState) => ({ page: prevState.page + 1 }));
//   };

//   render() {
//     const { articles, status, page } = this.state;

//     const canLoadMore = Math.ceil(this.totalResults / PER_PAGE) > page;

//     return (
//       <>
//         <ArticlesSearch onSubmit={this.handleChangeSearch} />
//         {status === fetchStatus.LOADING && <ArticlesLoader />}
//         {status === fetchStatus.ERROR && <ArticlesError />}
//         <div className="container-fluid g-0">
//           <div className="row">
//             {articles?.map((article) => (
//               <ArticlesItem key={article.url} article={article} />
//             ))}
//           </div>
//         </div>

//         {canLoadMore && (
//           <div className="pagination">
//             <div className="btn-group my-4 mx-auto btn-group-lg">
//               <Button onClick={this.handleLoadMore}>Load more</Button>
//             </div>
//           </div>
//         )}
//       </>
//     );
//   }
// }
