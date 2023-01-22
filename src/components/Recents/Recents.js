import React from "react";
import "./Recents.css";

const data = [
    {
        id: 1,
        tag: "reactjs",
    },
    {
        id: 2,
        tag: "programming",
    },
    {
        id: 3,
        tag: "softwareengeering",
    },
    {
        id: 4,
        tag: "softwareengeering",
    },
    {
        id: 5,
        tag: "developer",
    },
];

function Recents() {
    return (
        <div className="recents-box-details">
            <p className="recents-heading">Recents</p>

            {data.map((value) => (
                <p className="list">#{value.tag}</p>
            ))}
        </div>
    );
}

export default Recents;
