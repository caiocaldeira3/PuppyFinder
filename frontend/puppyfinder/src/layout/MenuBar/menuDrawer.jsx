import React from 'react';
import {
  Drawer,
  Divider,
  List,
  ListItem,
  ListItemText,
  IconButton,
  ListItemIcon,
  useTheme,
} from '@material-ui/core';

import { useHistory } from 'react-router-dom';

import PropTypes from 'prop-types';

import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListIcon from '@material-ui/icons/List';
import AccountBoxIcon from '@material-ui/icons/AccountBox';

import useStyles from './styles';

const MenuDrawer = ({ handleDrawerClose, open }) => {
  const classes = useStyles();
  const theme = useTheme();

  const history = useHistory();

  const pagesIconFunctionsList = [{
    name: 'Lista de Pets',
    func: () => history.push('/adoption-list'),
    icon: <ListIcon />,
  }, {
    name: 'Perfil',
    func: () => {},
    icon: <AccountBoxIcon />,
  }];

  return (
    <Drawer
      className={classes.drawer}
      variant="persistent"
      anchor="left"
      open={open}
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <div className={classes.drawerHeader}>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
        </IconButton>
      </div>
      <Divider />
      <List>
        {pagesIconFunctionsList.map((item) => (
          <ListItem onClick={item.func} button key={item}>
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.name} />
          </ListItem>
        ))}
      </List>
      <Divider />
    </Drawer>
  );
};

MenuDrawer.propTypes = {
  handleDrawerClose: PropTypes.func,
  open: PropTypes.bool,
};

MenuDrawer.defaultProps = {
  handleDrawerClose: () => {},
  open: false,
};

export default MenuDrawer;
