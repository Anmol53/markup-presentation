import React from "react";
import { Parser } from "html-to-react";
import "./styles.css";

export default function Output(props) {
  const ParserObj = new Parser();
  return <>{ParserObj.parse(`<style>${props.css}</style>${props.html}`)}</>;
}
