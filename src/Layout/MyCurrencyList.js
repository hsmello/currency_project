import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

export default function MyComboBoxList(props) {
  return (
    <Autocomplete
      id="combo-box-demo"
      options={currencies}
      getOptionLabel={option => option.title}
      style={{ width: 300 }}
      renderInput={params => <TextField {...params} label="Choose a currency" variant="outlined" />}
      defaultValue={currencies[0]}
      onChange={(event, value)=>{props.onInputChange(event, value)}}
      disableClearable={true}
    />
  );
}

const currencies = [
  { title: 'US Dollar', curAbr: 'USD' },
  { title: 'Brazilian Real', curAbr: 'BRL' },
  { title: 'Great Britain Pound', curAbr: 'GBP' },
];