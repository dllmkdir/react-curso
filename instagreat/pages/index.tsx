import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Layout from '../components/Layout/index'
import PhotoBox from '../components/PhotoBox/index'
//creamos estructura clásica de typescript
interface HomeProps { }
const useStyles = makeStyles((theme: any) => ({

}))
const Home: React.FC<HomeProps> = () => {
    // @ts-ignore
    const classes = useStyles()
    return (
        <Layout>
            <div>
                Home
            </div>
            <PhotoBox />
        </Layout>
    )
}

export default Home