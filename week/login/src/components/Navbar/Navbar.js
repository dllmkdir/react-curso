import React from 'react'
import { useStyles } from "./styles"
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
const Navbar = ({ title }) => {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <AppBar position="static" className={classes.appBar}>
                <Toolbar>
                    <Link to="/">
                        <IconButton edge="start" className={classes.menuButton} aria-label="menu">
                            <MenuIcon className={classes.menuIcon} />
                        </IconButton>
                    </Link>

                    <Typography variant="h6" >
                        <Link to="/about" className={classes.title}>
                            About
                            </Link>
                    </Typography>

                    <Typography variant="h6" >
                        <Link to="/contact" className={classes.title}>
                            Contact
                            </Link>
                    </Typography>
                </Toolbar>
            </AppBar>
        </div >)
}
export default Navbar