import React from 'react'

// eslint-disable-next-line
export const SignOutContext = React.createContext({})

const SignOutProvider: React.FC<{ signOut: any }> = ({ signOut, children }) => (
    <SignOutContext.Provider value={signOut}>{children}</SignOutContext.Provider>
)

export default SignOutProvider
