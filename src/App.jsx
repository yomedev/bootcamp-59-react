import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { lazy } from "react";
import { Layout } from "./components/Layout";
// import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
// import ArticlesPage from "./pages/ArticlesPage";
// import ExercisesPage from "./pages/ExercisesPage";
import NotFoundPage from "./pages/NotFoundPage";
import SingleArticlePage from "./pages/SingleArticlePage";
// import CounterPage from "./pages/ExercisesPage/CounterPage";
// import ProductsPage from "./pages/ExercisesPage/ProductsPage";
import CommentsPage from "./pages/SingleArticlePage/CommentsPage";
const ArticlesPage = lazy(() => import("./pages/ArticlesPage"));
const HomePage = lazy(() => import("./pages/HomePage"));
const ExercisesPage = lazy(() => import("./pages/ExercisesPage"));
const CounterPage = lazy(() => import("./pages/ExercisesPage/CounterPage"));
const ProductsPage = lazy(() => import("./pages/ExercisesPage/ProductsPage"));

const App = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="/articles" element={<ArticlesPage />} />
            <Route path="/articles/:articleId" element={<SingleArticlePage />}>
              <Route path="comments" element={<CommentsPage />} />
            </Route>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/exercises" element={<ExercisesPage />}>
              <Route index element={<Navigate to="products" />} />
              <Route path="counter" element={<CounterPage />} />
              <Route path="products" element={<ProductsPage />} />
            </Route>

            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
    </BrowserRouter>
  );
};

export default App;
