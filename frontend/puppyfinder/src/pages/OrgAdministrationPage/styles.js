import {
  makeStyles,
} from '@material-ui/core';

import profile from './assets/profile.png';

import COLORS from '../../styles/colors';

const useStyles = makeStyles(() => ({
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
}));

export default useStyles;
