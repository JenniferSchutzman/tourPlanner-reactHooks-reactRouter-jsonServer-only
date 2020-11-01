import React, { useEffect, useState } from 'react';
import { useHistory, useLocation, useParams, Link } from 'react-router-dom'
import * as R from 'ramda'
import { ButtonBase, GridList, GridListTile, Typography } from '@material-ui/core';

import useStyles from './experienceTypesUseStyles.js'

////////// PRACTICE ///////////// Come back to this another day 

// const data = [
//   {
//     _id: 'an id name',
//     tourName: "daytime history tour",
//     companyName: "Palmetto Carriage",
//     type: "carriage",
//     options: ["history", "carriage"]
//   },
//   {
//     _id: 'second id name',
//     tourName: 'second tour name',
//     companyName: 'second tour na,e',
//     type: "carriage",
//     options: ["history", "carriage"]
//   },
//   {
//     _id: 'third id name',
//     tourName: 'third tour name',
//     companyName: 'third tour na,e',
//     type: "boat",
//     options: ["adventure", "boat"]
//   }
// ]

// map to display the types but do not repeat a type (keeping the objects)

// const unique = data.map(item => item.type).map(id => {
//   console.log('id', id)
//   console.log('item', item)
//   // if()
//   return {
//     type: data.find(item => item._id === id).type,
//     companyName: data.find(item => item._id === id).companyName
//   }
// }))
// console.log('unique', unique)

const ExperienceTypes = () => {

  const [data, setData] = useState([])
  const [experiences, setExperiences] = useState([])
  const history = useHistory();
  const location = useLocation();
  let { interest } = useParams()
  const classes = useStyles();

  useEffect(() => {
    setData(location.state)
    getExperienceTypes(location.state)
  }, [])

  // useEffect(() => {
  //   if (history.location.pathname === "/schedule") {
  //     history.push('/schedule')
  //   }
  // }, [location])

  const getExperienceTypes = tours => {
    //   const filteredToursForInterest = R.filter(R.where({ options: R.includes(R.toLower(interest)) }), tours)
    // change this another day to remove duplicate types
    setExperiences(tours)
  }

  const handleClick = () => {
    console.log('inside handleClick', location.pathname)
    // const newLocation = {
    //   pathname: `/schedule`,
    //   // another day I will be show to only pass on the experiences matching the one clicked 
    //   // AND the interest frmo the param on this page 
    //   state: { experiences }
    // }
    return (
      <Link to={{
        pathname: "/interests",
        // another day I will be show to only pass on the experiences matching the one clicked 
        // AND the interest frmo the param on this page 
        state: experiences
      }} />
    )
    // history.push(newLocation)
  }

  console.log('render location.pathname', location.pathname)


  // console.log('experiences', experiences)

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
              onClick={() => handleClick(history, item)}
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