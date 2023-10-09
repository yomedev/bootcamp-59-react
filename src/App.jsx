import { Layout } from "./components/Layout";
import { ArticlesPage } from "./pages/ArticlesPage/ArticlesPage";
import { HomePage } from "./pages/HomePage/HomePage";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { LoginPage } from "./pages/LoginPage/LoginPage";
import { ExercisesPage } from "./pages/ExercisesPage/ExercisesPage";
import { NotFoundPage } from "./pages/NotFoundPage/NotFoundPage";
import { SingleArticlePage } from "./pages/SingleArticlePage/SingleArticlePage";
import { CounterPage } from "./pages/ExercisesPage/CounterPage/CounterPage";
import ProductsPage from "./pages/ExercisesPage/ProductsPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/articles" element={<ArticlesPage />} />
          <Route path="/articles/:articleId" element={<SingleArticlePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/exercises" element={<ExercisesPage />}>
            <Route index element={<Navigate to='products' />} />
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
