import React, { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import history from '../../history'

import useStyles from './scheduleUseStyles'

const Schedule = () => {
  const [data, setData] = useState([])
  const location = useLocation();
  // const history = useHistory();

  const classes = useStyles();

  console.log('history in schedule', history)

  console.log('location in Schedule', location)

  useEffect(() => {
    console.log('inside Schedule')
  }, [])

  const DOW = ['Friday', 'Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday']

  console.log('DOW', DOW)
  return (
    <div>Inside schedule :) </div>
  )
}

export default Schedule; 