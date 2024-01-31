import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement("div", {
        id: "p1"
    }, 
    React.createElement("div", 
        { id: "p1"}, 
        [
            React.createElement("h1", {}, "Hello there"),
            React.createElement("h2", {}, "Hello there")
        ]
    )
);


const heading = React.createElement("h1", {
    id: "heading"
}, "Hello from React");

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);

console.log(parent);
