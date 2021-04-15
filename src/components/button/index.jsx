import React from "react";
import "./style.css";
const Button = (props) => {
  const { width, color, title } = props;
  return <button>{title}</button>;
};
export default Button;
