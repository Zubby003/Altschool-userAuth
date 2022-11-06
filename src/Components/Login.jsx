import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "./Auth";
import { useState } from "react";
import Validation from "./Validation";

const Login = () => {
  const [values, setValues] = useState({ user: "", email: "" });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const { login } = useAuth();
  const location = useLocation();
  const redirectPath = location.state?.path || "/home";

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setErrors(Validation(values));

    login(values);
    navigate(redirectPath, { replace: true });
  };

  return (
    <section className="container">
      <form className="form">
        <h2>Login</h2>

        <input
          type="text"
          name="user"
          value={values.user}
          placeholder="Enter username"
          onChange={handleChange}
          className="box"
        />
        {errors.user && <p>{errors.user}</p>}

        <input
          type="text"
          name="email"
          value={values.email}
          placeholder="your@email.com"
          onChange={handleChange}
          className="box"
        />
        {errors.email && <p>{errors.email}</p>}

        <button type="submit" onClick={handleLogin}>
          Login
        </button>
      </form>
      <div className="side">
        <img src="/image.png" alt="" />
      </div>
    </section>
  );
};

export default Login;
