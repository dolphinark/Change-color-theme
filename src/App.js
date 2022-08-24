import Button from "./Button";

function App() {
  
  const blackBtn = {backgroundColor:"#424246",color:"white"}
  const blueBtn =  {backgroundColor:"#1d499b",color:"white"}
  const yellowBtn =  {backgroundColor:"#f9d648",color:"#424246"}

  return (
    <div className="container">
      <h1>Your Life is Your Message</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pulvinar sed
        elementum egestas blandit. Proin augue lacus, phasellus vel lorem risus.
      </p>
      <div className="btn-container">
        <Button color={blackBtn} text="Black" />
        <Button color={blueBtn} text="Blue" />
        <Button color={yellowBtn} text="Yellow" />
      </div>
    </div>
  );
}

export default App;
