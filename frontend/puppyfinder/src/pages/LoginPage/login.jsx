import React, { useState } from 'react';
import {
  TextField,
  Button,
} from '@material-ui/core';

import PropTypes from 'prop-types';

import { useHistory } from 'react-router-dom';

import useStyles from './styles';

import Api from '../../modules/api';

const Login = ({ type }) => {
  const [loginForm, setLoginForm] = useState({});

  const history = useHistory();
  const classes = useStyles();

  const loginFunction = async () => {
    if (type === 'fis') {
      const response = await Api.loginUser(loginForm);
      return response;
    }
    const response = await Api.loginOrg(loginForm);
    return response;
  };

  const handleLoginClick = async (e) => {
    e.preventDefault();
    // console.log(loginForm);
    const result = await loginFunction();
    // console.log(result);
    if (result.status === 200) { history.push('/adoption-list'); }
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
