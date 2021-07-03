import React from 'react';
import {
  Container,
} from '@material-ui/core';

import useStyles from './styles';

function MenuBar() {
  const classes = useStyles();

  return (
    <div>
      <Container maxWidth="sm" className={classes.menuBarMainContainer} />
    </div>
  );
}

export default MenuBar;
