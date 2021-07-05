import React, { useState } from 'react';
import {
  TextField,
  Button,
  Snackbar,
  // Alert,
} from '@material-ui/core';

import PropTypes from 'prop-types';

import useStyles from './styles';

import Api from '../../modules/api';

const Signin = ({ type }) => {
  const [signInForm, setSignInForm] = useState({});
  const [open, setOpen] = useState(false);

  const classes = useStyles();

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

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
    const newForm = { ...signInForm, telephone: e.target.value };
    setSignInForm(newForm);
  };

  const handleWebsiteChange = (e) => {
    const newForm = { ...signInForm, website: e.target.value };
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

  const onClickSignIn = () => {
    // e.preventDefault();
    console.log(signInForm);
    setOpen(true);
    signinFunction();
  };

  return (
    <>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        {/* <Alert onClose={handleClose} severity="success"> */}
        <h3>Cadastrado com sucesso</h3>
        {/* </Alert> */}
      </Snackbar>
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
        { type === 'org'
          ? (
            <>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="telephone"
                placeholder="Telefone"
                name="telephone"
                autoComplete="phone"
                autoFocus
                className={classes.input}
                onChange={handleTelefoneChange}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="website"
                placeholder="Website"
                type="representant"
                id="website"
                className={classes.input}
                onChange={handleWebsiteChange}
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
