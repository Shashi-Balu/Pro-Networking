import React, { useState } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ThumbUpOffAltOutlinedIcon from "@mui/icons-material/ThumbUpOffAltOutlined";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import CommentOutlinedIcon from "@mui/icons-material/CommentOutlined";
import TurnedInNotOutlinedIcon from "@mui/icons-material/TurnedInNotOutlined";
import "./Post.css";

function Post(props) {
    const [isLiked, setIsLiked] = useState(false);
    const [isSaved, setIsSaved] = useState(false);

    function handleLikeClick() {
        if (isLiked === true) {
            setIsLiked(false);
        } else {
            setIsLiked(true);
        }
    }

    function handleSaveClick() {
        if (isSaved === true) {
            setIsSaved(false);
        } else {
            setIsSaved(true);
        }
    }
    return (
        <div className="post-card">
            <div className="post-card-setup">
                <div className="post-title">
                    <AccountCircleIcon
                        className="post-user-img"
                        alt={props.name}
                        src={props.image}
                    />
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
            <p className="post-message">{props.message}</p>

            <div className="post-icons">
                <div className="post-like" onClick={handleLikeClick}>
                    {isLiked ? <ThumbUpIcon /> : <ThumbUpOffAltOutlinedIcon />}
                    <p>{isLiked ? props.likeCount + 1 : props.likeCount}</p>
                </div>
                <div className="post-save" onClick={handleSaveClick}>
                    {isSaved ? <BookmarkIcon /> : <BookmarkBorderIcon />}
                </div>
            </div>
        </div>

        // {
        //     userId: 10,
        //     name: "Shashi",
        //     tags:['html', 'css'],
        //     body: "message"
        // }
    );
}

export default Post;
