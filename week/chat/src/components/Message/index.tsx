import React, { useState } from 'react'
import { Typography, Paper, Grid } from '@material-ui/core'
import { useStyles } from './styles'
import Moment from 'react-moment';

export interface MessageType {
    content: string
    user: string
    published: string,
    photoURL: string
}
const Message = ({ message }: { message: MessageType }) => {
    const [date, setDate] = useState(null)
    const [msg, setMsg] = useState('')
    const handleMsg = (e: any) => {
        e.preventDefault()
        setMsg(e.target.value)
    }
    // @ts-ignore
    const classes = useStyles()
    return (
        <Paper style={{ padding: 20, marginTop: 10, boxShadow: 'none' }}>
            <Grid container alignItems="center">
                <img src={message.photoURL} style={{ width: 25, height: 25, borderRadius: 25 }} />
                <Typography className={classes.text} style={{ marginLeft: 10, fontSize: 12 }}>{message.user}</Typography>

                <Typography className={classes.text} style={{ marginLeft: 10, fontSize: 12 }}>
                    <Moment fromNow>{message.published.replace("\"", '')}</Moment>
                </Typography>
            </Grid>
            <Grid style={{ marginTop: 10 }}>
                <Typography className={classes.text}>{message.content}</Typography>
            </Grid>
        </Paper>
    )
}
export default Message