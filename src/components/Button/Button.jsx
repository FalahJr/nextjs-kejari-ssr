import React from "react";

const Button = ({
  classname = "",
  color = "primary",
  name = "Button",
  size = "medium",
  type = "normal",
  icon = null,
  rightIcon = null,
  iconSize = 30,
  style = {},
  id = 0,
  onClick,
  onChange,
}) => {
  return (
    <button
      className={
        classname === "bg-[#29B4FA]" ? `bg-[#29B4FA] ${classname}` : classname
      }
      style={style}
      type="button"
      onClick={onClick}
      onChange={onChange}
    >
      {icon ? (
        <>
          {icon}
          <p className="text-base">{name}</p>
        </>
      ) : (
        <>
          <p className="text-base">{name}</p>
          {rightIcon}
        </>
      )}
    </button>
  );
};

export default Button;
