import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Layout from '../components/Layout/index'
//creamos estructura clásica de typescript
interface ChatProps { }
const useStyles = makeStyles((theme: any) => ({

}))
const Chat: React.FC<ChatProps> = () => {
    // @ts-ignore
    const classes = useStyles()
    return (
        <Layout>
            <div>
                Chat
            </div>
        </Layout>
    )
}

export default Chat