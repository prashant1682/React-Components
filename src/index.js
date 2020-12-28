import React from "react";
import ReactDOM from "react-dom";
// Importing App component- put relative path "./App"
// Preferablly have a componenet folder to keep all the components and subfolder based on the page if there are too many components
import App from "./components/App";

// Render the App component which has the Heading and the List component
ReactDOM.render(<App />, document.getElementById("root"));
