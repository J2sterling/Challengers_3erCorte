// NavComponent.jsx
import React from "react";
import { NavLink } from "react-router-dom";
import "./NavComponent.module.css";

const NavComponent = () => {
  return (
    <nav className="nav-bar">
      <ul>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/login"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Login
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavComponent;
