import React from 'react';

// Styles
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

// Icons
import MenuIcon from '@material-ui/icons/Menu';

// Components
import { AppBar, IconButton, Toolbar, Typography } from '@material-ui/core';
import UserIcon from '../UserIcon/UserIcon';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  })
);

const Menu = (): JSX.Element => {
  const classes = useStyles();

  return (
    <AppBar position="fixed">
      <Toolbar>
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="menu"
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" className={classes.title}>
          Jeopardy Score Keeper
        </Typography>
        <UserIcon />
      </Toolbar>
    </AppBar>
  );
};

export default Menu;
