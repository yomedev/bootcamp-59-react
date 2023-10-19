import { useSelector } from "react-redux"
import { selectUserToken } from "../../redux/users/usersSelectors"
import { Navigate, Outlet, useLocation } from "react-router-dom"

export const PublicRoute = () => {
  const token = useSelector(selectUserToken)
  const location = useLocation();
  console.log(location);
  return !token ? <Outlet /> : <Navigate to={location.state?.fromLogin ?? '/articles'} />
}