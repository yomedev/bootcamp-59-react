import { createContext, useState } from "react";
import { toast } from "react-toastify";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(true);
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
    <AuthContext.Provider value={{ username, isAuth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
