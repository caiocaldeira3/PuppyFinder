import {
  makeStyles,
} from '@material-ui/core';

import logo from './assets/logo2.png';

const useStyles = makeStyles(() => ({
  mainGrid: {
    minHeight: '100vh',
  },
  logoGrid: {
    backgroundImage: `url(${logo})`,
    backgroundRepeat: 'no-repeat',
    backgroundColor: 'white',
    backgroundSize: 400,
    height: 400,
    width: '100%',
    backgroundPosition: 'center',
  },
  loginText: {
    color: 'white',
    fontWeight: 'bold',
  },
  submit: {
    backgroundColor: 'green',
    marginTop: '8%',
    marginBottom: '2%',
  },
  input: {
    backgroundColor: 'white',
    borderRadius: 10,
  },
  paper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    background: 'linear-gradient(180deg, #341185 0%, rgba(255, 255, 255, 0) 100%), #C5ABFF',
    padding: '15%',
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
  },
  haveAccountButton: {
    marginTop: '7%',
  },
}));

export default useStyles;
