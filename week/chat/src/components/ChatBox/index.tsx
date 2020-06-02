import React, { useState, useEffect } from 'react'
import Message from '../Message'
import { db } from '../../firebase/firebase'
import { useStyles } from './styles'
import NewMessage from '../NewMessage'
import { getMessages, databaseListener } from '../../firebase/utils'
import { Grid, CircularProgress, Paper, Typography } from '@material-ui/core'
import ChatIcon from '@material-ui/icons/Chat';
const ChatBox = () => {
    const [msgs, setMsgs] = useState([])
    const [loaded, setLoaded] = useState(false)
    useEffect(() => {
        const callMsgDb = async () => {
            let msgList = await getMessages()
            // sort by date
            msgList.sort((a, b) => {
                const firstDate = new Date(a.published.replace(/\"/g, ''))
                const secondDate = new Date(b.published.replace(/\"/g, ''))
                return firstDate > secondDate ? 1 : -1
            })
            setMsgs(msgList)
        }
        const triggerNewMsgs = async () => {
            databaseListener((newMsg) => {

                setMsgs(l => [...l, newMsg])


            })
        }
        callMsgDb()
        triggerNewMsgs()
    }, [])
    useEffect(() => {
        if (msgs) {
            setLoaded(true)
            if (msgs.length > 0) {
                let objDiv = document.getElementById("chat-box");
                console.log(objDiv)
                objDiv.scrollTop = objDiv.scrollHeight;
            }
        }
    }, [msgs])
    if (!loaded) {
        return (
            <Grid container justify="center" alignItems="center" style={{ width: '100vw', height: 'calc(100vh - 135px)', backgroundColor: '#fafafa', maxWidth: '600px', margin: '0 auto' }}>
                <CircularProgress style={{ color: '#424242', fontSize: 20 }} />
            </Grid>
        )
    }
    return (
        <div>
            {(msgs && msgs.length > 0) &&
                <Grid container id="chat-box" justify="center" alignItems="center" style={{ width: '100vw', height: 'calc(100vh - 135px)', backgroundColor: '#fafafa', maxWidth: '600px', margin: '0 auto', overflow: 'scroll' }}>
                    <Grid container justify="flex-end" style={{ width: '100vw', flexDirection: 'column' }}>
                        {msgs && msgs.map((msg, key) => (
                            <Message key={key} message={msg} />
                        ))}
                    </Grid>



                </Grid>
            }
            {(msgs && msgs.length === 0) &&
                <Grid container justify="center" alignItems="center" style={{ width: '100vw', height: 'calc(100vh - 135px)', backgroundColor: '#fafafa', maxWidth: '600px', margin: '0 auto' }}>
                    <Paper style={{
                        boxShadow: 'none',
                        backgroundColor: 'transparent',
                        textAlign: 'center',
                        padding: '20px',
                    }}>
                        <ChatIcon style={{ fontSize: 70, margin: 10, color: '#424242' }} />
                        <Typography style={{ fontFamily: 'Montserrat', color: '#424242', marginBottom: 10 }} gutterBottom>
                            Start the conversation!
                    </Typography>
                    </Paper>
                </Grid>
            }
            <Grid container justify="center">
                <NewMessage />
            </Grid>
        </div>
    )
}
export default ChatBox