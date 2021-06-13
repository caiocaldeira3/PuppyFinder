import React from 'react';
import {
  Container,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
  makeStyles,
} from '@material-ui/core';

import fakeDataAdoptionList from './fakeData';
import dogImage from './assets/dog.jpeg';

const useStyles = makeStyles(() => ({
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%',
  },
}));

const AdoptionListPage = () => {
  const classes = useStyles();

  return (
    <div>
      <Container>
        <Grid container spacing={4}>
          { fakeDataAdoptionList.map((item) => (
            <Grid item key={item} xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image={dogImage}
                  title="Dog"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {item.nome}
                  </Typography>
                  <Typography gutterBottom variant="subtitle2" color="textSecondary">
                    {item.localizacao}
                  </Typography>
                  <Typography>
                    {item.descricao}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary">
                    View
                  </Button>
                  <Button size="small" color="primary">
                    Edit
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default AdoptionListPage;
