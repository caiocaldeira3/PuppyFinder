import React from 'react';
import {
  Grid,
  Typography,
  TextField,
} from '@material-ui/core';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Checkbox from '@material-ui/core/Checkbox';

import PropTypes from 'prop-types';

const About = ({ form, setForm }) => {
  const handleFieldChange = (e) => {
    const newForm = { ...form, [e.target.name]: e.target.value };
    setForm(newForm);
  };

  return (
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
            onChange={handleFieldChange}
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
            onChange={handleFieldChange}
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
            onChange={handleFieldChange}
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
            onChange={handleFieldChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField id="state" name="state" label="Estado" onChange={handleFieldChange} fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="zip"
            name="zip"
            label="CEP"
            fullWidth
            autoComplete="shipping postal-code"
            onChange={handleFieldChange}
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
            onChange={handleFieldChange}
          />
        </Grid>
      </Grid>
    </>
  );
};

About.propTypes = {
  form: PropTypes.shape({}),
  setForm: PropTypes.func,
};

About.defaultProps = {
  form: {},
  setForm: () => {},
};

export default About;
