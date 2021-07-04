import React from 'react';
import {
  Grid,
  Typography,
  TextField,
} from '@material-ui/core';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Checkbox from '@material-ui/core/Checkbox';

const About = () => (
  <>
    <Typography variant="h6" gutterBottom>
      Suas Informações
    </Typography>
    <Grid container spacing={3}>
      <Grid item xs={12} sm={6}>
        <TextField
          required
          id="firstName"
          name="firstName"
          label="Primeiro Nome"
          fullWidth
          autoComplete="given-name"
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          required
          id="lastName"
          name="lastName"
          label="Ultimo Nome"
          fullWidth
          autoComplete="family-name"
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          required
          id="address1"
          name="address1"
          label="Endereço"
          fullWidth
          autoComplete="shipping address-line1"
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          required
          id="city"
          name="city"
          label="Cidade"
          fullWidth
          autoComplete="shipping address-level2"
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField id="state" name="state" label="Estado" fullWidth />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          required
          id="zip"
          name="zip"
          label="CEP"
          fullWidth
          autoComplete="shipping postal-code"
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          required
          id="country"
          name="country"
          label="País"
          fullWidth
          autoComplete="shipping country"
        />
      </Grid>
    </Grid>
  </>
);

export default About;
