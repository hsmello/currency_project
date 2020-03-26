import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
    root: {
      '& > *': {
        margin: theme.spacing(0),
        boxShadow: '2px 2px 5px 0px rgba(100, 105, 50, .3)',
        // color: 'black',
      },
    },
  }));
  
  export default function MyButton(props) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Button onClick={()=>{props.handleButtonClick()}} 
              variant='outlined' 
              color='primary'>
                {props.myButtonLabel}
            </Button>
        </div>
    );
}