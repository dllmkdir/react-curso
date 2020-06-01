import React, { useState } from 'react'
import Button from '@material-ui/core/Button'
import { useStyles } from './styles'
import { db } from '../../firebase/firebase'
import MessageType from '../Message'
import { createMessage } from '../../firebase/utils'
const NewMessage = ({ user }) => {
    const [msg, setMsg] = useState('')
    const handleMsg = (e: any) => {
        e.preventDefault()
        setMsg(e.target.value)
    }
    const sendMessage = async (e: any) => {
        e.preventDefault()
        const msgTemp = {
            content: msg,
            user: user.displayName,
            published: JSON.stringify(new Date()),
            photoURL: user.photoURL,
        }
        await createMessage(msgTemp)

    }
    return (
        <div>
            <input onChange={handleMsg} value={msg} />
            <Button onClick={sendMessage}>Send</Button>
        </div>
    )
}
export default NewMessage