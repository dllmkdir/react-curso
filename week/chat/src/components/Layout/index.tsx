import React from 'react'
import Navbar from '../Navbar'
import { useStyles } from './styles'
const Layout = ({ children }) => {
    return (
        <>
            <Navbar />
            {children}
        </>
    )
}
export default Layout