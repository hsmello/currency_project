import React, { useState } from 'react';
import './App.css';
import Header from './Layout/Header.js'
import MyButton from './Layout/Button.js';
import MyTextField from './Layout/TextField.js';
import MyComboBoxList from './Layout/MyCurrencyList.js';
import MyCurrencyTextField from './Layout/MyCurrencyTextField';

const rates = {
  USD: 4.5,
  EUR: 5,
  GBP: 5.5
}

function App() {
  const [valueForeignCurrency, setValueForeignCurrency] = useState("");
  const [valueConverted, setValueConverted] = useState("");
  const [foreignCurrencySelected, setForeignCurrencySelected] = useState("USD");

  function acaoQuandoClick() {
    setValueConverted(valueForeignCurrency * rates[foreignCurrencySelected])
  }

  function onChangeInput(event) {
    const inputValue = Number(event.target.value)
    setValueForeignCurrency(inputValue)
  }

  function handleInputChange(value) {   
    const chosenCurrency = value.curAbr
    setForeignCurrencySelected(chosenCurrency)
  }

  return (
    <div>
      <Header/>
      <form>
        <div style={{ backgroundColor: "whitesmoke ",
          alignItems: "center",
          display: 'flex',
          justifyContent: 'center',
        }}
          className="container">
          <MyComboBoxList
            onInputChange={(event, value)=>{handleInputChange(value)}}
            >
          </MyComboBoxList> 

          <MyCurrencyTextField 
            myCurrencyTextFieldLabel={foreignCurrencySelected}
            onChange={(event)=>{onChangeInput(event)}}
            value={valueForeignCurrency}
            >
          </MyCurrencyTextField>
          <MyButton myButtonLabel="Converter" 
            handleButtonClick={acaoQuandoClick} 
            style={{ backgroundColor: 'black' }}>
          </MyButton>

          <MyTextField
            myTextFieldLabel="BRL"
            value={valueConverted}
            disabled={true}
            >
          </MyTextField>
        </div>
      </form>
  </div>
  );
}

export default App;