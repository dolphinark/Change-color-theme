import React from "react";

function Button(props) {
  const style = {
    backgroundColor: props.color.backgroundColor,
    color: props.color.color,
  };

  return (
    <div
      className="btn"
      style={style}
      onMouseEnter={props.onMouseEnter}
      onMouseOut={props.onMouseout}
    >
      {props.text}
    </div>
  );
}

export default Button;
