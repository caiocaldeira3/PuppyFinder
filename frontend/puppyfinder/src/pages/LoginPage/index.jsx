import React from 'react';
import {
  Grid,
  Typography,
  TextField,
  Button,
  Link,
} from '@material-ui/core';

import useStyles from './styles';

const LoginPage = () => {
  const classes = useStyles();

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
            Cadastre-se
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Endereço de email"
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
              label="Senha"
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
              Cadastrar
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="www.google.com" variant="body2">
                  Esqueceu a senha
                </Link>
              </Grid>
              <Grid item>
                <Link href="www.google.com" variant="body2" />
              </Grid>
            </Grid>
          </form>
        </div>
      </Grid>
    </Grid>
  );
};

export default LoginPage;
