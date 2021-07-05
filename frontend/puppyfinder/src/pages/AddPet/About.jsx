import React from 'react';
import {
  Grid,
  TextField,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormLabel,
  Select,
  MenuItem,
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
        <Grid item xs={12} sm={12}>
          <FormLabel component="legend">Gênero</FormLabel>
          <RadioGroup label="gender" name="gender" onChange={handleFieldChange}>
            <div style={{ dislay: 'flex', flexDirection: 'row' }}>
              <FormControlLabel value="female" control={<Radio />} label="Fêmea" />
              <FormControlLabel value="male" control={<Radio />} label="Macho" />
              <FormControlLabel value="undefined" control={<Radio />} label="Indeterminado" />
            </div>
          </RadioGroup>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="fur"
            name="fur"
            label="Pelagem"
            fullWidth
            onChange={handleFieldChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormLabel component="legend">Tamanho</FormLabel>
          <Select
            labelId="size"
            id="size"
            name="size"
            onChange={handleFieldChange}
          >
            <MenuItem value="tiny">Minúsculo</MenuItem>
            <MenuItem value="small">Pequeno</MenuItem>
            <MenuItem value="medium">Médio</MenuItem>
            <MenuItem value="large">Grande</MenuItem>
            <MenuItem value="extra-large">Extra Grande</MenuItem>
          </Select>
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
