import React from 'react';
import {
  Grid,
  Typography,
  TextField,
} from '@material-ui/core';

import PropTypes from 'prop-types';

const Details = ({ form, setForm }) => {
  const handleFieldChange = (e) => {
    const newForm = { ...form, [e.target.name]: e.target.value };
    setForm(newForm);
  };

  return (
    <>
      <Typography variant="h6" gutterBottom>
        Detalhes
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="castrated"
            name="castrated"
            label="Castrado?"
            fullWidth
            onChange={handleFieldChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="dewormed"
            name="dewormed"
            label="Vermifugado?"
            fullWidth
            onChange={handleFieldChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="description"
            name="description"
            label="Descrição"
            fullWidth
            onChange={handleFieldChange}
          />
        </Grid>
      </Grid>
    </>
  );
};

Details.propTypes = {
  form: PropTypes.shape({}),
  setForm: PropTypes.func,
};

Details.defaultProps = {
  form: {},
  setForm: () => {},
};

export default Details;
