import React, { Dispatch, SetStateAction } from 'react';

// Components
import PointsPage from '../PointsPage/PointsPage';
import PointsPageFinal from '../PointsPageFinal/PointsPageFinal';

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
        title="Double"
        pointValues={[400, 800, 1200, 1600, 2000]}
        score={score}
        setScore={setScore}
      />
      {/* Final Jeopardy */}
      <PointsPageFinal
        visible={
          finalJeopardyVisible && !jeopardyVisible && !doubleJeopardyVisible
        }
        title="Final"
        score={score}
        setScore={setScore}
      />
    </>
  );
};

export default PointSelection;
