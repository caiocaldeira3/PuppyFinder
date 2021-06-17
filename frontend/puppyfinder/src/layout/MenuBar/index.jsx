import React from 'react';
import {
  Container,
  Typography,
} from '@material-ui/core';

function MenuBar() {
  return (
    <Container maxWidth="sm">
      <Container>
        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
          Puppy Finder
        </Typography>
        <Typography variant="h5" align="center" color="textSecondary" paragraph>
          Essa é a barra de Menu
        </Typography>
      </Container>
    </Container>
  );
}

export default MenuBar;
