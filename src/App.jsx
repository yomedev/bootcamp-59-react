import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { lazy, useEffect } from "react";
import { Layout } from "./components/Layout";
import LoginPage from "./pages/LoginPage";
import NotFoundPage from "./pages/NotFoundPage";
import SingleArticlePage from "./pages/SingleArticlePage";
import CommentsPage from "./pages/SingleArticlePage/CommentsPage";
import NewArticlePage from "./pages/NewArticlePage";
import JoinPage from "./pages/JoinPage";
import { useDispatch } from "react-redux";
import { getUserThunk } from "./redux/users/usersThunk";
import { PrivateRoute } from "./components/PrivateRoute/PrivateRoute";
import { PublicRoute } from "./components/PublicRoute/PuclicRoute";
const ArticlesPage = lazy(() => import("./pages/ArticlesPage"));
const HomePage = lazy(() => import("./pages/HomePage"));
const ExercisesPage = lazy(() => import("./pages/ExercisesPage"));
const CounterPage = lazy(() => import("./pages/ExercisesPage/CounterPage"));
const ProductsPage = lazy(() => import("./pages/ExercisesPage/ProductsPage"));

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserThunk());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/articles" element={<ArticlesPage />} />
          <Route path="/articles/:articleId" element={<SingleArticlePage />}>
            <Route path="comments" element={<CommentsPage />} />
          </Route>

          <Route path="/" element={<PrivateRoute />}>
            <Route path="/new-article" element={<NewArticlePage />} />
            <Route path="/exercises" element={<ExercisesPage />}>
              <Route index element={<Navigate to="products" />} />
              <Route path="counter" element={<CounterPage />} />
              <Route path="products" element={<ProductsPage />} />
            </Route>
          </Route>

          <Route path="/" element={<PublicRoute />}>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/join" element={<JoinPage />} />
          </Route>

          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
