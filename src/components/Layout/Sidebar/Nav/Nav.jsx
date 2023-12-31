import { useDispatch, useSelector } from "react-redux";
import { Button } from "../../../Button";
import { NavLink } from "react-router-dom";
import { selectUserName } from "../../../../redux/users/usersSelectors";
import { logoutThunk } from "../../../../redux/users/usersThunk";

export const Nav = () => {
  const username = useSelector(selectUserName);

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(logoutThunk());
  };

  return (
    <div className="d-flex flex-column justify-content-between h-100">
      <div className="d-flex flex-column justify-content-between">
        <h2 className="h3 mb-4">Welcome back, {username}!</h2>
        <NavLink
          to="/"
          style={{ textAlign: "left", marginLeft: "-10px" }}
          className={({ isActive }) =>
            isActive ? "btn btn-primary" : "btn btn-light"
          }
        >
          Home page
        </NavLink>
        <NavLink
          to="/articles"
          style={{ textAlign: "left", marginLeft: "-10px" }}
          className={({ isActive }) =>
            isActive ? "btn btn-primary" : "btn btn-light"
          }
        >
          Articles List
        </NavLink>
        <NavLink
          to="/new-article"
          style={{ textAlign: "left", marginLeft: "-10px" }}
          className={({ isActive }) =>
            isActive ? "btn btn-primary" : "btn btn-light"
          }
        >
          Create Article
        </NavLink>
        <NavLink
          to="/exercises"
          style={{ textAlign: "left", marginLeft: "-10px" }}
          className={({ isActive }) =>
            isActive ? "btn btn-primary" : "btn btn-light"
          }
        >
          React Exercises
        </NavLink>
      </div>

      <Button onClick={handleClick} className="btn-danger mt-auto">
        Log Out
      </Button>
    </div>
  );
};
