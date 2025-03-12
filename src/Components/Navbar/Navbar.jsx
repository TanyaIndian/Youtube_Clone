import React, { useEffect, useState } from "react";
import "./Navbar.css";
import menu_icon from "../../assets/menu.png";
import logo from "../../assets/logo.png";
import serach_icon from "../../assets/search.png";
import upload_icon from "../../assets/upload.png";
import more_icon from "../../assets/more.png";
import notification_icon from "../../assets/notification.png";
import profile_icon from "../../assets/jack.png";
import Sidebar from "../Sidebar/Sidebar";
import { Link } from "react-router-dom";

const Navbar = ({ setSidebar, setSearchedData }) => {
  const [searchQuery, setSearchQuery] = useState(""); // Store input value

  // Function to handle search action
  const handleSearch = () => {
    if (searchQuery.trim() === "") {
      alert("Please type something before searching!"); // Show alert if empty
      return;
    }
    setSearchedData(searchQuery); // Send data to parent
    // console.log(searchQuery)
    setSearchQuery('')
  };

  // Handle Enter key press
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <nav className="flex-div">
      <div className="nav-left flex-div">
        <img
          className="menu-icon"
          onClick={() => setSidebar((prev) => !prev)}
          src={menu_icon}
          alt=""
        />
        <Link to="/">
          <img className="logo" src={logo} alt="" />
        </Link>
      </div>

      <div className="nav-middle flex-div">
        <div className="search-box flex-div">
          <input
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={handleKeyDown} // Detect Enter key
          />
          <img
            src={serach_icon}
            alt="Search"
            onClick={handleSearch}
            style={{ cursor: "pointer" }}
          />
        </div>
      </div>

      <div className="nav-right flex-div">
        <img src={upload_icon} alt="" />
        <img src={more_icon} alt="" />
        <img src={notification_icon} alt="" />
        <img src={profile_icon} className="user-icon" alt="" />
      </div>
    </nav>
  );
};

export default Navbar;


