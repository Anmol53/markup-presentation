import React, { useState } from "react";
import "./styles.css";

export default function InputCode(props) {
  const [code, setCode] = useState(props.code);
  const updateText = ({ target }) => {
    setCode(target.value);
  };

  return (
    <div className="input-container">
      <textarea
        className="codeArea"
        wrap="off"
        onChange={updateText}
        value={code}
      />
      <button
        className="btnU"
        onClick={() => {
          props.updateCode(code);
        }}
      >
        Update
      </button>
    </div>
  );
}
