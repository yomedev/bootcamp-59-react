import { Sidebar } from "./";
import { ToastContainer } from "react-toastify";
import { AuthProvider } from "../../context/AuthContext";
import { Outlet } from "react-router-dom";

export const Layout = ({ children }) => {
  return (
    <div className="d-flex h-100">
      <AuthProvider>
        <Sidebar />

        <main
          className="tab-content p-5 h-100 col-10"
          style={{ minHeight: "100vh" }}
        >
          <div className="tab-pane fade show active"><Outlet /></div>
        </main>
        <ToastContainer />
      </AuthProvider>
    </div>
  );
};
