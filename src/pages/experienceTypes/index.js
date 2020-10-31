import React, { useEffect, useState } from 'react';
import { useHistory, useLocation, useParams } from 'react-router-dom'
import * as R from 'ramda'


const ExperienceTypes = () => {
  const [allTours, setAllTours] = useState([])
  let { interest } = useParams()
  const [experiences, setExperiences] = useState([])
  const history = useHistory();
  const location = useLocation();

  console.log('location.state', location.state)

  useEffect(() => {
    setAllTours(location.state)
    getExperienceTypes(location.state)
  }, [location])



  const getExperienceTypes = tours => {
    console.log('tours coming into function', tours)
    const willSetExperiences = R.filter(R.where({ options: R.includes('history') }), tours)
    console.log('willSetExperiences', willSetExperiences)
    // setExperiences
  }

  console.log('experiences', experiences)
  // I will then pass both the interest and the type on to the next page as an array

  // Then I'll pass the schedule selecitons into the array as well and filter through the entire db :)

  console.log('interest', interest)



  return (
    <>
      <h1> Interest = </h1>
    </>
  )
}

export default ExperienceTypes