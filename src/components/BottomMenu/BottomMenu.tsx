import React, { useState } from 'react';

// Styles
import { makeStyles } from '@material-ui/core/styles';

// Components
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';

// Icons
import PresentToAllIcon from '@material-ui/icons/PresentToAll';

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
});

const BottomMenu = (): JSX.Element => {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => setValue(newValue)}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction
        label="Jeopardy"
        icon={<PresentToAllIcon fontSize="large" />}
      />
      <BottomNavigationAction
        label="Double Jeopardy"
        icon={<PresentToAllIcon fontSize="large" />}
      />
      <BottomNavigationAction
        label="Final Jeopardy"
        icon={<PresentToAllIcon fontSize="large" />}
      />
    </BottomNavigation>
  );
};

export default BottomMenu;
