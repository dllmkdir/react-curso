import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import withFirebaseAuth, { WrappedComponentProps } from 'react-with-firebase-auth'
import { firebaseAppAuth, providers } from './firebase/firebase'
import ChatBox from './components/ChatBox';
import { CircularProgress } from '@material-ui/core';

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
    return (<CircularProgress />)
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {
          user
            ? <p>Hello, {user.displayName}</p>
            : <p>Please sign in.</p>
        }
        {
          user
            ? (<div>
              <img src={user.photoURL} style={{ width: 70, height: 70, borderRadius: 40 }} />
              <ChatBox user={user} />
              <button onClick={signOut}>Sign out</button>
            </div>)
            : <button onClick={signInWithGoogle}>Sign in with Google</button>
        }
      </header>
    </div>
  )
}

export default withFirebaseAuth({
  providers,
  firebaseAppAuth,
})(App);
