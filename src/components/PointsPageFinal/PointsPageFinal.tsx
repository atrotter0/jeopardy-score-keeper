import React, { Dispatch, SetStateAction, useState } from 'react';

// Styles
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

// Components
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import PointsCard from '../PointsCard/PointsCard';

// Icons
import IconButton from '@material-ui/core/IconButton';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paperWrapper: {
      height: 60,
      marginTop: 10,
      marginBottom: 10,
    },
    textInputWrapper: {
      paddingTop: 5,
      paddingLeft: 20,
      paddingRight: 8,
      marginBottom: 20,
      display: 'flex',
      justifyContent: 'space-between',
      textAlign: 'center',
    },
  })
);

interface PointsPageFinalProps {
  visible: boolean;
  title: string;
  score: number;
  setScore: Dispatch<SetStateAction<number>>;
}

const PointsPageFinal: React.FC<PointsPageFinalProps> = ({
  visible,
  title,
  score,
  setScore,
}) => {
  const classes = useStyles();
  const [finalJeopardyWager, setFinalJeopardyWager] = useState(0);
  const [wagerVisible, setWagerVisibility] = useState(true);
  const [editWagerVisible, setEditWagerVisibility] = useState(true);

  const updateFinalWager = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const input = e.currentTarget.value;
    setFinalJeopardyWager(parseInt(input));
  };

  const toggleEditWagerVisible = () => {
    setWagerVisibility(!wagerVisible);
    setEditWagerVisibility(!editWagerVisible);
  };

  return (
    <>
      {visible && (
        <>
          <Typography variant="h5" color="textPrimary" component="p">
            {title === 'Jeopardy' ? title : `${title} Jeopardy`}
          </Typography>
          <Paper elevation={1} className={classes.paperWrapper}>
            {editWagerVisible ? (
              <div className={classes.textInputWrapper}>
                <TextField
                  id="enter-wager"
                  label="Enter wager"
                  onChange={e => updateFinalWager(e)}
                />
                <IconButton aria-label="confirm-player-name">
                  <CheckCircleIcon
                    fontSize="default"
                    onClick={toggleEditWagerVisible}
                  />
                </IconButton>
              </div>
            ) : (
              <PointsCard
                pointValue={finalJeopardyWager}
                score={score}
                setScore={setScore}
              />
            )}
          </Paper>
        </>
      )}
    </>
  );
};

export default PointsPageFinal;
