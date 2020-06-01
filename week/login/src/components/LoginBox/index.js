import React, { useState } from 'react'
import Card from '@material-ui/core/Card'
import TextField from '@material-ui/core/TextField'
import { useStyles } from './styles'
import InputAdornment from '@material-ui/core/InputAdornment'
import IconButton from '@material-ui/core/IconButton'
import Input from '@material-ui/core/Input'
import Visibility from '@material-ui/icons/Visibility'
import VisibilityOff from '@material-ui/icons/VisibilityOff'
import FilledInput from '@material-ui/core/FilledInput'
import Button from '@material-ui/core/Button'
import PersonIcon from '@material-ui/icons/Person';
import Checkbox from '@material-ui/core/Checkbox';
import { InputLabel } from '@material-ui/core'
// Login box for user registering
const LoginBox = () => {
    const [count, setCount] = useState(0)
    // hook for username
    const [username, setUsername] = useState('')
    // react hook for password, its secret
    const [password, setPassword] = useState('')
    // hook to show password visibility
    const [passwordVisible, setPasswordVisible] = useState(false)

    // Import classes
    // @ts-ignore
    const classes = useStyles()

    // handle the inputs
    const handleUsername = (e) => {
        e.preventDefault()
        setUsername(e.target.value)
    }
    const handleClick = (e) => {
        e.preventDefault()
        setCount(c => c + 1)
    }

    const handlePassword = (e) => {
        e.preventDefault()
        setPassword(e.target.value)
    }
    const handlePasswordVisible = (e) => {
        e.preventDefault()
        setPasswordVisible((flag) => !flag)
    }
    // Do login with this function
    const doLogin = (e) => {
        e.preventDefault()
        console.log('Do an external Login !')
    }
    return (
        <Card className={classes.card}>
            <div className={classes.passwordOptions} style={{ alignItems: 'center' }}>
                <h1 className={classes.label} style={{ fontSize: '24px', fontWeight: 600, color: 'black' }}>Sign In</h1>
                <a className={classes.link} style={{ fontSize: '16px', fontWeight: 400, }} href="#">Register</a>
            </div>

            <p className={classes.label}>Username</p>
            <FilledInput
                disableUnderline={true}
                className={classes.input} value={username} onChange={handleUsername} type="text"
                startAdornment={
                    <InputAdornment position="start">
                        <PersonIcon className={classes.userIcon} />
                    </InputAdornment>
                }
                inputProps={{
                    className: classes.inputProp
                }}
            />
            <p className={classes.label} >Password</p>
            <FilledInput
                className={classes.input}
                value={password}
                type={passwordVisible ? 'text' : 'password'}
                onChange={handlePassword}
                endAdornment={
                    <InputAdornment position="end">
                        <IconButton aria-label="toggle password visibility" onClick={handlePasswordVisible}>
                            {passwordVisible ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                    </InputAdornment>
                }
                inputProps={{
                    className: classes.inputProp
                }}
            />
            <div className={classes.passwordOptions}>
                <div>
                    <Checkbox
                        className={classes.checkbox}
                        defaultChecked
                        value="secondary"
                        color="primary"
                        inputProps={{ 'aria-label': 'secondary checkbox' }}
                    /> Remember me
				</div>

                <a className={classes.link} href="#">Forgot Password?</a>
            </div>
            <Button className={classes.button} variant="contained" color="primary" onClick={doLogin} >
                Login
			</Button>
            <Button
                onClick={handleClick}
                className={classes.button} style={{ color: '#005289', backgroundColor: 'inherit' }} variant="outlined" color="primary">
                {`Clicks: ${count}`}
            </Button>

        </Card>
    )
}

export default LoginBox