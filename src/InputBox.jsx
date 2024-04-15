// InputBox.jsx
import React from "react";
import "./InputBox.css";

function InputBox({ value, onChange }) {
  return (
    <div className="input-box">
      <input
        className="input"
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Enter expression"
      />
    </div>
  );
}

export default InputBox;
