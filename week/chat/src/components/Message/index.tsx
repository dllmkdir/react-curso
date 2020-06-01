import React, { useState } from 'react'
import { Typography } from '@material-ui/core'
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
    return (
        <div>
            <img src={message.photoURL} style={{ width: 70, height: 70, borderRadius: 40 }} />
            <Typography>{message.content}</Typography>
            <Typography>{message.user}</Typography>
            <Moment fromNow>{message.published.replace("\"", '')}</Moment>
            <Typography></Typography>
            <hr />
        </div>
    )
}
export default Message