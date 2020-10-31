import React from 'react';
import { useHistory, useLocation, useParams } from 'react-router-dom'


const ExperienceTypes = () => {
  let { interest } = useParams()
  // const history = useHistory();
  // const location = useLocation();

  console.log('interest', interest)

  return (
    <>
      <h1> Interest = </h1>
    </>
  )
}

export default ExperienceTypes