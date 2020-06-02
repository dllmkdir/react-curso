import React, { useContext } from 'react'
import { Grid, Avatar, Typography, AppBar, Toolbar, IconButton, InputBase, Button } from '@material-ui/core'
import { UserContext } from '../User/UserContext'
import { useStyles } from './styles'
import { SignOutContext } from '../User/SignOutContext'
// put the profile in the navbar
const Navbar = () => {
    const user = useContext(UserContext)
    const signOutRoutine = useContext(SignOutContext)
    // @ts-ignore
    const classes = useStyles()
    return (
        <AppBar position="static" className={classes.root}>
            <Toolbar>
                <IconButton
                    edge="start"
                    className={classes.menuButton}
                    color="inherit"
                    aria-label="open drawer"
                >
                    <Avatar src={user.photoURL} />
                </IconButton>
                <Typography className={classes.title} variant="h6" noWrap>
                    {user.displayName}
                </Typography>
                {/* 
                // @ts-ignore */}
                <Button onClick={() => { signOutRoutine.signOut() }} className={classes.button}>
                    Sign Out
                </Button>
            </Toolbar>
        </AppBar>
    )
}
export default Navbar