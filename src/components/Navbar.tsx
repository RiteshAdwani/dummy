import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { useTheme } from "@mui/material/styles";
import { Link } from "react-router-dom";

const Navbar = () => {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === "dark";

  return (
    <div
      className={`navbar-container ${
        isDarkMode ? "navbar-dark" : "navbar-light"
      }`}
    >
      <div className="navbar-wrapper d-flex align-items-center justify-content-end px-3">
        <div className="search-bar-wrapper d-flex py-1 px-2">
          <input type="text" placeholder="Search" className="search-bar" />
          <SearchIcon className="search-icon" />
        </div>

        <Link to="signin" className="text-decoration-none">
          <button className="navbar-sign-in-btn d-flex align-items-center mt-1">
            <AccountCircleOutlinedIcon className="me-lg-2 me-1" />
            SIGN IN
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
