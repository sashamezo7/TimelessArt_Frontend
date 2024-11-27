import React, { useState } from "react";
import "./textBox.css";

const TextBox = ({ message, setMessage, placeholder, className }) => {
  return (
    <div className={`text-box-container ${className || ""}`}>
      <textarea
        value={message}
        placeholder={placeholder}
        className="text-box"
        onChange={(e) => setMessage(e.target.value)}
      />
    </div>
  );
};


export default TextBox;
