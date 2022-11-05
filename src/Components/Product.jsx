import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "./Auth";

const Product = () => {
  const { values, logout } = useAuth();
  const navigate = useNavigate();
  const handleLogout = () => {
    logout();
    navigate("/home");
  };
  return (
    <>
      <div className="cover">
        <h1>Welcome:{values.user} you are logged in</h1>
        <Link to="featured" className="featured">
          View Our Products
        </Link>
      </div>
      <Outlet />
      <button onClick={handleLogout}>Logout</button>
    </>
  );
};

export default Product;
