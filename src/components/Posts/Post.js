import React from "react";
import Avatar from "@mui/material/Avatar";
import ThumbUpOffAltOutlinedIcon from "@mui/icons-material/ThumbUpOffAltOutlined";
import CommentOutlinedIcon from "@mui/icons-material/CommentOutlined";
import TurnedInNotOutlinedIcon from "@mui/icons-material/TurnedInNotOutlined";
import "./Post.css";

function Post(props) {
    return (
        <div className="post-card">
            <div className="post-card-setup">
                <div className="post-title">
                    <Avatar alt={props.name} src={props.image} />
                </div>
                <div className="post-text">
                    <p className="post-text-name">{props.name}</p>
                    <div className="post-tags">
                        {props.tags.map((value) => (
                            <p className="post-username">{value}</p>
                        ))}
                    </div>
                </div>
            </div>
            <p>{props.message}</p>
        </div>
    );
}

export default Post;
