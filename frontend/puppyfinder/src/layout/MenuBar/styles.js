import {
  makeStyles,
} from '@material-ui/core';

import logo from './assets/logo2.png';

const useStyles = makeStyles(() => ({
  menuBarMainContainer: {
    backgroundImage: `url(${logo})`,
    backgroundRepeat: 'no-repeat',
    backgroundColor: 'white',
    backgroundSize: 300,
    height: 300,
    width: '100%',
    backgroundPosition: 'center',
  },
}));

export default useStyles;
