import { useContext } from "react";
import { Login } from "./Login/Login";
import { Nav } from "./Nav/Nav";
import { AuthContext } from "../../../context/AuthContext";

export const Sidebar = () => {
  const {isAuth} = useContext(AuthContext)
  return (
    <aside className="nav nav-pills p-5 bg-light col-2" style={{ height: 'auto' }}>
      <div className="d-flex flex-column" style={{ position: 'sticky', top: 30, left: 0, height: '88vh' }}>
      {isAuth ? <Nav /> : <Login />}
      </div>
    </aside>
  );
};