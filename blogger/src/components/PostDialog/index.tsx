import React, { useContext, useState, useEffect } from "react"
import 'date-fns'
import DateFnsUtils from '@date-io/date-fns';
//importamos navbar
import { useStyles } from "./styles"
import { PostDialogContext } from './PostDialogContext'
import { Dialog, DialogTitle, DialogContent, DialogContentText, TextField, DialogActions, Button, CircularProgress, LinearProgress } from "@material-ui/core"
//se utilizan los pickers de material ui
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import axios from "axios"
import MarkdownEditor from '../MarkdownEditor/index'
import { MarkdownEditorContext } from '../MarkdownEditor/MarkdownEditorContext'
//crear el dialogo para crear una nueva instancia del blog
interface PostDialogProps { }
const PostDialog: React.FC<PostDialogProps> = () => {
    //hooks for title and location
    const [location, setLocation] = useState('')
    const [title, setTitle] = useState('')
    //loading hook
    const [loading, setLoading] = useState(false)
    //hook for date, set the date of today
    const [date, setDate] = useState(new Date())
    const { active, dispatch: dialogDispatch } = useContext(PostDialogContext)
    const { description, dispatch: descriptionDispatch } = useContext(MarkdownEditorContext)
    // @ts-ignore
    const classes = useStyles()
    const handleClose = () => {
        //set the context into a inactive state
        dialogDispatch({ type: 'set', active: false })
    }
    //handle Date change
    const handleDateChange = (date: Date | null) => {
        setDate(date)
    }
    //handle location change
    const handleLocation = (e) => {
        e.preventDefault()
        setLocation(e.target.value)
    }
    //handle Title change
    const handleTitle = (e) => {
        e.preventDefault()
        setTitle(e.target.value)
    }
    //handle Submit in order to upload it to axios
    const handleSubmit = () => {
        //check that description, location and title is not empty
        if (title.length == 0 || description.length == 0 || location.length == 0) return
        setLoading(true)
        //remember to stringify the date
        let info = {
            title: title,
            date: JSON.stringify(date).replace(/\"/g, ""),
            description: description,
            location: location,
        }
        console.log(info)
        axios.post(`https://reactcurso.herokuapp.com/api/blog/`, info).then(res => {

            setTimeout(() => {
                //if we are in the root directory, the reload all the posts,
                //launch the signal
                setLoading(false)
                if (window.location.pathname == '/') {
                    dialogDispatch({ type: 'submit', submit: true })
                } else {
                    //if not go to the root url
                    window.location.href = '/'
                }

            }, 1000)

        }).catch(err => {
            console.log(err.response.data)

        })

    }
    //do a cleanup after we dissapear the input
    useEffect(() => {
        return () => {
            setLocation('')
            setTitle('')
            descriptionDispatch({ type: 'reset' })
        };
    }, [])
    return (
        <Dialog open={active || false} onClose={handleClose} aria-labelledby="form-dialog-title" maxWidth={'md'} fullWidth={true}>
            {loading && <LinearProgress />}
            <DialogTitle id="form-dialog-title">Agregar Blog</DialogTitle>
            <DialogContent>
                <TextField
                    autoFocus
                    margin="dense"
                    id="title"
                    label="Title"
                    type="text"
                    fullWidth
                    className={classes.textField}
                    value={title}
                    onChange={handleTitle}
                />
                <MarkdownEditor />
                <TextField
                    margin="dense"
                    id="location"
                    label="Location"
                    type="text"
                    fullWidth
                    className={classes.textField}
                    value={location}
                    onChange={handleLocation}
                />
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <KeyboardDatePicker
                        variant="inline"
                        format="MM/dd/yyyy"
                        margin="normal"
                        id="date-picker-inline"
                        label="Date picker inline"
                        value={date}
                        onChange={handleDateChange}
                        KeyboardButtonProps={{
                            'aria-label': 'Date',
                        }}
                    />
                    <KeyboardTimePicker
                        style={{ marginLeft: '2em' }}
                        margin="normal"
                        id="time-picker-inline"
                        label="Time picker"
                        value={date}
                        onChange={handleDateChange}
                        KeyboardButtonProps={{
                            'aria-label': 'Time',
                        }}
                    />
                </MuiPickersUtilsProvider>
            </DialogContent>

            <DialogActions>
                <Button onClick={handleClose} className={classes.button} color="primary">
                    Cancel
                </Button>
                <Button onClick={handleSubmit} className={classes.button} color="primary">
                    Create
                </Button>

            </DialogActions>

        </Dialog>
    )
}

export default PostDialog


