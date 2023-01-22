import React, { useEffect, useState } from "react";
import "./Posts.css";
import CreateIcon from "@mui/icons-material/Create";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import Post from "./Post";

function Posts() {
    const [posts, setPosts] = useState([]);
    const [input, setInput] = useState([]);

    async function callApi() {
        const response = await (await fetch("https://dummyjson.com/posts")).json();
        // console.log(response);
        setPosts(response.posts);
    }

    useEffect(() => {
        callApi();
    }, []);

    function addPosts() {
        const copyArray = [...posts];
        copyArray.unshift({
            userId: 10,
            name: "Shashi",
            tags: ["HTML", "CSS"],
            body: input,
        });

        setPosts(copyArray);
        setInput("");
    }
    return (
        <div>
            <div className="post">
                <div className="post-setup">
                    <CreateIcon className="post-icon" />
                    <input
                        className="input-post"
                        value={input}
                        onChange={(event) => setInput(event.target.value)}
                    />
                    <button className="post-btn" onClick={addPosts}>
                        POST
                    </button>
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
                    likeCount={value.reactions}
                />
            ))}
        </div>
    );
}

export default Posts;
