import { Sidebar } from "./";

export const Layout = ({ children }) => {
  return (
    <div className="d-flex h-100">
      <Sidebar />

      <main
        className="tab-content p-5 h-100"
        style={{ minHeight: "100vh", width: "calc(100% - 200px)" }}
      >
        <div className="tab-pane fade show active">{children}</div>
      </main>
    </div>
  );
};
