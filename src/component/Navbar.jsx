import React from "react";
import "../css/Navbar.css";

const Navbar = () => {
    return (
    <nav className="navbar">
        <div className="logo">News
        <span className="logo1">BIT</span>
        </div>
        
        <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#news">News</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
    </nav>
    );
};

export default Navbar;
