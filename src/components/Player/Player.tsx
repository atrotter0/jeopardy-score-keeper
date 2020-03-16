import React, { Dispatch, SetStateAction, useState } from 'react';

// Styles
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

// Components
import Paper from '@material-ui/core/Paper';
import CardHeader from '@material-ui/core/CardHeader';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';

// Icons
import Avatar from '@material-ui/core/Avatar';
import EditIcon from '@material-ui/icons/Edit';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      maxWidth: '100%',
      height: 150,
    },
    avatar: {
      // @TODO: Set random color.
      backgroundColor: red[500],
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
    scoreText: {
      textAlign: 'center',
      lineHeight: 1.5,
      marginLeft: -5,
    },
    scoreWrapper: {
      display: 'inline-flex',
      width: '100%',
      justifyContent: 'center',
      lineHeight: 25,
      paddingTop: 5,
      paddingBottom: 4,
    },
  })
);

interface PlayerProps {
  name: string;
  score: number;
  setName: Dispatch<SetStateAction<string>>;
  setScore: Dispatch<SetStateAction<number>>;
}

const Player: React.FC<PlayerProps> = ({ name, score, setName, setScore }) => {
  const classes = useStyles();
  const [playerNameVisible, setPlayerNameVisibility] = useState(true);
  const [editNameVisible, setEditNameVisibility] = useState(false);

  const togglePlayerNameControls = () => {
    setPlayerNameVisibility(!playerNameVisible);
    setEditNameVisibility(!editNameVisible);
  };

  const updatePlayerName = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const input = e.currentTarget.value;
    setName(input);
  };

  const getFirstInitial = (): string => name.split('')[0];

  return (
    <Paper elevation={0} className={classes.root}>
      {playerNameVisible ? (
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" className={classes.avatar}>
              {getFirstInitial()}
            </Avatar>
          }
          action={
            <IconButton aria-label="edit-player-name">
              <EditIcon fontSize="default" onClick={togglePlayerNameControls} />
            </IconButton>
          }
          title={name}
        />
      ) : (
        <div className={classes.textInputWrapper}>
          <TextField
            id="enter-name"
            label="Enter name"
            onChange={e => updatePlayerName(e)}
          />
          <IconButton aria-label="confirm-player-name">
            <CheckCircleIcon
              fontSize="default"
              onClick={togglePlayerNameControls}
            />
          </IconButton>
        </div>
      )}
      <CardContent>
        <div className={classes.scoreWrapper}>
          <AttachMoneyIcon fontSize="large" />
          <Typography
            variant="h5"
            color="textPrimary"
            component="p"
            className={classes.scoreText}
          >
            {score}
          </Typography>
        </div>
      </CardContent>
    </Paper>
  );
};

export default Player;
