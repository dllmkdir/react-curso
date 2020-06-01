import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import LoginBox from '../components/LoginBox'
import { makeStyles } from "@material-ui/core/styles"
import LoginBG from '../static/loginBG.png'
export const useStyles = makeStyles((theme) => ({
    loginScreen: {
        display: 'flex',
        width: '100vw',
        height: '100vh',
        padding: '5rem',
        margin: '0',
        backgroundImage: `url(${LoginBG})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        justifyContent: 'center',
        backgroundPosition: 'center',
        alignItems: 'center'
    },
    loginImg: {

    },
    loginLogo: {
        width: '300px',
        height: 'auto',
        margin: '0 auto'
    }
}))
const Login = () => {
    const classes = useStyles()
    return (<div>
        <Navbar title={'Login'} />
        <div className={classes.loginScreen}>
            <LoginBox />
        </div>
    </div>)

}
export default Login