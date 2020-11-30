import React from "react";
import "./styles.css";
import MarkupSlide from "./Components/MarkupSlide";
import { BrowserRouter as Router } from "react-router-dom";

export default function App() {
  return (
    <Router>
      {console.log(
        `#${Math.floor(Math.random() * Math.pow(36, 10)).toString(36)}`
      )}
      <div className="App">
        <MarkupSlide
          key={`#${Math.floor(Math.random() * Math.pow(36, 10)).toString(36)}`}
        />
      </div>
    </Router>
  );
}
