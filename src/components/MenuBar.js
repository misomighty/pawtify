import React from 'react'
import MenuIcon from '@material-ui/icons/Menu'
import { AppBar, Toolbar, IconButton, Typography, Button, makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      borderRadius: '10px',
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }));

const MenuBar = () => {
    const classes = useStyles()

    return (
    <AppBar position="static" color="default" className={classes.root}>
  <Toolbar>
    <Typography variant="h6" className={classes.title}>
      Services
    </Typography>
    <Typography variant="h6" className={classes.title}>
      Donate
    </Typography>
    <Typography variant="h6" className={classes.title}>
      Facilities
    </Typography>
    <Typography variant="h6" className={classes.title}>
      Reviews
    </Typography>
    <Typography variant="h6" className={classes.title}>
      Show
    </Typography>
    <Typography variant="h6" className={classes.title}>
      About
    </Typography>
  </Toolbar>
</AppBar>
    )
}

export { MenuBar }
