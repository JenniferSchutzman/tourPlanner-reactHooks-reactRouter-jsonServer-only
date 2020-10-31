/* eslint-disable no-unused-expressions */

import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Card, CardMedia, Typography, makeStyles } from '@material-ui/core';

import fountain from '../../images/fountain.png'

const useStyles = makeStyles({
  button: {
    padding: 15,
  },
  header: {
    padding: 22,
  },
  media: {
    height: 500,
  },
  root: {
    maxWidth: 345,
  },
  text: {
    padding: 22,
  }
});

const Home = props => {
  const classes = useStyles()

  let history = useHistory();

  const goToInterests = () => {
    history.push("/interests")
  }

  return (
    <center>
      <Typography variant="h3" className={classes.header}>
        Charleston Tour Finder
      </Typography>
      <Card className={classes.root}>
        <CardMedia className={classes.media}
          image={fountain}
          title="Pineapple Fountain"
        />
      </Card>
      <Typography variant='h5' className={classes.text}>
        In just 3 easy steps, we will find you the perfect tour.
      </Typography>
      <Button variant="contained" size="large" color="grey" className={classes.button}
        onClick={goToInterests}
      >Get Started</Button>
    </center>
  )
};

export default Home;