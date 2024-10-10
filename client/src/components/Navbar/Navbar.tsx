import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { Stack } from "@mui/material";
import login from "../../assets/icons/login.png";
import logout from "../../assets/icons/logout.png";
import useAuth from "../../components/hooks/UseAuth";

const NavBar: React.FC = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const isAuthenticated = useAuth();

  const handleMouseEnter = () => {
    setShowDropdown(true);
  };

  const handleMouseLeave = () => {
    setShowDropdown(false);
  };

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    window.location.reload();
  };

  return (
    <Stack
      direction="row"
      justifyContent="space-around"
      sx={{ gap: { lg: "122px", xs: "40px" }, mt: { sm: "32px", xs: "20px" } }}
    >
      <div className="nav-bar">
        <div className="logo">
          <Link to="/">NUMS Bank</Link>
        </div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li
            className="dropdown"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <Link to="#">Users</Link>
            {showDropdown && (
              <ul className="dropdown-menu">
                <li>
                  <Link to="/user">User Details</Link>
                </li>
              </ul>
            )}
          </li>
          <li className="search">
            <input type="text" placeholder="Search..." />
          </li>
          {!isAuthenticated && (
            <li>
              <button
                onClick={() => {
                  window.location.href = "/login";
                }}
                style={{ border: "none", background: "none" }}
              >
                <img
                  src={login}
                  alt="Login"
                  style={{ width: "40px", height: "40px" }}
                />
              </button>
            </li>
          )}
          {isAuthenticated && (
            <li>
              <img
                src={logout}
                alt="Logout"
                style={{ width: "40px", height: "40px", cursor: "pointer" }}
                onClick={handleLogout}
              />
            </li>
          )}
        </ul>
      </div>
    </Stack>
  );
};

export default NavBar;
