import React from "react";
import "../css/Navbar.css";

const Navbar = () => {
    return (
    <nav className="navbar">
        <div className="logo">News
        <span className="logo1">BIT</span>
        </div>
        
        <ul className="nav-links">
            <li><a href="#">Home</a></li>
            <li><a href="#">News</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact</a></li>
        </ul>
    </nav>
    );
};

export default Navbar;
