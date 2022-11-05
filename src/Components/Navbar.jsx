import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { useAuth } from "./Auth";
import { FaHeart } from "react-icons/fa";

const Navbar = () => {
  const { values } = useAuth();
  return (
    <nav>
      <div className="navItem">
        <NavLink to="/home">Home</NavLink>
        <NavLink to="/product">products</NavLink>
        {!values.user && <NavLink to="/login">Login</NavLink>}
      </div>
    </nav>
  );
};

export default Navbar;
