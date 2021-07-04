import React from 'react';
import {
  Grid,
  Typography,
  TextField,
} from '@material-ui/core';

const Reason = () => (
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
          autoComplete="given-name"
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          required
          id="reason"
          name="reason"
          label="O que te levou a querer adotar um pet?"
          fullWidth
          autoComplete="shipping address-line1"
        />
      </Grid>

    </Grid>
  </>
);

export default Reason;
