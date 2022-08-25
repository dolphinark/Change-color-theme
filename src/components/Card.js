import React from "react";
import Button from "./Button";

function Card(props) {
  const style = {
    backgroundColor: props.bgColor,
  };

  const h1Style = {
    color: props.textColor,
  };

  const pStyle = {
    color: props.textColor,
  };

  const blackBtn = { color: "white", backgroundColor: "#424246" };
  const blueBtn = { color: "white", backgroundColor: "#1d499b" };
  const yellowBtn = { color: "#424246", backgroundColor: "#f9d648" };

  return (
    <div className="container" style={style}>
      <h1 style={h1Style}>Your Life is Your Message</h1>
      <p style={pStyle}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pulvinar sed
        elementum egestas blandit. Proin augue lacus, phasellus vel lorem risus.
      </p>
      <div className="btn-container">
        <Button
          color={blackBtn}
          text="Black"
          onMouseEnter={() =>
            props.theme(blackBtn.color, blackBtn.backgroundColor)
          }
          onMouseout={() => props.theme("#424246", "white")}
        />
        <Button
          color={blueBtn}
          text="Blue"
          onMouseEnter={() =>
            props.theme(blueBtn.color, blueBtn.backgroundColor)
          }
          onMouseout={() => props.theme("#424246", "white")}
        />
        <Button
          color={yellowBtn}
          text="Yellow"
          onMouseEnter={() =>
            props.theme(yellowBtn.color, yellowBtn.backgroundColor)
          }
          onMouseout={() => props.theme("#424246", "white")}
        />
      </div>
    </div>
  );
}

export default Card;
