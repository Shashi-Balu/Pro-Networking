import React, { useEffect, useState } from "react";
import "./Posts.css";
import CreateIcon from "@mui/icons-material/Create";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import Post from "./Post";

function Posts() {
    const [posts, setPosts] = useState([]);

    async function callApi() {
        const response = await (await fetch("https://dummyjson.com/posts")).json();
        // console.log(response);
        setPosts(response.posts);
    }

    useEffect(() => {
        callApi();
    }, []);
    return (
        <div>
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

            {posts?.map((value) => (
                <Post
                    image={value.userId}
                    name={value.userId}
                    tags={value.tags}
                    message={value.body}
                />
            ))}
        </div>
    );
}

export default Posts;
