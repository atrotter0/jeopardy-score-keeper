import React, { Dispatch, SetStateAction } from 'react';

// Styles
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

// Components
import PointsPage from '../PointsPage/PointsPage';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {},
  })
);

interface PointSelectionProps {
  jeopardyVisible: boolean;
  doubleJeopardyVisible: boolean;
  finalJeopardyVisible: boolean;
  score: number;
  setScore: Dispatch<SetStateAction<number>>;
}

const PointSelection: React.FC<PointSelectionProps> = ({
  jeopardyVisible,
  doubleJeopardyVisible,
  finalJeopardyVisible,
  score,
  setScore,
}) => {
  const classes = useStyles();

  return (
    <>
      {/* Jeopardy */}
      <PointsPage
        visible={jeopardyVisible}
        title="Jeopardy"
        pointValues={[100, 200, 400, 800, 1000]}
        score={score}
        setScore={setScore}
      />
      {/* Double Jeopardy */}
      <PointsPage
        visible={
          doubleJeopardyVisible && !jeopardyVisible && !finalJeopardyVisible
        }
        title="Double Jeopardy"
        pointValues={[400, 800, 1200, 1600, 2000]}
        score={score}
        setScore={setScore}
      />
      {/* Final Jeopardy */}
      <PointsPage
        visible={
          finalJeopardyVisible && !jeopardyVisible && !doubleJeopardyVisible
        }
        title="Final Jeopardy"
        pointValues={[]}
        score={score}
        setScore={setScore}
      />
    </>
  );
};

export default PointSelection;
