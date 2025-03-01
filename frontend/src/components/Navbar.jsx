import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../store/auth";
import { FiSun, FiMoon } from "react-icons/fi";

export const Navbar = () => {
  const { isLoggedIn, user } = useAuth();
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    document.body.classList.toggle("dark-theme", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Fynzo<i style={{color:"purple"}}>Vault</i></a>
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
          {/* Centered Navigation Links */}
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0 m " >
            <li className="nav-item">
            <NavLink className="nav-link active" to="/">Home</NavLink>
            </li>
            <li className="nav-item">
             
              <NavLink className="nav-link active" to="/about">About</NavLink>
             
            </li>
            <li className="nav-item">
             
              <NavLink className="nav-link active" to="/add">Transaction</NavLink>
             
            </li>
          </ul>

          {/* Theme Toggle Button */}
          <button
            className="btn btn-outline-secondary me-3"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          >
            {theme === "light" ? <FiMoon size={20} /> : <FiSun size={20} />}
          </button>

          {/* User Dropdown */}
          {isLoggedIn ? (
            <div className="dropdown">
              <button
                className="btn btn- dropdown-toggle"
                type="button"
                id="userDropdown"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{ color: "black" }} >
                <i className="fas fa-user fa-lg" style={{ color: "black" }}></i>
              </button>
              <ul
                className="dropdown-menu dropdown-menu-end"
                aria-labelledby="userDropdown" >

               <b> <li className="dropdown-item disabled" style={{ color: "black" }}>
                  Welcome, {user ? user.username : "Guest"}
                </li>
                 <li>
                  <NavLink className="dropdown-item" to="/logout" style={{ color: "black" }}>
                    Logout
                  </NavLink>
                  </li></b>
              </ul>
            </div>
          ) : (
            <>
              <NavLink to="/register" className="btn btn-dark me-2">
                <i className="fas fa-user-plus"></i> Sign Up
              </NavLink>
              <NavLink to="/login" className="btn btn-dark">
                <i className="fas fa-sign-in-alt"></i> Login
              </NavLink>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};