import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
// import { connect } from 'react-redux';
// import { getTours } from '../actions/allToursActions'

const Recommendations = () => {
  // const [allTours, setAllTours] = useState([]);
  // const [recommendations, setRecommendations] = useState([])
  const location = useLocation();
  const history = useHistory();

  // useEffect(() => {
  //   getTours()
  // }, [])

  // console.log('')
  console.log('locatoin', location)
  console.log('history', history)
  return (
    <h1>Recommendations page</h1>
  )
}

// export default connect(null, { getTours })(Recommendations)

export default Recommendations