import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, TextField, Button } from '@material-ui/core/';
import Navbar from './NavBar';

const useStyles = makeStyles((theme) => ({
  root: {

  },
  paper: {
    width: 400,
    margin: '0 auto',
    marginTop: 50,
    textAlign: 'center',
    padding: 10,


  },
  input: {
    width: '100%',
    marginBottom: 20,
  }
}));
function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Navbar />
      <Paper elevation={3} className={classes.paper}>
        <h1>Login</h1>
        <form className={classes.root} noValidate autoComplete="off">
          <TextField id="standard-basic" label="Enter Email" className={classes.input} />
          <TextField id="standard-basic" label="Password" className={classes.input} />
          <Button variant="contained" color="primary" className={classes.input}>
            Login
          </Button>
        </form>
      </Paper>

    </div>
  );
}

export default App;
