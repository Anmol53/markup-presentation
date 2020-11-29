import React, { useState } from "react";
import "./styles.css";
import MarkupSlide from "./Components/MarkupSlide";
import { BrowserRouter as Router } from "react-router-dom";

export default function App() {
  const [html, setHTML] = useState(
    `<ul>
    <li>
      <a href="https://en.wikipedia.org/wiki/Andaman_and_Nicobar_Islands">
        <img src="https://miro.medium.com/max/1024/1*s55j_Aj_cGRyBggW-NF9Kg.jpeg">
      </a>
    </li>
    <li>
      <a href="https://en.wikipedia.org/wiki/Meghalaya">
        <img src="https://www.india.com/wp-content/uploads/2018/10/Dawki-Meghalaya.jpg">
      </a>
    </li>
    <li>
      <a href="https://en.wikipedia.org/wiki/Santorini">
        <img src="https://traveler.marriott.com/wp-content/uploads/2018/02/GI_669455334_GreekWindmill_Sunset.jpg">
      </a>
    </li>
</ul>`
  );
  const [css, setCSS] = useState(`ul{
    list-style-type: none;
}
img{
    width: 30%;
    padding: 1rem;
}`);
  return (
    <Router>
      {console.log(
        `#${Math.floor(Math.random() * Math.pow(36, 10)).toString(36)}`
      )}
      <div className="App">
        <MarkupSlide
          key={`#${Math.floor(Math.random() * Math.pow(36, 10)).toString(36)}`}
          codes={{ html: html, css: css }}
          update={{ html: setHTML, css: setCSS }}
        />
      </div>
    </Router>
  );
}
