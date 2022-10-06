import React from "react";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const state = useSelector((state) => state.handleCart)
  return (
    <div>
      <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-white shadow-sm py-3">
        <div className="container">
          <NavLink className="navbar-brand fs-2 fw-bolder" to="/">
            <span
              data-bs-toggle="collapse"
              data-bs-target=".navbar-collapse.show"
            >
              EMart
            </span>
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  <span
                    data-bs-toggle="collapse"
                    data-bs-target=".navbar-collapse.show"
                  >
                    Home
                  </span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/products">
                  <span
                    data-bs-toggle="collapse"
                    data-bs-target=".navbar-collapse.show"
                  >
                    Products
                  </span>
                </Link>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  <span
                    data-bs-toggle="collapse"
                    data-bs-target=".navbar-collapse.show"
                  >
                    About
                  </span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">
                  <span
                    data-bs-toggle="collapse"
                    data-bs-target=".navbar-collapse.show"
                  >
                    Contact
                  </span>
                </NavLink>
              </li>
            </ul>
            <div className="buttons">
              <NavLink to="/login" className="btn btn-outline-dark">
                <i className="fa fa-sign-in me-1"></i>{" "}
                <span
                  data-bs-toggle="collapse"
                  data-bs-target=".navbar-collapse.show"
                >
                  Login
                </span>
              </NavLink>
              <NavLink to="/register" className="btn btn-outline-dark">
                <i className="fa fa-user-plus ms-2"></i>{" "}
                <span
                  data-bs-toggle="collapse"
                  data-bs-target=".navbar-collapse.show"
                >
                  Register
                </span>
              </NavLink>
              <NavLink to="/cart" className="btn btn-outline-dark">
                <i className="fa fa-shopping-cart ms-2"></i>{" "}
                <span
                  data-bs-toggle="collapse"
                  data-bs-target=".navbar-collapse.show"
                >
                  Cart ({state.length})
                </span>
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
