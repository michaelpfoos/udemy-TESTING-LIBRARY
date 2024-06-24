import React, {useState} from 'react';
import './app.css';
import { kebabCaseToTitleCase } from './helper';

function App() {
  const [buttonColor, setButtonColor] = useState("medium-violet-red");
  const nextColor = buttonColor === "medium-violet-red" ? "midnight-blue" : "medium-violet-red";
  const [disabled, setDisabled] = useState(false);

  const toggleCheckBox = (e) => {
    setDisabled(e.target.checked);      
  };

  return (
    <div>
      <button className={disabled ? "gray" : buttonColor} disabled={disabled} onClick={() => {setButtonColor(nextColor)}} >Change to {nextColor}</button>
      <br />
      <input type="checkbox" id="disable-button-checkbox" onClick={toggleCheckBox} />
      <label htmlFor="disable-button-checkbox">Disable button</label>
    </div>
  );
}

export default App;
