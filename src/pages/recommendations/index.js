import { contains } from 'ramda';
import React, { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import * as R from 'ramda'

const Recommendations = () => {
  const [allTours, setAllTours] = useState([]);

  // const [recommendations, setRecommendations] = useState([])
  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    fetch('http://localhost:3001/allTours')
      .then(res => res.json())
      .then(data => setAllTours(data))
  }, [])

  useEffect(() => {
    getRecommendations()
  }, [allTours])

  const tags = location.state

  const getRecommendations = () => {

    // const hasMatch = (value) => value.con

    // const checkMatches = (array, target) => target.every(value => array.includes(value))

    // const list = allTours.filter(tour => checkMatches(tags, tour.options))

    // const list = diff()

    c      var resultOptions = []

    console.log(
      'action.payload.interests',
      JSON.stringify(action.payload.interests)
    )
    const chosenInterest = find(i => i.selected, action.payload.interests)
    //console.log('chosenInterests', JSON.stringify(chosenInterest))
    const resultOptions1 = concat([chosenInterest.name], resultOptions)
    //console.log('resultOptions1', JSON.stringify(resultOptions1))
    const chosenExp = find(e => e.selected, chosenInterest.experienceTypes)
    const resultOptions2 = concat([chosenExp.name], resultOptions1)
    const chosenDays = find(d => d.selected, action.payload.dow)
    const resultOptionsFINAL = concat([chosenDays.name], resultOptions2)
    return (state = resultOptionsFINAL)
    console.log('list', list)
  }

  return (
    <h1>Recommendations page</h1>
  )
}

export default Recommendations