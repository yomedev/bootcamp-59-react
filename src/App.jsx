import { Layout } from "./components/Layout";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Articles } from "./components/Articles";
import { AuthContext } from "./context/AuthContext";
import { useState } from "react";
import { toast } from "react-toastify";

const App = () => {
  const [isAuth, setIsAuth] = useState(false);
  const [username, setUsername] = useState("");

  const login = (password, name) => {
    if (password === "123") {
      setIsAuth(true);
      setUsername(name);
      return;
    }
    toast.error("Incorrect password");
  };

  const logout = () => {
    setIsAuth(false);
    setUsername("");
  };

  return (
    <AuthContext.Provider value={{username, isAuth, login, logout }}>
      <Layout>
        <Articles />
        <ToastContainer />
      </Layout>
    </AuthContext.Provider>
  );
};

export default App;
