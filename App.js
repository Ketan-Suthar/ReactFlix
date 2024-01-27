import React from "react";
import ReactDOM from "react-dom/client";


const heading = React.createElement("h1", {
    id: "heading"
}, "Hello from React");

const root = ReactDOM.createRoot(document.getElementById("root"));

console.log(heading);

// JSX - not HTML, its like HTML syntax
// JSX code is transpiled before by (Babel)parcel
// Babel will convert below line to ReactDOM.createElement
const jsxHeading = (
    <h1 id="heading">Hello from JSX</h1>
);

root.render(jsxHeading);

console.log(jsxHeading);



/*
React Component
- Class based - old 
- Functional based - new 
    - just normal js function
*/

// Functional Component - it returns JSX
const HeadingComponent = () => {
    return <h1 id="heading">Hello from Functional Component</h1>;
}

const text = "Hello from ComponentComposition"

const ComponentComposition = () => (
    <div>
        {HeadingComponent()}
        <HeadingComponent />
        <HeadingComponent></HeadingComponent>
        <h2>Text: {text}</h2>
    </div>
)

root.render(<ComponentComposition />);

