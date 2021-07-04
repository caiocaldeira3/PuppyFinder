import React from 'react';
import {
  Grid,
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
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="name"
            name="name"
            label="Nome"
            fullWidth
            onChange={handleFieldChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="age"
            name="age"
            label="Idade"
            fullWidth
            onChange={handleFieldChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="animalGenders"
            name="animalGenders"
            label="Sexo"
            fullWidth
            onChange={handleFieldChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="animalHair"
            name="animalHair"
            label="Pelagem"
            fullWidth
            onChange={handleFieldChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="animalSizes"
            name="animalSizes"
            label="Porte"
            fullWidth
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
