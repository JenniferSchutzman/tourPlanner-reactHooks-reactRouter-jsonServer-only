import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom';
import useFetch from 'use-http'
import * as R from 'ramda'
import { ButtonBase, GridList, GridListTile, Typography } from '@material-ui/core';

import useStyles from './interestsUseStyles'

const Interests = props => {


  const [data, setData] = useState([])
  const [interests, setInterests] = useState([])
  const { get, response } = useFetch('http://localhost:3001')
  let history = useHistory();
  const classes = useStyles();
  // let { experienceType } = useParams();

  useEffect(() => {
    getInterests()
    getAllTours()
  }, [])

  const getInterests = async () => {
    const res = await get('/interests')
    if (response.ok) setInterests(res)
  }

  const getAllTours = async () => {
    const tours = await get('/allTours')
    if (response.ok) setData(tours)
  }

  const handleClick = (interestSelected) => {
    // first sort through data for interests matching onle
    console.log('interestSelected', interestSelected)
    console.log('data', data)
    let newData = []
    data.map(tour => {
      if (tour.options.includes(interestSelected.title.toLowerCase())) {
        newData.push(tour)
      }
      return tour
    }
    )
    // setData(newData)
    // data.map(tour => (tour.options.includes(interestSelected.title.toLowerCase())) ? tour : null)
    console.log('newData', newData)
    // console.log('dataafter', data)
    // history.push({
    //   pathname: `/selections/${item.title}`,
    //   state: data
    // })
  }

  return (
    <div className={classes.root}>
      <center>
        <GridList cellHeight={180} className={classes.gridList}>
          <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
            <Typography gutterBottom>
              What Interests You?
            </Typography>
          </GridListTile>

          {interests.map((item) => (
            <ButtonBase
              onClick={() => handleClick(item)}
              focusRipple
              key={item.title}
              className={classes.image}
              focusVisibleClassName={classes.focusVisible}
            >
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
                  color="inherit"
                  className={classes.imageTitle}
                >
                  {item.title}
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

export default Interests;