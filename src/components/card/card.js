import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(20),
      height: theme.spacing(15),
      borderRadius:"20px",
      background: "yellow",
      padding: "10px",
    },
  },

}));

export default function SimplePaper() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper elevation={3} >
        CUSTO TOTAL
      </Paper>       <Paper elevation={3} >
        VALOR TOTAL
      </Paper>       <Paper elevation={3} >
        RENDIMENTO
      </Paper> 
    </div>
  );
}
