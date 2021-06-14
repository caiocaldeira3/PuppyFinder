import {
  makeStyles,
} from '@material-ui/core';

const useStyles = makeStyles(() => ({
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
}));

export default useStyles;
