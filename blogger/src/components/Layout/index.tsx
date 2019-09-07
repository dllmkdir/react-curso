import React from "react"
//importamos navbar
import Navbar from '../Navbar/index'
import { useStyles } from "./styles"
//react helmet: nos ayuda a definir propiedades del cabezal o <head> del documento
import { Helmet } from "react-helmet"
import { UserProvider } from '../User/UserContext'
import { PostDialogProvider } from '../PostDialog/PostDialogContext'
import { MarkdownEditorProvider } from '../MarkdownEditor/MarkdownEditorContext'
interface LayoutProps { }
const Layout: React.FC<LayoutProps> = ({ children }) => {
  // @ts-ignore
  const classes = useStyles()
  return (
    <MarkdownEditorProvider>
      <PostDialogProvider>
        <UserProvider>
          <div className={classes.root}>

            <Helmet
              style={[
                {
                  cssText: `
            body {
                height:100%;
                margin:0;
                background-color:#F5F5F5;
            }
        `,
                },
              ]}>
              <link href="https://fonts.googleapis.com/css?family=Catamaran&display=swap" rel="stylesheet"></link>
            </Helmet>


            <Navbar />
            {children}
          </div>
        </UserProvider>
      </PostDialogProvider>
    </MarkdownEditorProvider>
  )
}

export default Layout


