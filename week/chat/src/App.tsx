import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css'
import withFirebaseAuth, { WrappedComponentProps } from 'react-with-firebase-auth'
import { firebaseAppAuth, providers } from './firebase/firebase'
import ChatBox from './components/ChatBox';
import { CircularProgress, Paper, Grid, Typography, Button } from '@material-ui/core';
import UserProvider from './components/User/UserContext';
import Layout from './components/Layout';
import SignOutProvider from './components/User/SignOutContext';
import ChatIcon from '@material-ui/icons/Chat';
import googleIco from '../src/static/googleIco.svg'
const App = ({
  user,
  signOut,
  signInWithGoogle,
  loading
}: WrappedComponentProps) => {
  useEffect(() => {
    console.log(user)
    console.log(loading)
  }, [user, loading])

  if (loading) {
    return (
      <Grid container justify="center" alignItems="center" style={{ width: '100vw', height: '100vh', backgroundColor: '#fafafa' }}>
        <CircularProgress style={{ color: '#424242', fontSize: 20 }} />
      </Grid>)
  }
  if (!user) {
    return (
      <Grid container justify="center" alignItems="center" style={{ width: '100vw', height: '100vh', backgroundColor: '#fafafa' }}>
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
          <Button onClick={signInWithGoogle} variant="outlined" style={{ textTransform: 'none', fontFamily: 'Montserrat', color: '#424242' }}>
            <img style={{
              height: 15,
              paddingRight: 5,
              position: 'relative' as 'relative',
            }} src={googleIco} />
            Sign In with Google
            </Button>
        </Paper>
      </Grid>
    )
  }
  return (
    <UserProvider user={user}>
      <SignOutProvider signOut={{ signOut }}>
        <Layout>
          <ChatBox />
        </Layout>
      </SignOutProvider>
    </UserProvider>
  )
}

export default withFirebaseAuth({
  providers,
  firebaseAppAuth,
})(App);
