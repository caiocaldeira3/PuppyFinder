import React, { useState } from 'react';
import {
  Grid,
  Button,
  Typography,
  Radio,
  FormControl,
  RadioGroup,
  FormControlLabel,
} from '@material-ui/core';

import PersonIcon from '@material-ui/icons/Person';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';

import Login from './login';
import Signin from './signin';

import useStyles from './styles';

const LoginPage = () => {
  const [alreadyHaveAccount, setAlreadyHaveAccount] = useState(false);
  const [typeOfAccount, setTypeOfAccount] = useState('fis');

  const classes = useStyles();

  const onClickAlreadyHaveAccountButton = () => {
    setAlreadyHaveAccount(!alreadyHaveAccount);
  };

  const handleRadioGroupChange = (e) => {
    setTypeOfAccount(e.target.value);
  };

  const getRadioLabel = (text, Icon) => (
    <div className={classes.radioDiv}>
      <Icon />
      <Typography component="h5" variant="subtitle2" className={classes.radioLabel}>
        {text}
      </Typography>
    </div>
  );

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
          <FormControl>
            <RadioGroup onChange={handleRadioGroupChange}>
              <div className={classes.radioDiv}>
                <FormControlLabel
                  value="fis"
                  control={<Radio />}
                  label={getRadioLabel('Sou Pessoa', PersonIcon)}
                  checked={typeOfAccount === 'fis' && true}
                />
                <FormControlLabel
                  value="org"
                  control={<Radio />}
                  label={getRadioLabel('Sou Organização', AccountBalanceIcon)}
                  checked={typeOfAccount === 'org' && true}
                />
              </div>
            </RadioGroup>
          </FormControl>
          <Typography component="h1" variant="h2" gutterBottom className={classes.loginText}>
            { alreadyHaveAccount ? 'Entrar' : 'Cadastre-se'}
          </Typography>
          { alreadyHaveAccount
            ? <Login type={typeOfAccount} />
            : <Signin type={typeOfAccount} />}
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
