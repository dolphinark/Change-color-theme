import { useState } from "react";
import Card from "./components/Card";

function App() {
  const [textColor, setTextColor] = useState("#424246");
  const [bgColor, setBgColor] = useState("white");

  function theme(textColor, bgColor) {
    setTextColor(textColor);
    setBgColor(bgColor);
  }

  return (
    <div>
      <Card textColor={textColor} bgColor={bgColor} theme={theme}/>
    </div>
  );
}

export default App;
