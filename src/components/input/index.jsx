import React from "react";
import "./style.css";
const Input = (props) => {
  const { handleOnChange, placeholder, type } = props;
  return (
    <input
      type="password"
      onChange={handleOnChange}
      placeholder={placeholder}
    ></input>
  );
};
export default Input;
