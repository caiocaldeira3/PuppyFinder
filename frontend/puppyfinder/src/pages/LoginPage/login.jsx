import React, { useState } from 'react';
import {
  TextField,
  Button,
} from '@material-ui/core';

import PropTypes from 'prop-types';

import { useHistory } from 'react-router-dom';

import useStyles from './styles';

const Login = ({ type }) => {
  const [loginForm, setLoginForm] = useState({
    email: '',
    password: '',
  });

  const history = useHistory();
  const classes = useStyles();

  const handleLoginClick = (e) => {
    if (type === 'fis') console.log('Pessoa'); else console.log('Organização');
    e.preventDefault();
    console.log(loginForm);
    history.push('/adoption-list');
  };

  const handleEmailChange = (e) => {
    const newForm = { ...loginForm, email: e.target.value };
    setLoginForm(newForm);
  };

  const handlePasswordChange = (e) => {
    const newForm = { ...loginForm, password: e.target.value };
    setLoginForm(newForm);
  };

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
          onChange={handleEmailChange}
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
          onChange={handlePasswordChange}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
          onClick={handleLoginClick}
        >
          ENTRAR
        </Button>
      </form>
    </>
  );
};

Login.propTypes = {
  type: PropTypes.string,
};

Login.defaultProps = {
  type: 'fis',
};

export default Login;
