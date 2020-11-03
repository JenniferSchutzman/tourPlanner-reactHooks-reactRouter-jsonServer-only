import React, { useEffect } from 'react';

const AllTours = (props) => {
  // const [allTours, setAllTours] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/allTours')
      .then(res => res.json())
      .then(res => console.log('res', res))
  }, [])


  return (
    <h1>All Tours</h1>
  )
}

export default AllTours;