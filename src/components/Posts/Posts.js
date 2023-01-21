import React from "react";
import "./Posts.css";
import CreateIcon from "@mui/icons-material/Create";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";

function Posts() {
    return (
        <div className="post">
            <div className="post-setup">
                <CreateIcon className="post-icon" />
                <input className="input-post" />
                <p className="post-btn">POST</p>
            </div>
            <div className="post-photo">
                <InsertPhotoIcon className="photo-icon" />
                <p>Photo</p>
            </div>
        </div>
    );
}

export default Posts;
