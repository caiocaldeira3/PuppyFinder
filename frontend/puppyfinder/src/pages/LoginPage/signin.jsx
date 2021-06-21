import React from 'react';
import {
  TextField,
  Button,
} from '@material-ui/core';
import PropTypes from 'prop-types';

import useStyles from './styles';

const Signin = ({ type }) => {
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
        { type === 'org'
          ? (
            <>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="representant"
                placeholder="Nome do Representante"
                type="representant"
                id="representant"
                autoComplete="current-password"
                className={classes.input}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="address"
                placeholder="Endereço Físico"
                name="address"
                autoComplete="address"
                autoFocus
                className={classes.input}
              />
            </>
          ) : null}
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
          // onClick={onClickSignIn}
        >
          CADASTRAR
        </Button>
      </form>
    </>
  );
};

Signin.propTypes = {
  type: PropTypes.string,
};

Signin.defaultProps = {
  type: '',
};

export default Signin;
