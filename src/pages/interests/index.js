import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom';
import useFetch from 'use-http'
import { ButtonBase, GridList, GridListTile, ListSubheader, Typography } from '@material-ui/core';
import StarBorderIcon from '@material-ui/icons/StarBorder';

import useStyles from './interestsUseStyles'

const Interests = props => {

  const classes = useStyles();
  const [data, setData] = useState([])
  const [interests, setInterests] = useState([])
  const { get, response, loading, error } = useFetch('http://localhost:3001')
  let history = useHistory();
  // let { experienceType } = useParams();

  useEffect(() => {
    getInterests()
  }, [])

  const getInterests = async () => {
    const data = await get('/interests')
    if (response.ok) setData(data)
  }

  const passInterestToAdventure = (item) => {
    // console.log('item.name', item.title)
    history.push(`/${item.title}`)
  }

  // const getAllTours = async () => {
  //   const data = await get('/allTours')
  //   if (response.ok) setData(data)
  // }

  console.log('data', data)

  // console.log('interests', interests)

  return (
    <div className={classes.root}>
      <center>
        <GridList cellHeight={180} className={classes.gridList}>
          <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
            <Typography variant="display1" gutterBottom>
              What Interests You?
            </Typography>
          </GridListTile>

          {data.map((item) => (
            <ButtonBase
              onClick={() => passInterestToAdventure(item)}
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