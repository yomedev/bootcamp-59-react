import { useSelector } from "react-redux";
import { Nav } from "./Nav";
import { NotAuth } from "./NotAuth";
import { selectUserToken } from "../../../redux/users/usersSelectors";

export const Sidebar = () => {
  const token = useSelector(selectUserToken)
  return (
    <aside
      className="nav nav-pills p-5 bg-light col-2"
      style={{ height: "auto" }}
    >
      <div
        className="d-flex flex-column"
        style={{ position: "sticky", top: 30, left: 0, height: "88vh" }}
      >
        {token ? <Nav /> : <NotAuth />}
      </div>
    </aside>
  );
};