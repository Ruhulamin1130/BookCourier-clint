import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router";
import logo from "../../../assets/logobook.png";

const Navbar = () => {
  const user = false; // Replace with useAuth
  const handleLogout = () => {};

  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

  const navLinks = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-primary border-b-2 border-primary" : "text-primary"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/books"
          className={({ isActive }) =>
            isActive ? "text-primary border-b-2 border-primary" : "text-primary"
          }
        >
          Books
        </NavLink>
      </li>
      {user && (
        <li>
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              isActive
                ? "text-primary border-b-2 border-primary"
                : "text-primary"
            }
          >
            Dashboard
          </NavLink>
        </li>
      )}
    </>
  );

  return (
    <header className="sticky top-0 z-50 bg-base-100/80 dark:bg-gray-900 backdrop-blur-md border-b border-gray-200 dark:border-gray-700 shadow-md transition-colors">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="logo" className="w-16 h-10" />
          <span className="text-xl font-bold text-primary">BookCourier</span>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex gap-6">{navLinks}</nav>

        {/* Right Side */}
        <div className="flex items-center gap-3">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:scale-105 transition-all"
          >
            {theme === "light" ? "🌙" : "☀️"}
          </button>

          {/* User */}
          {user ? (
            <div className="dropdown dropdown-end">
              <label
                tabIndex={0}
                className="btn btn-ghost btn-circle avatar border border-gray-300 dark:border-gray-600 hover:scale-105 transition"
              >
                <div className="w-10 rounded-full">
                  <img
                    src={user.photoURL || "https://i.ibb.co/2n4H7pF/user.png"}
                    alt="user"
                  />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 p-3 shadow-lg bg-base-100 dark:bg-gray-800 rounded-xl w-52 border border-gray-200 dark:border-gray-700"
              >
                <li className="text-center font-semibold">
                  {user.displayName || "User"}
                </li>
                <li>
                  <button
                    onClick={handleLogout}
                    className="btn btn-sm w-full mt-2 bg-primary text-white border-none hover:bg-blue-600"
                  >
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <Link to="/login" className="btn btn-primary btn-sm">
              Login
            </Link>
          )}
        </div>

        {/* Mobile Menu */}
        <div className="lg:hidden dropdown dropdown-end">
          <label
            tabIndex={0}
            className="btn btn-ghost btn-circle text-gray-700 dark:text-gray-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 p-3 shadow-lg bg-base-100 dark:bg-gray-800 rounded-box w-52 border border-gray-200 dark:border-gray-700"
          >
            {navLinks}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
