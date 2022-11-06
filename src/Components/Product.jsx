import React from "react";
import { Helmet } from "react-helmet-async";
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
      <Helmet>
        <title>Products</title>
        <meta name="description" content="shop our latest products now" />
        <link rel="canonical" href="/product" />
      </Helmet>
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
