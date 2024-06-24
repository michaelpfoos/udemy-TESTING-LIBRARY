import React, {useState} from 'react';
import './app.css';

function App() {
  const [buttonColor, setButtonColor] = useState("red");
  const nextColor = buttonColor === "red" ? "blue" : "red";
  const [disabled, setDisabled] = useState(false);

  return (
    <div>
      <button className={buttonColor} onClick={() => {setButtonColor(nextColor)}} >Change to {nextColor}</button>
      <br />
      <input type="checkbox" id="disable-button-checkbox" checked={disabled} />
      <label htmlFor="disable-button-checkbox">Disable button</label>
    </div>
  );
}

export default App;
