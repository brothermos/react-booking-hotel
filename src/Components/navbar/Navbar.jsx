import React from "react";
import "./Navbar.css";

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navContainer">
                <a href="/" className="logo">Mosbooking</a>
                <div className="navItem">
                    <button className="navButton">Register</button>
                    <button className="navButton">Login</button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
