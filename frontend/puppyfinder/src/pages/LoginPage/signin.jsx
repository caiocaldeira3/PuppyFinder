import React from 'react';
import {
  TextField,
  Button,
} from '@material-ui/core';

import useStyles from './styles';

const Signin = () => {
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
          id="name"
          placeholder="Nome"
          name="name"
          autoComplete="username"
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
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="phone"
          placeholder="Telefone"
          name="phone"
          autoComplete="phone"
          autoFocus
          className={classes.input}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
        >
          CADASTRAR
        </Button>
      </form>
    </>
  );
};

export default Signin;
