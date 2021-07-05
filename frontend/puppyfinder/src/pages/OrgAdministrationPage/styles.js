import {
  makeStyles,
} from '@material-ui/core';

import profile from './assets/profile.png';

import COLORS from '../../styles/colors';

const useStyles = makeStyles((theme) => ({
  menuBarMainContainer: {
    backgroundImage: `url(${profile})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 300,
    height: 300,
    width: '100%',
    backgroundPosition: 'center',
    marginTop: 80,
  },
  icon: {
    color: COLORS.main,
  },
  detailsContainer: {
    marginTop: 30,
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
    padding: 12,
    backgroundColor: COLORS.main,
    color: 'white',
    '&:hover': {
      backgroundColor: '#998aff',
      color: 'white',
    },
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%',
  },
  locationDiv: {
    display: 'flex',
    flexDirection: 'row',
  },
  locationIcon: {
    fontSize: 18,
  },
  modalContainer: {
    backgroundColor: 'white',
  },
  paper: {
    // position: 'absolute',
    width: 800,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    overflow: 'scroll',
  },
  modal: {
    overflow: 'scroll',
  },
}));

export default useStyles;
