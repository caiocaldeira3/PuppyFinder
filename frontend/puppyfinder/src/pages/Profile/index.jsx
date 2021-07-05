import React from 'react';
import {
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  CardActions,
  IconButton,
  TextField,
} from '@material-ui/core';

import SettingsIcon from '@material-ui/icons/Settings';

import EmailIcon from '@material-ui/icons/Email';
import LocationCityIcon from '@material-ui/icons/LocationCity';
import HomeIcon from '@material-ui/icons/Home';
import PhoneIcon from '@material-ui/icons/Phone';
import PersonIcon from '@material-ui/icons/Person';
import useStyles from './styles';
import fakeProfileData from './fakeData';
import MenuBar from '../../layout/MenuBar';

const Profile = () => {
  const classes = useStyles();

  const nameIconMap = {
    Email: <EmailIcon className={classes.icon} />,
    Nome: <PersonIcon className={classes.icon} />,
    Endereço: <HomeIcon className={classes.icon} />,
    Cidade: <LocationCityIcon className={classes.icon} />,
    Telefone: <PhoneIcon className={classes.icon} />,
  };

  return (
    <>
      <MenuBar pageName="Seu Perfil" showLogo={false} />
      <Container maxWidth="sm" className={classes.menuBarMainContainer} />
      <Container />
      <Container className={classes.detailsContainer}>
        <Grid container spacing={4}>
          { Object.keys(fakeProfileData).map((item) => (
            <Grid item key={item} xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardContent>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{ display: 'flex' }}>
                      {nameIconMap[item]}
                      <Typography className={classes.icon} style={{ marginLeft: 5 }} gutterBottom variant="h5" component="h2">
                        {item}
                      </Typography>
                    </div>
                    <CardActions>
                      <IconButton onClick={() => console.log('Clicked')}>
                        <SettingsIcon className={classes.icon} />
                      </IconButton>
                    </CardActions>
                  </div>
                  <div className={classes.locationDiv}>
                    <Typography gutterBottom variant="subtitle2" color="textSecondary">
                      {item.localizacao}
                    </Typography>
                  </div>
                  <TextField
                    id={item}
                    name={item}
                    // label={item}
                    fullWidth
                    value={fakeProfileData[item]}
                    disabled
                  />
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default Profile;
