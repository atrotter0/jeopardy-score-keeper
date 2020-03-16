import React, { Dispatch, SetStateAction } from 'react';

// Styles
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

// Components
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';

// Icons
import AddBoxIcon from '@material-ui/icons/AddBox';
import IndeterminateCheckBoxIcon from '@material-ui/icons/IndeterminateCheckBox';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paperWrapper: {
      marginTop: 10,
      marginBottom: 10,
    },
    pointButtonWrapper: {
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'center',
    },
    pointsText: {
      marginRight: 50,
    },
  })
);

interface PointsCardProps {
  pointValue: number;
  score: number;
  setScore: Dispatch<SetStateAction<number>>;
}

const PointsCard: React.FC<PointsCardProps> = ({
  pointValue,
  score,
  setScore,
}) => {
  const classes = useStyles();

  const addToScore = () => setScore(score + pointValue);

  const subtractFromScore = () => setScore(score - pointValue);

  return (
    <Paper elevation={1} className={classes.paperWrapper}>
      <div className={classes.pointButtonWrapper}>
        <Typography
          variant="h5"
          color="textPrimary"
          component="p"
          className={classes.pointsText}
        >
          ${pointValue}
        </Typography>
        <IconButton aria-label="add-score" onClick={addToScore}>
          <AddBoxIcon fontSize="large" />
        </IconButton>
        <IconButton aria-label="subtract-score" onClick={subtractFromScore}>
          <IndeterminateCheckBoxIcon fontSize="large" />
        </IconButton>
      </div>
    </Paper>
  );
};

export default PointsCard;
