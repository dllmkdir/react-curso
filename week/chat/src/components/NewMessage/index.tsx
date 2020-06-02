import React, { useState, useContext } from 'react'
import Button from '@material-ui/core/Button'
import { useStyles } from './styles'
import { db } from '../../firebase/firebase'
import MessageType from '../Message'
import { createMessage } from '../../firebase/utils'
import { UserContext } from '../User/UserContext'
import { FilledInput, IconButton, Grid, CircularProgress } from '@material-ui/core'
import SendIcon from '@material-ui/icons/Send';
const NewMessage = () => {
    const user = useContext(UserContext)
    const [msg, setMsg] = useState('')
    const [loading, setLoading] = useState(false)
    const handleMsg = (e: any) => {
        e.preventDefault()
        setMsg(e.target.value)
    }
    const sendMessage = async (e: any) => {
        setLoading(true)
        e.preventDefault()
        const msgTemp = {
            content: msg,
            user: user.displayName,
            published: JSON.stringify(new Date()),
            photoURL: user.photoURL,
        }
        await createMessage(msgTemp)
        setMsg('')
        setLoading(false)

    }
    // @ts-ignore
    const classes = useStyles()
    return (
        <Grid container alignItems="center" style={{ maxWidth: '600px' }}>
            <FilledInput
                disableUnderline={true}
                className={classes.input} value={msg} onChange={handleMsg} type="text"
                inputProps={{
                    className: classes.inputProp
                }}
            />
            <IconButton onClick={sendMessage} style={{ marginLeft: '10px' }}>
                {loading ?
                    <CircularProgress size={20} style={{ color: '#424242' }} />
                    :
                    <SendIcon />
                }


            </IconButton>
        </Grid>
    )
}
export default NewMessage