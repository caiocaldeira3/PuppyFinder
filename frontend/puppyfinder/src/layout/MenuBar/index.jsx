import React, { useState } from 'react';
import {
  AppBar,
  Container,
  Toolbar,
  Typography,
} from '@material-ui/core';

import PropTypes from 'prop-types';
import MenuIcon from '@material-ui/icons/Menu';

import MenuDrawer from './menuDrawer';

import useStyles from './styles';

const MenuBar = ({ pageName, showLogo }) => {
  const [open, setOpen] = useState(false);

  const classes = useStyles();

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <>
      <AppBar position="absolute" className={classes.appBar}>
        <Toolbar>
          <div>
            <MenuIcon className={classes.icon} onClick={handleDrawerOpen} />
          </div>
          <div style={{ display: 'flex', marginLeft: 30 }}>
            <Typography variant="h6" color="inherit" noWrap>
              {pageName}
            </Typography>
          </div>
        </Toolbar>
      </AppBar>
      <MenuDrawer handleDrawerClose={handleDrawerClose} open={open} />
      { showLogo && (
        <div>
          <Container maxWidth="sm" className={classes.menuBarMainContainer} />
        </div>

      )}
    </>
  );
};

MenuBar.propTypes = {
  pageName: PropTypes.string,
  showLogo: PropTypes.bool,
};

MenuBar.defaultProps = {
  pageName: 'Pagina',
  showLogo: true,
};

export default MenuBar;
