import React, { useState } from 'react';
import {
  Grid,
  Button,
  Typography,
} from '@material-ui/core';

import Login from './login';
import Signin from './signin';

import useStyles from './styles';

const LoginPage = () => {
  const [alreadyHaveAccount, setAlreadyHaveAccount] = useState(false);

  const classes = useStyles();

  const onClickAlreadyHaveAccountButton = () => {
    setAlreadyHaveAccount(!alreadyHaveAccount);
  };

  return (
    <Grid
      container
      spacing={1}
      alignItems="center"
      justify="center"
      className={classes.mainGrid}
    >
      <Grid item xl={4} xs={false} sm={3} md={4} className={classes.logoGrid} />
      <Grid
        item
        xl={4}
        xs={false}
        sm={3}
        md={4}
        className={classes.loginFormGrid}
      >
        <div className={classes.paper}>
          <Typography component="h1" variant="h2" gutterBottom className={classes.loginText}>
            { alreadyHaveAccount ? 'Entrar' : 'Cadastre-se'}
          </Typography>
          { alreadyHaveAccount
            ? <Login />
            : <Signin />}
          <Button
            onClick={onClickAlreadyHaveAccountButton}
            variant="outlined"
            className={classes.haveAccountButton}
          >
            { alreadyHaveAccount ? 'Não possui uma conta?' : 'Já sou cadastrado'}
          </Button>
        </div>
      </Grid>
    </Grid>
  );
};

export default LoginPage;
