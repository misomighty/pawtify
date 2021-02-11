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
    <AppBar position="static" color="default" maxWidth="lg" className={classes.root}>
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          About
        </Typography>
        <Typography variant="h6" className={classes.title}>
          <a href="#quiz">Take The Quiz</a>
        </Typography>
      </Toolbar>
    </AppBar>
    )
}

export { MenuBar }
