import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './Layout/Header.js'
import MyButton from './Layout/Button.js';
import MyTextField from './Layout/TextField.js';
import MyComboBoxList from './Layout/MyCurrencyList.js';
import MyCurrencyTextField from './Layout/MyCurrencyTextField';
import CurrencyService from './CurrencyService.js';

var rates = {
  USD: 0.8,
  BRL: 0.2,
  GBP: 1.2
}

function App() {
  const [valueForeignCurrency, setValueForeignCurrency] = useState("");
  const [valueConverted, setValueConverted] = useState("");
  const [foreignCurrencySelected, setForeignCurrencySelected] = useState("USD");

  function acaoQuandoClick() {
    setValueConverted(valueForeignCurrency / rates[foreignCurrencySelected])
  }

  function onChangeInput(event) {
    const inputValue = Number(event.target.value)
    setValueForeignCurrency(inputValue)
  }

  function handleInputChange(value) {   
    const chosenCurrency = value.curAbr
    setForeignCurrencySelected(chosenCurrency)
  }

  useEffect(() => { 
    var currencyService = new CurrencyService()
    currencyService.findRates().then((response) => {
      // this.setState({
      //     rates: response.body.rates.BRL
      // });
      rates = response.body.rates
      console.log(response)
  });
  }, []);

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
            myTextFieldLabel="EUR"
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