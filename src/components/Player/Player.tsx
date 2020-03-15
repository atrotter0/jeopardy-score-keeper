import React, { Dispatch, SetStateAction, useState } from 'react';

// Styles
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

// Components
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import IconButton from '@material-ui/core/IconButton';

// Icons
import Avatar from '@material-ui/core/Avatar';
import EditIcon from '@material-ui/icons/Edit';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      maxWidth: 345,
    },
    avatar: {
      // @TODO: Set random color.
      backgroundColor: red[500],
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
  const getFirstInitial = (): string => name.split('')[0];

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            {getFirstInitial()}
          </Avatar>
        }
        action={
          <IconButton aria-label="edit-player">
            <EditIcon fontSize="small" />
          </IconButton>
        }
        title={name}
      />
    </Card>
  );
};

export default Player;
