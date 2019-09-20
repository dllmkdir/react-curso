import React from "react"
//importamos navbar
import { useStyles } from "./styles"
import Navbar from '../Navbar/index'
interface LayoutProps { }
const Layout: React.FC<LayoutProps> = ({ children }) => {
    // @ts-ignore
    const classes = useStyles()
    return (
        <div>
            {children}
            <Navbar />
        </div>
    )
}

export default Layout