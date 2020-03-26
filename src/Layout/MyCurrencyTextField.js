import React from 'react';
import CurrencyTextField from '@unicef/material-ui-currency-textfield';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }));

export default function MyCurrencyTextField(props) {
    const classes = useStyles();
    const [value, setValue] = React.useState();

  return (
    <div className={classes.root}>
         
        <CurrencyTextField
		label="Amount"
		variant="outlined"
		value={value}
		currencySymbol={props.myCurrencyTextFieldLabel}
		minimumValue="0"
		outputFormat="string"
		decimalCharacter="."
		digitGroupSeparator=""
		onChange={(event)=>{props.onChange(event)}}
    />
    </div>

  );
}