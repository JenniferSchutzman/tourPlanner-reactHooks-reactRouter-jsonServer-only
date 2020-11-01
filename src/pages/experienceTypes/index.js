import React, { useEffect, useState } from 'react';
import { useHistory, useLocation, useParams, Link } from 'react-router-dom'
import * as R from 'ramda'
import { ButtonBase, GridList, GridListTile, Typography } from '@material-ui/core';

import useStyles from './experienceTypesUseStyles.js'

import dataByInterest from './dataByInterest'

const ExperienceTypes = () => {

  const [data, setData] = useState([])
  const [experiences, setExperiences] = useState([])
  const history = useHistory();
  const location = useLocation();
  let { interest, experienceType } = useParams()
  const classes = useStyles();

  useEffect(() => {
    // setData(location.state)
    getExperienceTypes()
  }, [interest])

  // console.log(dataByInterest)

  const getExperienceTypes = () => {
    const isType = item => item.name === interest
    // console.log('interest in params to compare again data', interest)
    const filteredData = R.filter(isType, dataByInterest)
    const experienceData = filteredData.map(item => item.experienceTypes)
    console.log('experienceData', experienceData)
  }

  const handleClick = (item) => {
    const experienceType = 'walking'
    history.push({
      pathname: `/${interest}/${experienceType}/schedule`,
      state: data
    })
  }
  return (
    <div>

      <GridList cellHeight={150}>
        <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
          <center>
            <p />
            <Typography variant="display1" gutterBottom>
              Select a type of experience
            </Typography>
          </center>

          {experiences.map(item => (
            <ButtonBase
              focusRipple
              key={item.tourName}
              onClick={() => handleClick(item)}
              className={classes.image}
            >
              <h1>{item.type}</h1>
              <span
                className={classes.imageSrc}
                style={{
                  backgroundImage: `url(${item.img})`
                }}
              />
              <span className={classes.imageBackdrop} />
              <span className={classes.imageButton}>
                <Typography
                  component="span"
                  variant="subheading"
                  color="inherit"
                  className={classes.imageTitle}
                >
                  {item.type}
                  <span className={classes.imageMarked} />
                </Typography>
              </span>
            </ButtonBase>
          ))}
        </GridListTile>
      </GridList>

    </div>
  )
}

export default ExperienceTypes