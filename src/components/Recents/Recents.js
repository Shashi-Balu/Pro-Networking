import React from "react";
import "./Recents.css";

const data = [
    {
        id: 1,
        tag: "#reactjs",
    },
    {
        id: 2,
        tag: "#programming",
    },
    {
        id: 3,
        tag: "#softwareengeering",
    },
    {
        id: 4,
        tag: "#softwareengeering",
    },
    {
        id: 5,
        tag: "#developer",
    },
];

function Recents() {
    return (
        <div className="box-details">
            <p className="heading">Recents</p>
            {data.map((value) => value.tag)}
        </div>
    );
}

export default Recents;
