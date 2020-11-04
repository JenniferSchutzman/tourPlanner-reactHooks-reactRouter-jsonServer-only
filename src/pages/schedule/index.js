import React, { useState } from 'react';
import { useHistory, useLocation, Link } from 'react-router-dom';
import { Card, CardMedia, ListItem, ListItemIcon, ListItemText, Switch, Typography } from '@material-ui/core'
import Button from '@material-ui/core/Button';
import TodayIcon from '@material-ui/icons/Today';

import useStyles from './scheduleUseStyles'
import dataByInterests from '../experienceTypes/dataByInterest';

const Schedule = () => {

  const [data, setData] = useState([])
  const [isChecked, setIsChecked] = useState(false);
  const location = useLocation();
  const history = useHistory();
  const classes = useStyles();

  const DOW = ['Friday', 'Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday']

  //  useEffect(() => {
  //   setIsChecked(checked);
  // }, [checked]);

  // console.log('')

  const checkDay = event => {
    // setData(data.push(day.name))
    setIsChecked(true)
    // console.log('day', day)
    console.log('event', event)
    // I will also push in the interest and epxerience in order to run the 
    // recommendations filter onSubmit 
  }

  console.log('data', data)
  return (
    <div>
      <div>
        <Card className={classes.card}>
          <CardMedia
            className={classes.media}
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyRVTTO35jEIxHgu-sQ-mNpu4-CnBcm23DRisy5H9kRr2ca2WApA"
            title="Select Your Availability"
          />
        </Card>
        <div style={{ padding: '20px' }}>
          <center>
            <div>
              <center>
                <Typography variant="display1" gutterBottom>
                  Availability
              </Typography>
              </center>

              {DOW.map(day => (
                <ListItem key={day}>
                  <ListItemIcon>
                    <TodayIcon />
                  </ListItemIcon>
                  <ListItemText primary={day} />
                  <Switch
                    checked={isChecked}
                    value={day}
                    onChange={(event) => checkDay(event.target.value)}
                  />
                </ListItem>
              ))}
            </div>

            <Link to="/recommendations" style={{ textDecoration: 'none' }}>
              <Button
                variant="raised"
                size="large"
                color="grey"
                className={classes.button}
                onClick={console.log('hit button')}
              >
                Ready for Results
              </Button>
            </Link>

          </center>
        </div>
      </div>
    </div>
  )
}

export default Schedule; 