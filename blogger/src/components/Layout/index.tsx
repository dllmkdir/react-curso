import React from "react"
//importamos navbar
import Navbar from '../Navbar/index'
import { useStyles } from "./styles"
//react helmet: nos ayuda a definir propiedades del cabezal o <head> del documento
import { Helmet } from "react-helmet"
interface LayoutProps{}
const Layout: React.FC<LayoutProps> = ({ children }) => {
  // @ts-ignore
  const classes = useStyles()
  return(
  <div className={classes.root}>
    <Helmet
        style={[
          {
            cssText: `
            body {
                height:100%;
                margin:0;
                background-color:white;
            }
        `,
          },
        ]}>
          <link href="https://fonts.googleapis.com/css?family=Catamaran&display=swap" rel="stylesheet"></link>
        </Helmet>

        
    <Navbar/>
    {children}
  </div>
  )
}

export default Layout


