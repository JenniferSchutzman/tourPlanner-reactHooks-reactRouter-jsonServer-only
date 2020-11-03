import React, { useEffect, useState } from 'react';
import { useHistory, useParams, } from 'react-router-dom'
import * as R from 'ramda'
import { ButtonBase, GridList, GridListTile, Typography } from '@material-ui/core';

import useStyles from './experienceTypesUseStyles.js'

import dataByInterest from './dataByInterest'

const ExperienceTypes = () => {

  // const [data, setData] = useState([])
  const [experiences, setExperiences] = useState([])
  const history = useHistory();
  // const location = useLocation();
  let { interest } = useParams()
  const classes = useStyles();

  useEffect(() => {
    // setData(location.state)
    getExperienceTypes()
  }, [interest])

  const getExperienceTypes = () => {
    const isType = item => item.name === interest
    const filteredData = R.filter(isType, dataByInterest)
    const types = (filteredData.map(item => item.experienceTypes))
    setExperiences(R.flatten(types))
    // console.log('types', types)
    // console.log('names', types.map(item => item.name))

  }

  const handleClick = (item) => {
    const experienceType = 'walking'
    history.push({
      pathname: `/${interest}/${experienceType}/schedule`,
      // state: data
    })
  }



  return (
    <div className={classes.root}>
      <center>
        <GridList cellHeight={150}>
          <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>

            <Typography gutterBottom>
              Select a type of experience
            </Typography>

          </GridListTile>

          {experiences.map((item, index) => (
            // <h5>{item.name}</h5>
            <ButtonBase
              focusRipple
              key={item.name}
              onClick={() => handleClick(item)}
              className={classes.image}
              focusVisibleClassName={classes.focusVisible}
            >
              <span
                className={classes.imageSrc}
                key={item.name}
                style={{
                  backgroundImage: `url(${item.img})`
                }}
              />
              <span className={classes.imageBackdrop} />
              <span className={classes.imageButton}>
                <Typography
                  component="span"
                  color="inherit"
                  className={classes.imageTitle}
                >
                  {item.name}
                  <span className={classes.imageMarked} />
                </Typography>
              </span>
            </ButtonBase>
          ))}

        </GridList>
      </center>
    </div >
  )
}

export default ExperienceTypes