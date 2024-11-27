import React, { useState } from 'react';
import './inputField.css'
const InputField = ({ icon, placeholder, value, setValue, className }) => {
    return (
      <div className={`input-field ${className || ""}`}>
        <img src={icon} alt="icon" />
        <input
          type="text"
          placeholder={placeholder || "Enter text"}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
    );
  };
  

export default InputField;
