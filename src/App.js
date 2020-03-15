import React, { useState } from 'react';
import './App.css';
import MyButton from './Layout/Button.js'

function App() {
  const [valueUSD, setValueUSD] = useState("");
  const [valueConverted, setValueConverted] = useState("")

  function acaoQuandoClick() {
    setValueConverted(valueUSD * 4.5)
  }

  function onChangeInput(event) {
    var inputValue = Number(event.target.value)
    if (typeof inputValue === "number") {
      setValueUSD(inputValue)s
    }
  }

  return (
    <form>
      <input type="number" 
        placeholder="USD" 
        value={valueUSD}
        onChange={(event)=>{onChangeInput(event)}} 
      />
      <div>
        <MyButton myButtonLabel="Converter" handleButtonClick={acaoQuandoClick}>

        </MyButton>
        {valueConverted}      
      </div>
    </form>
  );
}

export default App;
