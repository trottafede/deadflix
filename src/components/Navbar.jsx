import React from "react";
import { NavLink } from "react-router-dom";
import IsOnlineSpinner from "./IsOnlineSpinner";
export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <div className="container">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fas fa-skull-crossbones"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <NavLink draggable="false" exact to="/">
            <h4>
              Deadflix<i className="fas fa-skull-crossbones"></i>
            </h4>
          </NavLink>
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>

            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </div>

        <ul className="navbar-nav  ">
          <li>
            <IsOnlineSpinner />
          </li>
        </ul>
      </div>
    </nav>
  );
}
