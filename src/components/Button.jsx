import React from "react";

const buttonStyle = {
  border: "border border-slate-800 p-4 w-20 h-20",
};

const Button = ({ value, onClick }) => {
  return (
    <button className={buttonStyle.border} onClick={onClick}>
      {value}
    </button>
  );
};

export default Button;
