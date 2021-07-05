import React, { useState } from 'react';
import {
  TextField,
  Button,
} from '@material-ui/core';
import PropTypes from 'prop-types';

import useStyles from './styles';

import Api from '../../modules/api';

const Signin = ({ type }) => {
  const [signInForm, setSignInForm] = useState({});

  const classes = useStyles();

  const handleNameChange = (e) => {
    const newForm = { ...signInForm, name: e.target.value };
    setSignInForm(newForm);
  };

  const handleEmailChange = (e) => {
    const newForm = { ...signInForm, email: e.target.value };
    setSignInForm(newForm);
  };

  const handleSenhaChange = (e) => {
    const newForm = { ...signInForm, password: e.target.value };
    setSignInForm(newForm);
  };

  const handleTelefoneChange = (e) => {
    const newForm = { ...signInForm, phone: e.target.value };
    setSignInForm(newForm);
  };

  const handleNomeRepChange = (e) => {
    const newForm = { ...signInForm, representantName: e.target.value };
    setSignInForm(newForm);
  };

  const handleEnderecoChange = (e) => {
    const newForm = { ...signInForm, address: e.target.value };
    setSignInForm(newForm);
  };

  const signinFunction = async () => {
    if (type === 'fis') {
      const response = await Api.registerPerson(signInForm);
      return response;
    }
    const response = await Api.registerOrg(signInForm);
    return response;
  };

  const onClickSignIn = (e) => {
    e.preventDefault();
    console.log(signInForm);
    signinFunction();
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
          id="name"
          placeholder="Nome"
          name="name"
          autoComplete="username"
          autoFocus
          className={classes.input}
          onChange={handleNameChange}
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
          onChange={handleSenhaChange}
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
          onChange={handleTelefoneChange}
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
                onChange={handleNomeRepChange}
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
                onChange={handleEnderecoChange}
              />
            </>
          ) : null}
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
          onClick={onClickSignIn}
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
