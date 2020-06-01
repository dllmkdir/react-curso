import React, { useState, useEffect } from 'react'
import Message from '../Message'
import { db } from '../../firebase/firebase'
import { useStyles } from './styles'
import NewMessage from '../NewMessage'
import { getMessages, databaseListener } from '../../firebase/utils'
const ChatBox = ({ user }) => {
    const [msgs, setMsgs] = useState([])
    useEffect(() => {
        const callMsgDb = async () => {
            // let msgList = await getMessages()
            // // sort by date
            // msgList.sort((a, b) => {
            //     const firstDate = new Date(a.published.replace("\"", ''))
            //     const secondDate = new Date(b.published.replace("\"", ''))
            //     return firstDate > secondDate ? 1 : -1
            // })
            // setMsgs(msgList)
        }
        const triggerNewMsgs = async () => {
            databaseListener((newMsg) => {
                setMsgs(l => [...l, newMsg])
            })
        }
        callMsgDb()
        triggerNewMsgs()
    }, [])
    return (
        <div>
            {msgs && msgs.map((msg, key) => (
                <Message key={key} message={msg} />
            ))}
            <NewMessage user={user} />
        </div>
    )
}
export default ChatBox