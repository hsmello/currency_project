import React, { useState } from 'react';
import './App.css';

function App() {
  const [valueUSD, setValueUSD] = useState("");
  const [valueConverted, setValueConverted] = useState("")

  function acaoQuandoClick() {
    setValueConverted(valueUSD * 4.5)
  }

  function onChangeInput(event) {
    var inputValue = Number(event.target.value)
    if (typeof inputValue === "number") {
      setValueUSD(inputValue)
      // setValueConverted(valueUSD * 4.5)
    }
  }

  return (
    <form>
      <input type="number" 
        placeholder="USD" 
        value={valueUSD}
        onChange={(event)=>{onChangeInput(event)}} 
      />
      <MyButton myButtonLabel="Converter" handleButtonClick={acaoQuandoClick}>

      </MyButton>
      {valueConverted}      
    </form>
  );
}

function MyButton(props) {
  return (
    <div>
      <button onClick={()=>{props.handleButtonClick()}} type="button">
        {props.myButtonLabel}
      </button>
    </div>
  )
}


export default App;
