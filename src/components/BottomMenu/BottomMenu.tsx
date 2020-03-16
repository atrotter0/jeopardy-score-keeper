import React, { Dispatch, SetStateAction, useState } from 'react';

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
    position: 'fixed',
    bottom: 0,
    paddingBottom: 20,
  },
});

interface BottomMenuProps {
  setJeopardyVisible: Dispatch<SetStateAction<boolean>>;
  setDoubleJeopardyVisible: Dispatch<SetStateAction<boolean>>;
  setFinalJeopardyVisible: Dispatch<SetStateAction<boolean>>;
}

const BottomMenu: React.FC<BottomMenuProps> = ({
  setJeopardyVisible,
  setDoubleJeopardyVisible,
  setFinalJeopardyVisible,
}): JSX.Element => {
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
        onClick={() => {
          setJeopardyVisible(true);
          setDoubleJeopardyVisible(false);
          setFinalJeopardyVisible(false);
        }}
      />
      <BottomNavigationAction
        label="Double Jeopardy"
        icon={<PresentToAllIcon fontSize="large" />}
        onClick={() => {
          setDoubleJeopardyVisible(true);
          setJeopardyVisible(false);
          setFinalJeopardyVisible(false);
        }}
      />
      <BottomNavigationAction
        label="Final Jeopardy"
        icon={<PresentToAllIcon fontSize="large" />}
        onClick={() => {
          setFinalJeopardyVisible(true);
          setJeopardyVisible(false);
          setDoubleJeopardyVisible(false);
        }}
      />
    </BottomNavigation>
  );
};

export default BottomMenu;
