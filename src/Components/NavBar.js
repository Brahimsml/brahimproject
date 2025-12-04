import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

import HomeIcon from "@mui/icons-material/Home";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import InfoIcon from "@mui/icons-material/Info";
import PhoneIcon from "@mui/icons-material/Phone";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import logo from "../Assets/logo.jpg";
import "../Styles/NavBar.css";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <div
      className={`sidebar ${open ? "open" : ""}`}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      {/* Logo */}
      <div className="sidebar-logo">
        <img src={logo} alt="logo" />
        {open && <h2>MegaTech</h2>}
      </div>

      {/* Navigation */}
      <nav className="sidebar-links">

        <p className="section-title">MAIN</p>

        <Link to="/" className={location.pathname === "/" ? "active" : ""}>
          <HomeIcon />
          {open && <span>Home</span>}
        </Link>

        <Link
          to="/menu"
          className={location.pathname === "/menu" ? "active" : ""}
        >
          <LocationOnIcon />
          {open && <span>Locations</span>}
        </Link>

        <p className="section-title">INFO</p>

        <Link
          to="/about"
          className={location.pathname === "/about" ? "active" : ""}
        >
          <InfoIcon />
          {open && <span>About</span>}
        </Link>

        <Link
          to="/contact"
          className={location.pathname === "/contact" ? "active" : ""}
        >
          <PhoneIcon />
          {open && <span>Contact</span>}
        </Link>
<Link
  to="/cart"
  className={location.pathname === "/cart" ? "active" : ""}
>
  <ShoppingCartIcon />
  {open && <span>Cart</span>}
</Link>

      </nav>
    </div>
  );
};

export default NavBar;
