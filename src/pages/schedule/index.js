import React, { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import history from '../../history'

import useStyles from './scheduleUseStyles'

const Schedule = () => {
  const [data, setData] = useState([])
  const location = useLocation();
  // const history = useHistory();

  const classes = useStyles();

  console.log('history in schedule', history)

  console.log('location in Schedule', location)

  useEffect(() => {
    console.log('inside Schedule')
  }, [])

  //xsconst data = ['Friday', 'Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday']

  return (
    <h1> inside schedule </h1>
  )
  // return (
  //   <div>
  //     <div>
  //       <Card className={classes.card}>
  //         <CardMedia
  //           className={classes.media}
  //           image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyRVTTO35jEIxHgu-sQ-mNpu4-CnBcm23DRisy5H9kRr2ca2WApA"
  //           title="Select Your Availability"
  //         />
  //       </Card>
  //       <div style={{ padding: '20px' }}>
  //         <center>
  //           <div>
  //             <center>
  //               <Typography variant="display1" gutterBottom>
  //                 Availability
  //             </Typography>
  //             </center>

  //             {data.map(day => (
  //               <ListItem>
  //                 <ListItemIcon>
  //                   <TodayIcon />
  //                 </ListItemIcon>
  //                 <ListItemText primary={day.name} />
  //                 <Switch
  //                   checked={day.selected}
  //                   onChange={props.checkDay(day.name)}
  //                   value={day.name}
  //                 />
  //               </ListItem>
  //             ))}
  //           </div>
  //           <dim>
  //             <Link to="/recommendations" style={{ textDecoration: 'none' }}>
  //               <Button
  //                 variant="raised"
  //                 size="large"
  //                 color="grey"
  //                 className={classes.button}
  //                 onClick={onClick(history, props.state)}
  //               >
  //                 <p />
  //               Ready for Results
  //             </Button>
  //             </Link>
  //           </dim>
  //         </center>
  //       </div>
  //     </div>
  //   </div>
  // )
}

export default Schedule; 