import React, { Dispatch, SetStateAction } from 'react';

// Components
import PointsCard from '../PointsCard/PointsCard';
import Typography from '@material-ui/core/Typography';

interface PointsPageProps {
  visible: boolean;
  title: string;
  pointValues: number[];
  score: number;
  setScore: Dispatch<SetStateAction<number>>;
}

const PointsPage: React.FC<PointsPageProps> = ({
  visible,
  title,
  pointValues,
  score,
  setScore,
}) => {
  return (
    <>
      {visible && (
        <>
          <Typography variant="h5" color="textPrimary" component="p">
            {title === 'Jeopardy' ? title : `${title} Jeopardy`}
          </Typography>
          {pointValues.map((value: number) => (
            <PointsCard pointValue={value} score={score} setScore={setScore} />
          ))}
        </>
      )}
    </>
  );
};

export default PointsPage;
