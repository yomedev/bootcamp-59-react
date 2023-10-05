import { Layout } from "./components/Layout";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthProvider } from "./context/AuthContext";
// import { Articles } from "./components/Articles";
// import { Rerender } from "./components/Rerender/Rerender";
// import { Memo } from "./components/Memo/Memo";
import { Products } from "./components/Products/Products";

const App = () => {
  return (
    <AuthProvider>
      <Layout>
        {/* <Rerender /> */}
        <Products /> 
         {/* <Memo /> */}
        {/* <Articles /> */}
        <ToastContainer />
      </Layout>
    </AuthProvider>
  );
};

export default App;
