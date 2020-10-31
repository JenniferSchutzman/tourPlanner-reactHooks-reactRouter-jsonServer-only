import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import { GridList, GridListTile, Typography, makeStyles } from '@material-ui/core';

import interestsTileData from './interestsTileData'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 500,
    height: 450,
  },
}));

// bring in the data to populate the interests Grid 

const Interests = props => {
  const classes = useStyles();

  let history = useHistory();

  const data = interestsTileData

  console.log('data', data)

  return (
    <center>
      <GridList cellHeight={150}>
        <GridListTile cols={2} >
          <Typography>What Interests You?</Typography>
        </GridListTile>
      </GridList>
    </center>
  )
}

export default Interests;