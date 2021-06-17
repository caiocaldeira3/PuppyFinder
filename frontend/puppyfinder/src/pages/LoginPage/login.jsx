import React from 'react';
import {
  TextField,
  Grid,
  Link,
  Button,
} from '@material-ui/core';

import useStyles from './styles';

const Login = () => {
  const classes = useStyles();

  return (
    <>
      <form className={classes.form} noValidate>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="email"
          placeholder="Endereço de email"
          name="email"
          autoComplete="email"
          autoFocus
          className={classes.input}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="password"
          placeholder="Senha"
          type="password"
          id="password"
          autoComplete="current-password"
          className={classes.input}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
        >
          ENTRAR
        </Button>
        <Grid container>
          <Grid item xs>
            <Link href="www.google.com" variant="body2">
              Esqueceu a senha
            </Link>
          </Grid>
        </Grid>
      </form>
    </>
  );
};

export default Login;
