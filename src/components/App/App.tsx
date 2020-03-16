import React, { useState } from 'react';

// Styles
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

// Components
import { Container } from '@material-ui/core';
import Player from '../Player/Player';
import PointSelection from '../PointSelection/PointSelection';
import BottomMenu from '../BottomMenu/BottomMenu';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      height: 650,
    },
  })
);

const App = (): JSX.Element => {
  const classes = useStyles();
  const [name, setName] = useState('Player');
  const [score, setScore] = useState(0);
  const [jeopardyVisible, setJeopardyVisibility] = useState(true);
  const [doubleJeopardyVisible, setDoubleJeopardyVisibility] = useState(false);
  const [finalJeopardyVisible, setFinalJeopardyVisibility] = useState(false);

  return (
    <>
      <Container maxWidth="sm" className={classes.root}>
        <Player
          name={name}
          setName={setName}
          score={score}
          setScore={setScore}
        />
        <PointSelection
          jeopardyVisible={jeopardyVisible}
          doubleJeopardyVisible={doubleJeopardyVisible}
          finalJeopardyVisible={finalJeopardyVisible}
          score={score}
          setScore={setScore}
        />
      </Container>
      <BottomMenu
        setJeopardyVisible={setJeopardyVisibility}
        setDoubleJeopardyVisible={setDoubleJeopardyVisibility}
        setFinalJeopardyVisible={setFinalJeopardyVisibility}
      />
    </>
  );
};

export default App;
