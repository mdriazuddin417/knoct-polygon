import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import profile from "../../assets/profile.png";
import { BiBell } from "react-icons/bi";

const Header = () => {
  const navItem = (
    <>
      <li id="sidebar">
        <NavLink to={"/"} className="text-[16px]">
          Home
        </NavLink>
      </li>

      <li id="sidebar">
        <NavLink to={"/scan"} className="text-[16px]">
          Scan
        </NavLink>
      </li>
      <li id="sidebar">
        <NavLink to={"/wallet"} className="text-[16px]">
          Wallet
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navItem}
          </ul>
        </div>
        <Link to={"/"}>
          <img src={logo} alt="" className="w-[120px]" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-5">{navItem}</ul>
      </div>

      <div className="navbar-end">
        <button className="btn btn-ghost btn-circle">
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
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
        <Link to={"/notification"} className="btn btn-ghost btn-circle">
          <div className="indicator">
            <span className="indicator-item badge badge-xs badge-secondary text-white">
              5
            </span>

            <BiBell size={20} color={"black"} />
          </div>
        </Link>

        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src={profile} alt="profile" />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
