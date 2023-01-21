import React from "react";
import "./UserDetails.css";

function UserDetails() {
    return (
        <div>
            <div className="box-details">
                <img
                    className="userimg"
                    src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80"
                />
                <p className="username">Alpha User</p>
                <p>guest@gmail.com</p>
                <hr />
                <div className="views">
                    <p>Who viewed you</p>
                    <p>2,300</p>
                    <p>Views on post</p>
                    <p>2,570</p>
                </div>
            </div>
        </div>
    );
}

export default UserDetails;
