import ReactDOM from "react-dom/client";
// import { createElement } from "react";

// const link = createElement(
//   "a",
//   { href: "/home", alt: "Home", title: "Home" },
//   createElement("p", null, "To home")
// );

const Link = ({ href, alt, label }) => {
  return (
    <a href={href} alt={alt}>
      {label}
    </a>
  );
};

// const test = `<a href=${1} alt=${2}>
// ${3}
// </a>`;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    <Link href="/home" alt="home" label="Home" />
  </div>
);

// Link({ href: "/home", alt: "home", label: "Home" });
