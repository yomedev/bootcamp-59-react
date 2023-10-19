import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { registerThunk } from "../../redux/users/usersThunk";

const year = new Date().getFullYear();
const initialState = {
  email: "",
  name: "",
  password: "",
};

export const JoinPage = () => {
  const [form, setForm] = useState(initialState);

  const dispatch = useDispatch();

  const handleChange = (event) => {
    const { value, name } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(form);
    dispatch(registerThunk(form))
  };

  return (
    <>
      <form
        action="#"
        className="mt-5 mx-auto p-0"
        style={{ width: "450px" }}
        onSubmit={handleSubmit}
      >
        <h1 className="h3 mb-3 fw-normal">Please Sign In</h1>

        <div className="form-floating my-4">
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="username"
            value={form.email}
            onChange={handleChange}
            className="form-control"
          />
          <label htmlFor="email">Email address</label>
        </div>

        <div className="form-floating my-4">
          <input
            id="first_name"
            name="name"
            type="first_name"
            autoComplete="off"
            value={form.name}
            onChange={handleChange}
            className="form-control"
          />
          <label htmlFor="first_name">Name</label>
        </div>

        <div className="form-floating my-4">
          <input
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            value={form.password}
            onChange={handleChange}
            className="form-control"
          />
          <label htmlFor="password">Password</label>
        </div>

        <Link to="/login" className="d-block my-4">
          Already has account?
        </Link>

        <button className="w-100 mt-2 btn btn-lg btn-primary" type="submit">
          Sign Up
        </button>
        <p className="mt-5 mb-3 text-muted">© {year}</p>
      </form>
    </>
  );
};
