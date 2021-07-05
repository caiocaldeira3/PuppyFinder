import React from 'react';
import {
  Modal,
  Container,
  Grid,
  Card,
  CardMedia,
  Typography,
  CardContent,
} from '@material-ui/core';

import PropTypes from 'prop-types';

import useStyles from './styles';

import dogImage from './assets/dog.jpeg';

import fakeAnimals from './fakeAnimalList';

const AnimalListModal = ({ open, handleClose }) => {
  const classes = useStyles();

  return (
    <Modal
      open={open}
      onClose={handleClose}
      className={classes.modal}
    >
      <Container className={classes.paper}>
        <Grid container spacing={2}>
          { fakeAnimals.map((item) => (
            <Grid item key={item.name} xs={6} sm={6} md={6}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image={dogImage}
                  title={item.nome}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {item.nome}
                  </Typography>
                  <Typography variant="subtitle2">
                    {item.descricao}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Modal>
  );
};

AnimalListModal.propTypes = {
  open: PropTypes.bool,
  handleClose: PropTypes.func,
};

AnimalListModal.defaultProps = {
  open: false,
  handleClose: () => {},
};

export default AnimalListModal;
