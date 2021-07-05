import React from 'react';
import {
  Grid,
  Typography,
  TextField,
  FormLabel,
  FormControlLabel,
  Radio,
  RadioGroup,
} from '@material-ui/core';

import PropTypes from 'prop-types';

const Details = ({ form, setForm }) => {
  const handleFieldChange = (e) => {
    if (e.target.value === 'true') e.target.value = true;
    if (e.target.value === 'false') e.target.value = false;
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
          <FormLabel component="legend">Castrado?</FormLabel>
          <RadioGroup label="neutered" name="neutered" onChange={handleFieldChange}>
            <div style={{ dislay: 'flex', flexDirection: 'row' }}>
              <FormControlLabel value="true" control={<Radio />} label="Sim" />
              <FormControlLabel value="false" control={<Radio />} label="Não" />
            </div>
          </RadioGroup>
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormLabel component="legend">Vermifugado?</FormLabel>
          <RadioGroup label="dewormed" name="dewormed" onChange={handleFieldChange}>
            <div style={{ dislay: 'flex', flexDirection: 'row' }}>
              <FormControlLabel value="true" control={<Radio />} label="Sim" />
              <FormControlLabel value="false" control={<Radio />} label="Não" />
            </div>
          </RadioGroup>
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormLabel component="legend">Vacinado?</FormLabel>
          <RadioGroup label="vaccinated" name="vaccinated" onChange={handleFieldChange}>
            <div style={{ dislay: 'flex', flexDirection: 'row' }}>
              <FormControlLabel value="true" control={<Radio />} label="Sim" />
              <FormControlLabel value="false" control={<Radio />} label="Não" />
            </div>
          </RadioGroup>
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="desc"
            name="desc"
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
