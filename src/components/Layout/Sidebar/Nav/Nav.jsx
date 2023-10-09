import { useContext } from "react";

import { Button } from "../../../Button";
import { AuthContext } from "../../../../context/AuthContext";
import { NavLink } from "react-router-dom";

export const Nav = () => {
  const { logout } = useContext(AuthContext);

  return (
    <div className="d-flex flex-column justify-content-between h-100">
      <div className="d-flex flex-column justify-content-between">
        <h2 className="h3 mb-4">Welcome back!</h2>

        <NavLink
          to="/"
          style={{ textAlign: "left", marginLeft: "-10px" }}
          className={({isActive}) => isActive ? "btn btn-primary" : "btn btn-light"}
        >
          Home page
        </NavLink>
        <NavLink
          to="/articles"
          style={{ textAlign: "left", marginLeft: "-10px" }}
          className={({isActive}) => isActive ? "btn btn-primary" : "btn btn-light"}
        >
          Articles list
        </NavLink>
        {/* <NavLink
          to="/login"
          style={{ textAlign: "left", marginLeft: "-10px" }}
          className={({isActive}) => isActive ? "btn btn-primary" : "btn btn-light"}
        >
          Login
        </NavLink> */}
        <NavLink
          to="/exercises"
          style={{ textAlign: "left", marginLeft: "-10px" }}
          className={({isActive}) => isActive ? "btn btn-primary" : "btn btn-light"}
        >
          React Exercises
        </NavLink>
      </div>

      <Button onClick={logout} className="btn-danger mt-auto">
        Log Out
      </Button>
    </div>
  );
};
