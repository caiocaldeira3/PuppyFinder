import React, { useState, useEffect } from 'react';
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

import { useHistory } from 'react-router-dom';

import LocationOnIcon from '@material-ui/icons/LocationOn';
import PostAddSharpIcon from '@material-ui/icons/PostAddSharp';
import Api from '../../modules/api';

// import ListAltIcon from '@material-ui/icons/ListAlt';

import MenuBar from '../../layout/MenuBar';

// import ApplicationForm from '../ApplicationForm';

import ApplicationModal from './applicationModal';

// import fakeDataAdoptionList from './fakeData';
import dogImage from './assets/dog.jpeg';

import useStyles from './styles';

const DogList = () => {
  const [visible, setVisible] = useState(false);
  const [animalsToAdopt, setAnimalsToAdopt] = useState([]);

  const classes = useStyles();
  const history = useHistory();

  const onClickSendApplication = () => {
    history.push('/application-form');
  };

  const onCloseModal = () => {
    setVisible(false);
  };

  const getAnimalsFromDb = async () => {
    try {
      const animals = await Api.getAnimalList();
      console.log(animals.data);
      setAnimalsToAdopt(animals.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(async () => {
    await getAnimalsFromDb();
  }, []);

  return (
    <>
      <ApplicationModal visible={visible} onCloseModal={onCloseModal} />
      <MenuBar pageName="Lista de Pets" />
      <Container>
        <Grid container spacing={4}>
          { animalsToAdopt.map((item) => (
            <Grid item key={item.name} xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image={dogImage}
                  title={item.nome}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {`${item.name} - ${item.age} anos`}
                  </Typography>
                  <div className={classes.locationDiv}>
                    <LocationOnIcon className={classes.locationIcon} color="action" />
                    <Typography gutterBottom variant="subtitle2" color="textSecondary">
                      {item.localizacao}
                    </Typography>
                  </div>
                  <Typography variant="subtitle2">
                    {item.description}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary" endIcon={<PostAddSharpIcon />} onClick={onClickSendApplication}>
                    Enviar Aplica????o
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
