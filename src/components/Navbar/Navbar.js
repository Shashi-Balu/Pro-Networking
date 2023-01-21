import React from "react";
import "./Navbar.css";
import SearchIcon from "@mui/icons-material/Search";

function Navbar() {
    return (
        <div className="navbar">
            <div className="navbar-left">
                <img
                    className="icon-img"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2dYFM1O8GbZ52Bc3lQqGXRSOsJrK3RnHbaQ&usqp=CAU"
                />

                <SearchIcon className="search-icon" />
                <input placeholder="Search User" />

                <div className="nav-options">
                    <p>HI, ALPHA USER</p>
                    <p>HOME</p>
                    <p>ABOUT US</p>
                    <p>PROFILE</p>
                    <div className="more">
                        <p>DARK MODE</p>
                        <button>LOGOUT</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
