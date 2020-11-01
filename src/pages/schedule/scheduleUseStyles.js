import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  },
  card: {
    maxWidth: '100%'
  },
  media: {
    height: 200
  }
}))

export default useStyles