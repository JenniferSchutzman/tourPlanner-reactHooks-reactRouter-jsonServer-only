import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom';
import useFetch from 'use-http'
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

  const handleClick = (item) => {
    history.push({
      pathname: `/selections/${item.title}`,
      state: data
    })
  }

  return (
    <div className={classes.root}>
      <center>
        <GridList cellHeight={180} className={classes.gridList}>
          <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
            <Typography variant="display1" gutterBottom>
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
                  variant="subheading"
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