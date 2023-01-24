import React from "react";
import Posts from "../../components/Posts/Posts";
import Recents from "../../components/Recents/Recents";
import Trending from "../../components/Trending/Trending";
import UserDetails from "../../components/UserDetails/UserDetails";
import "./HomePage.css";
function HomePage() {
    return (
        <div className="boxes">
            <div>
                <UserDetails />
                <Recents />
            </div>
            <div className="posts">
                <Posts />
            </div>

            <Trending />
        </div>
    );
}

export default HomePage;
