import React, { useEffect, useState } from 'react';
import { useHistory, useLocation, Link } from 'react-router-dom';
import { Card, CardMedia, ListItem, ListItemIcon, ListItemText, Switch, Typography } from '@material-ui/core'
import Button from '@material-ui/core/Button';
import TodayIcon from '@material-ui/icons/Today';
import * as R from 'ramda'
import useStyles from './scheduleUseStyles'
import dataForDOW from './dataForDOW';

const Schedule = () => {

  const [data, setData] = useState([])
  // const [isChecked, setIsChecked] = useState({
  //   Monday: false,
  //   Tuesday: false,
  //   Tednesday: false,
  //   Thursday: false,
  //   Friday: false,
  //   Saturday: false,
  //   Sunday: false

  // });
  const location = useLocation();
  const history = useHistory();
  const classes = useStyles();

  // console.log('isChecked', isChecked)

  useEffect(() => {
    setData(dataForDOW)
  }, [dataForDOW])

  const checkDay = (event) => {

    const newDow = data.map(day => {
      console.log('day', day)
      if (day.name === event.target.name && day.selected === true) {
        console.log('inside first if', day)
        return { name: day.name, selected: false }
      } else if (day.name === event.target.name && (day.selected === null || day.selected === false)) {
        console.log('inside seoncd if', day)
        return { name: day.name, selected: true }
      } else {
        return day
      }
    })
    console.log('newDow', newDow)
    setData(newDow)

    // first handle the already true
    // console.log('data', data)
    // const checkFalse = data.map(day => (day.name === event.target.name && day.selected === true) ? { name: day.name, selected: false } : day)
    // console.log('checkFalse', checkFalse)

    // const newDow = checkFalse.map(day => (day.name === event.target.name && (day.selected === null || day.selected === false)) ? { name: day.name, selected: true } : day)
    // console.log('newDow', newDow)
    // setData(newDow)

    // I will also push in the interest and epxerience in order to run the 
    // recommendations filter onSubmit 
  }

  // console.log('data', data)
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

              {data.map(day => (
                <ListItem key={day.name}>
                  <ListItemIcon>
                    <TodayIcon />
                  </ListItemIcon>
                  <ListItemText primary={day.name} />
                  <Switch
                    checked={day.selected}
                    value={day.name}
                    name={day.name}
                    onChange={(event) => checkDay(event)}
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
                onClick={console.log('')}
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