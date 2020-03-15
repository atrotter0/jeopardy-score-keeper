import React, { useState } from 'react';

// Components
import { Container } from '@material-ui/core';
import Player from '../Player/Player';
import BottomMenu from '../BottomMenu/BottomMenu';

const App = (): JSX.Element => {
  const [name, setName] = useState('Player');
  const [score, setScore] = useState(0);

  return (
    <>
      <Container maxWidth="sm">
        <Player
          name={name}
          setName={setName}
          score={score}
          setScore={setScore}
        />
        {/*<PointSelection />*/}
      </Container>
      <BottomMenu />
    </>
  );
};

export default App;
