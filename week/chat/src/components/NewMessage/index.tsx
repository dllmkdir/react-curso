import React, { useState, useContext,useEffect } from 'react'
import { useStyles } from './styles'
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
    useEffect(() => {
        // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
        let vh = window.innerHeight * 0.01
        // Then we set the value in the --vh custom property to the root of the document
        document.documentElement.style.setProperty("--vh", `${vh}px`)
        const resizeEvent = () => {
          // We execute the same script as before
          let vh = window.innerHeight * 0.01
          document.documentElement.style.setProperty("--vh", `${vh}px`)
        }
        // We listen to the resize event
        window.addEventListener("resize", resizeEvent)
        return () => {
          window.removeEventListener("resize", resizeEvent)
        }
      }, [])
    const sendMessage = async (e: any) => {
        if(!msg) return
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
    const handleEnter=(e)=>{
        if(e.key==='Enter'){
            sendMessage(e)
        }
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
                onKeyUp={handleEnter}
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