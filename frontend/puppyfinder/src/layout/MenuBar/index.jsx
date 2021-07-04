import React from 'react';
import {
  AppBar,
  Container,
  Toolbar,
  Typography,
} from '@material-ui/core';

import PropTypes from 'prop-types';

import WarningIcon from '@material-ui/icons/Warning';

import useStyles from './styles';

function MenuBar({ pageName, Icon }) {
  const classes = useStyles();

  return (
    <>
      <AppBar position="absolute" className={classes.appBar}>
        <Toolbar>
          <Icon className={classes.icon} />
          <Typography variant="h6" color="inherit" noWrap>
            {pageName}
          </Typography>
        </Toolbar>
      </AppBar>
      <div>
        <Container maxWidth="sm" className={classes.menuBarMainContainer} />
      </div>
    </>
  );
}

MenuBar.propTypes = {
  pageName: PropTypes.string,
  Icon: PropTypes.node,
};

MenuBar.defaultProps = {
  pageName: 'Pagina',
  Icon: WarningIcon,
};

export default MenuBar;
