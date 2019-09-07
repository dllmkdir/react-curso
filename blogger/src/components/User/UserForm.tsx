import React, { useState, useContext } from "react"
import TextField from '@material-ui/core/TextField';
import { useStyles } from "./styles"
import Button from '@material-ui/core/Button';
import { UserContext } from './UserContext'
import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import CloseIcon from '@material-ui/icons/Close';
import { IconButton } from "@material-ui/core";
interface UserFormProps { }
const UserForm: React.FC<UserFormProps> = () => {
    //hook for snackbar
    const [snackbar, setSnackBar] = useState(false)
    //configure context
    const { name, dispatch } = useContext(UserContext)
    //local hook to control the email address
    const [mail, setMail] = useState('')
    //hook for name
    const [username, setUsername] = useState('')
    const handleMail = (e) => {
        e.preventDefault()
        setMail(e.target.value)
    }
    const handleUsername = (e) => {
        e.preventDefault()
        setUsername(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        //submit all the information to the name controller
        dispatch({ type: 'set', name: username })
        localStorage.setItem('name', username)
        setSnackBar(true)
    }
    //handle close Snackbar
    const handleCloseSNakcBar = (e) => {
        e.preventDefault()
        setSnackBar(false)
    }
    // @ts-ignore
    const classes = useStyles()
    return (
        <div>
            <TextField
                id="outlined-name"
                label="Mail"
                className={classes.textField}
                value={mail}
                onChange={handleMail}
                margin="normal"
                variant="outlined"
            />
            <TextField
                id="outlined-name"
                label="Name"
                className={classes.textField}
                value={username}
                onChange={handleUsername}
                margin="normal"
                variant="outlined"
            />
            <Button variant="contained" onClick={handleSubmit} color="primary" className={classes.button}>
                Submit
            </Button>
            <Snackbar
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                open={snackbar}
                autoHideDuration={6000}
                onClose={handleCloseSNakcBar}
                ContentProps={{
                    'aria-describedby': 'message-id',
                }}
                message={<span id="message-id">Mail Sent!</span>}
                action={[
                    <IconButton
                        key="close"
                        aria-label="close"
                        color="inherit"
                        className={classes.close}
                        onClick={handleCloseSNakcBar}
                    >
                        <CloseIcon />
                    </IconButton>,
                ]}
            />
        </div>
    )
}

export default UserForm

//basic typescript structure
//import React from "react"
// //importamos navbar
// import { useStyles } from "./styles"
// interface UserFormProps { }
// const UserForm: React.FC<UserFormProps> = () => {
//     // @ts-ignore
//     const classes = useStyles()
//     return (
//         <div>
//             This is a form
//         </div>
//     )
// }

// export default UserForm