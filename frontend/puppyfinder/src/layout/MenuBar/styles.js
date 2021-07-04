import {
  makeStyles,
} from '@material-ui/core';

import logo from './assets/logo2.png';

import COLORS from '../../styles/colors';

const useStyles = makeStyles(() => ({
  menuBarMainContainer: {
    backgroundImage: `url(${logo})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 300,
    height: 300,
    width: '100%',
    backgroundPosition: 'center',
    marginTop: 50,
  },
  appBar: {
    backgroundColor: COLORS.main,
  },
}));

export default useStyles;
