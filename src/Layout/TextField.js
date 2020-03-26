import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function MyTextField(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <TextField 
          onChange={(event)=>{props.onChange(event)}} 
          id="outlined-basic" 
          label={props.myTextFieldLabel} 
          variant="outlined"
          value={props.value}
          disabled={props.disabled}
          type="number"
          >
        </TextField>
    </div>
  );
}