import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import AuthContext from "../Context/AuthContext";
import toast from "react-hot-toast/headless";
import logo from "../assets/job.png";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  console.log(user);

  const signOutUser = () => {
    logOut();
    toast.success("Successfully sign out!");
  };
  const links = (
    <>
      <li>
        <NavLink
          className={({ isActive }) =>
            `hover:text-black transition ${
              isActive ? "text-primary bg-red-500" : ""
            }`
          }
          to="/"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            `hover:text-black transition ${
              isActive ? "text-primary bg-red-500" : ""
            }`
          }
          to="/about"
        >
          About
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            `hover:text-black transition ${
              isActive ? "text-primary bg-red-500" : ""
            }`
          }
          to="/service"
        >
          Service
        </NavLink>
      </li>
    </>
  );
  return (
    <>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">
            <img className="w-12" src={logo} alt="job-logo" />
            <h3>Job portal</h3>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end flex gap-3">
          {user ? (
            <>
              <button
                onClick={signOutUser}
                className="btn text-white font-bold bg-green-500"
              >
                Sign Out
              </button>
            </>
          ) : (
            <>
              <Link
                to={"/register"}
                className="btn bg-green-500 text-white font-bold"
              >
                Register
              </Link>
              <Link
                to={"/signin"}
                className="btn bg-green-500 text-white font-bold"
              >
                Sign In
              </Link>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
