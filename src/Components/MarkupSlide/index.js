import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useLocation
} from "react-router-dom";
import "./styles.css";
import InputCode from "./InputCode";
import Output from "./Output";

export default function MarkupSlide(props) {
  const Data = ["a", "b", "c", "d"];
  const title = "Title goes here";
  const [currSlide, setCurrSlide] = useState(0);
  const prev = () => {
    setCurrSlide(currSlide - 1);
  };
  const next = () => {
    setCurrSlide(currSlide + 1);
  };
  return (
    <Router>
      <div className="outer-container">
        <div className="head-container">
          <button onClick={prev} disabled={currSlide === 0} className="btnS">
            <i className="fas fa-arrow-left"></i>
          </button>
          <h1 className="heading">{title}</h1>
          <button
            onClick={next}
            disabled={currSlide >= Data.length - 1}
            className="btnS"
          >
            <i className="fas fa-arrow-right"></i>
          </button>
        </div>
        <div className="main-container">
          <div className="containerIC">
            <div>
              <Link to={"/html"} className="btnC">
                HTML
              </Link>
              <Link to={"/css"} className="btnC">
                CSS
              </Link>
            </div>
            <Switch>
              <Route path={`/html`}>
                <InputCode
                  key={`html_${Math.floor(
                    Math.random() * Math.pow(30, 10)
                  ).toString(30)}`}
                  code={props.codes.html}
                  updateCode={props.update.html}
                />
              </Route>
              <Route path={`/css`}>
                <InputCode
                  key={`css_${Math.floor(
                    Math.random() * Math.pow(30, 10)
                  ).toString(30)}`}
                  code={props.codes.css}
                  updateCode={props.update.css}
                />
              </Route>
            </Switch>
          </div>
          <div className="output-container">
            <Output
              html={props.codes.html}
              css={props.codes.css}
              key={`output_${Math.floor(
                Math.random() * Math.pow(36, 10)
              ).toString(36)}`}
            />
          </div>
        </div>
      </div>
    </Router>
  );
}
