import React, { useState } from 'react';
import {
  Container,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
} from '@material-ui/core';

import LocationOnIcon from '@material-ui/icons/LocationOn';
import PostAddSharpIcon from '@material-ui/icons/PostAddSharp';

import ApplicationModal from './applicationModal';

import fakeDataAdoptionList from './fakeData';
import dogImage from './assets/dog.jpeg';

import useStyles from './styles';

const DogList = () => {
  const [visible, setVisible] = useState(false);

  const classes = useStyles();

  const onClickSendApplication = () => {
    setVisible(true);
  };

  const onCloseModal = () => {
    setVisible(false);
  };

  return (
    <>
      <ApplicationModal visible={visible} onCloseModal={onCloseModal} />
      <Container>
        <Grid container spacing={4}>
          { fakeDataAdoptionList.map((item) => (
            <Grid item key={item} xs={12} sm={6} md={4}>
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
                  <div className={classes.locationDiv}>
                    <LocationOnIcon className={classes.locationIcon} color="action" />
                    <Typography gutterBottom variant="subtitle2" color="textSecondary">
                      {item.localizacao}
                    </Typography>
                  </div>
                  <Typography variant="subtitle2">
                    {item.descricao}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary" endIcon={<PostAddSharpIcon />} onClick={onClickSendApplication}>
                    Enviar Aplicação
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default DogList;
