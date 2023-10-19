import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { loginThunk } from "../../redux/users/usersThunk";

const year = new Date().getFullYear();

const initialState = {
  email: "",
  password: "",
};

export const LoginPage = () => {
  const [form, setForm] = useState(initialState);

  const dispatch = useDispatch();

  

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(form);
    dispatch(loginThunk(form))
  };

  return (
    <form
      className="form-signin d-flex align-items-center justify-content-center mt-5"
      onSubmit={handleSubmit}
    >
      <div className="d-block" style={{ width: 300, height: "max-content" }}>
        <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

        <div className="form-floating">
          <input
            name="email"
            value={form.email}
            onChange={handleChange}
            type="email"
            className="form-control"
            id="email"
            placeholder="name@example.com"
          />
          <label htmlFor="email">Email address</label>
        </div>
        <div className="form-floating mt-4">
          <input
            name="password"
            value={form.password}
            onChange={handleChange}
            type="password"
            className="form-control"
            id="pass"
            placeholder="Password"
          />
          <label htmlFor="pass">Password</label>
        </div>

        <Link to="/join" className="d-block my-4">
          Dont have account?
        </Link>

        <button className="w-100 btn btn-lg btn-primary mt-4" type="submit">
          Sign in
        </button>

        <p className="mt-5 mb-3 text-muted">© {year}</p>
      </div>
    </form>
  );
};
