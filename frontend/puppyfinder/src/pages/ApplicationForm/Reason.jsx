import React from 'react';
import {
  Grid,
  Typography,
  TextField,
} from '@material-ui/core';

import PropTypes from 'prop-types';

const Reason = ({ form, setForm }) => {
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
        <Grid item xs={12}>
          <TextField
            required
            id="hadPets"
            name="hadPets"
            label="Já cuidou de alguem pet?"
            fullWidth
            onChange={handleFieldChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="reason"
            name="reason"
            label="O que te levou a querer adotar um pet?"
            fullWidth
            onChange={handleFieldChange}
          />
        </Grid>

      </Grid>
    </>
  );
};

Reason.propTypes = {
  form: PropTypes.shape({}),
  setForm: PropTypes.func,
};

Reason.defaultProps = {
  form: {},
  setForm: () => {},
};

export default Reason;
