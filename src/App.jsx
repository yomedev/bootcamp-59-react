import { Layout } from "./components/Layout";
import { Articles } from "./components/Articles";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <Layout>
      <Articles />
      <ToastContainer />
    </Layout>
  );
};

export default App;
