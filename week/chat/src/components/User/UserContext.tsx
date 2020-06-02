import React from 'react'

// eslint-disable-next-line
export const UserContext = React.createContext<firebase.User>({} as firebase.User)

const UserProvider: React.FC<{ user: firebase.User }> = ({ user, children }) => (
    <UserContext.Provider value={user}>{children}</UserContext.Provider>
)

export default UserProvider
