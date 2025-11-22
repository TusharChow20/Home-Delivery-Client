import React from "react";
import Logo from "../../../Components/Logo";
import { Link, NavLink } from "react-router";
import useAuth from "../../../Hooks/useAuth";

const NavBar = () => {
  const { user, signOutUser } = useAuth();
  const handleSignOut = () => {
    signOutUser();
  };
  const allLinks = (
    <>
      <li>
        <a>Item 1</a>
      </li>
      <li>
        <NavLink to={"/coverage"}>Coverage</NavLink>
      </li>
      <li>
        <NavLink to={"/sendParcel"}>Send Parcel</NavLink>
      </li>
      {user && (
        <li>
          <NavLink to={"/dashboard/myParcels"}>My Parcels</NavLink>
        </li>
      )}
    </>
  );
  return (
    <div className="">
      <div className="navbar bg-base-100 shadow-sm rounded-2xl  ">
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
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {allLinks}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">
            <Logo />
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{allLinks}</ul>
        </div>
        <div className="navbar-end gap-3">
          {user ? (
            <a onClick={handleSignOut} className="btn">
              Sign Out
            </a>
          ) : (
            <Link to={"/login"} className="btn">
              Login
            </Link>
          )}
          <Link
            className="btn bg-primary p-2 rounded-xl"
            to={"/riderRegistration"}
          >
            Be A Rider
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
