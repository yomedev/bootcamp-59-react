import { Sidebar } from "./";
import { ToastContainer } from "react-toastify";
import { AuthProvider } from "../../context/AuthContext";
import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import { Loader } from "../Loader";

export const Layout = () => {
  return (
    <div className="d-flex h-100">
      <AuthProvider>
        <Sidebar />

        <main
          className="tab-content p-5 h-100 col-10"
          style={{ minHeight: "100vh" }}
        >
          <div className="tab-pane fade show active">
            <Suspense fallback={<Loader />}>
              <Outlet />
            </Suspense>
          </div>
        </main>
        <ToastContainer />
      </AuthProvider>
    </div>
  );
};
