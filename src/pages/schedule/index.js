import React, { useEffect, useState } from 'react';
import { useHistory, useLocation, useParams, Link } from 'react-router-dom';
import { Card, CardMedia, ListItem, ListItemIcon, ListItemText, Switch, Typography } from '@material-ui/core'
import Button from '@material-ui/core/Button';
import TodayIcon from '@material-ui/icons/Today';
import * as R from 'ramda'
import useStyles from './scheduleUseStyles'
import dataForDOW from './dataForDOW';

const Schedule = () => {

  const [data, setData] = useState([])
  // const location = useLocation();
  const history = useHistory();
  const classes = useStyles();
  const { interest, experienceType } = useParams()



  useEffect(() => {
    setData(dataForDOW)
  }, [dataForDOW])

  const checkDay = (event) => {
    const newDow = data.map(day => {
      if (day.name === event.target.name && day.selected === true) {
        return { name: day.name, selected: false }
      } else if (day.name === event.target.name && (day.selected === null || day.selected === false)) {
        return { name: day.name, selected: true }
      } else {
        return day
      }
    })
    setData(newDow)
  }

  const handleSubmit = () => {
    // console.log('interest', interest)
    // console.log('experienceType', experienceType)
    // console.log('data', data)
    const selectedDays = R.compose(
      R.map(item => item.name),
      R.filter(day => day.selected === true)
    )(data)

    // data.filter(day => day.selected === true)
    console.log('selectedDays', selectedDays)

    // i will push al of these items into an array
    const params = [];
    params.push(interest, experienceType)
    const finalTags = selectedDays.concat(params)
    console.log('finalTags', finalTags)
    if (finalTags) {
      history.push({
        pathname: '/recommendations',
        state: finalTags
      })
    }
    // and then pass this state to the recommendations page where I will compare against the GET ALL
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

              <Button
                size="large"
                color="grey"
                className={classes.button}
                onClick={handleSubmit}
              >
                Ready for Results
              </Button>
            </div>

          </center>
        </div>
      </div>
    </div>
  )
}

export default Schedule; 