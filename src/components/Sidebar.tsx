import React from "react";
import Logo from "../assets/logo.svg";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import SubscriptionsOutlinedIcon from "@mui/icons-material/SubscriptionsOutlined";
import VideoLibraryOutlinedIcon from "@mui/icons-material/VideoLibraryOutlined";
import HistoryOutlinedIcon from "@mui/icons-material/HistoryOutlined";
import LibraryMusicOutlinedIcon from "@mui/icons-material/LibraryMusicOutlined";
import SportsBasketballOutlinedIcon from "@mui/icons-material/SportsBasketballOutlined";
import SportsEsportsOutlinedIcon from "@mui/icons-material/SportsEsportsOutlined";
import MovieCreationOutlinedIcon from "@mui/icons-material/MovieCreationOutlined";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import LiveTvOutlinedIcon from "@mui/icons-material/LiveTvOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import FlagOutlinedIcon from "@mui/icons-material/FlagOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import SettingsBrightnessOutlinedIcon from "@mui/icons-material/SettingsBrightnessOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";

type SidebarProps = {
  toggleTheme: () => void;
  darkMode: boolean;
};

const Sidebar = ({ toggleTheme, darkMode }: SidebarProps) => {
  return (
    <div className="sidebar">
      <Link to="/" className="logo-link text-decoration-none">
        <div className="d-flex p-xxl-3 p-1 d-flex align-items-center">
          <img src={Logo} alt="Logo" className="logo-img"/>
          <p className="pt-1 ms-1 mb-0 fw-bold sidebar-text">ViewTube</p>
        </div>
      </Link>

      <div className="d-flex flex-column mx-xl-3 p-md-2 p-0">
        <Link to="/" className="text-decoration-none home-link">
          <div className="sidebar-item mb-2 d-flex">
            <HomeIcon className="pt-1" />
            <p className="ms-2 pt-1 mb-0  sidebar-text">Home</p>
          </div>
        </Link>

        <div className="sidebar-item mb-2 d-flex">
          <ExploreOutlinedIcon className="pt-1" />
          <p className="ms-2 pt-1 mb-0 sidebar-text">Explore</p>
        </div>

        <div className="sidebar-item mb-2 d-flex">
          <SubscriptionsOutlinedIcon className="pt-1" />
          <p className="ms-2 pt-1 mb-0 sidebar-text">Subscriptions</p>
        </div>

        <hr className="m-0" />

        <div className="sidebar-item mb-2 mt-2 d-flex">
          <VideoLibraryOutlinedIcon className="pt-1" />
          <p className="ms-2 pt-1 mb-0 sidebar-text">Library</p>
        </div>

        <div className="sidebar-item mb-2 d-flex">
          <HistoryOutlinedIcon className="pt-1" />
          <p className="ms-2 pt-1 mb-0 sidebar-text">History</p>
        </div>

        <hr className="m-0" />

        <div className="my-2">
          <p className="mb-0 sidebar-text">Sign in to like videos, comment and subscribe</p>
          <Link to="signin" className="text-decoration-none sidebar-text">
            <button className="sidebar-sign-in-btn my-2 d-flex align-items-center ">
              <AccountCircleOutlinedIcon className="me-2" />
              SIGN IN
            </button>
          </Link>
        </div>

        <hr className="m-0 sidebar-text" />

        <div className="sidebar-item mb-2 mt-2 d-flex">
          <LibraryMusicOutlinedIcon className="pt-1" />
          <p className="ms-2 pt-1 mb-0 sidebar-text">Music</p>
        </div>

        <div className="sidebar-item mb-2 d-flex">
          <SportsBasketballOutlinedIcon className="pt-1" />
          <p className="ms-2 pt-1 mb-0 sidebar-text">Sports</p>
        </div>

        <div className="sidebar-item mb-2 d-flex">
          <SportsEsportsOutlinedIcon className="pt-1" />
          <p className="ms-2 pt-1 mb-0 sidebar-text">Gaming</p>
        </div>

        <div className="sidebar-item mb-2 d-flex">
          <MovieCreationOutlinedIcon className="pt-1" />
          <p className="ms-2 pt-1 mb-0 sidebar-text">Movies</p>
        </div>

        <div className="sidebar-item mb-2 d-flex">
          <ArticleOutlinedIcon className="pt-1" />
          <p className="ms-2 pt-1 mb-0 sidebar-text">News</p>
        </div>

        <div className="sidebar-item mb-2 d-flex">
          <LiveTvOutlinedIcon className="pt-1" />
          <p className="ms-2 pt-1 mb-0 sidebar-text">Live</p>
        </div>

        <hr className="m-0" />

        <div className="sidebar-item mb-2 mt-2 d-flex">
          <SettingsOutlinedIcon className="pt-1" />
          <p className="ms-2 pt-1 mb-0 sidebar-text">Settings</p>
        </div>

        <div className="sidebar-item mb-2 d-flex">
          <FlagOutlinedIcon className="pt-1" />
          <p className="ms-2 pt-1 mb-0 sidebar-text">Report</p>
        </div>

        <div className="sidebar-item mb-2 d-flex">
          <HelpOutlineOutlinedIcon className="pt-1" />
          <p className="ms-2 pt-1 mb-0 sidebar-text">Help</p>
        </div>

        <div className="sidebar-item mb-2 d-flex" onClick={toggleTheme}>
          <SettingsBrightnessOutlinedIcon className="pt-1" />
          <p className="ms-2 pt-1 mb-0 sidebar-text">{darkMode ? "Light" : "Dark"} Mode</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
