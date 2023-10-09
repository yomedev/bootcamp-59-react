import { useContext } from "react";
import { Nav } from "./Nav/Nav";
import { AuthContext } from "../../../context/AuthContext";
import { Link } from "react-router-dom";

export const Sidebar = () => {
  const { isAuth } = useContext(AuthContext);
  return (
    <aside
      className="nav nav-pills p-5 bg-light col-2"
      style={{ height: "auto" }}
    >
      <div
        className="d-flex flex-column"
        style={{ position: "sticky", top: 30, left: 0, height: "88vh" }}
      >
        {isAuth ? (
          <Nav />
        ) : (
          <div>
            <Link to="/" className="btn btn-light">Home page</Link>
            <Link to="login" className="btn btn-light">Login</Link>
            <Link to="register" className="btn btn-light">Register</Link>
          </div>
        )}
      </div>
    </aside>
  );
};
