import React, { useContext, useState, useEffect } from "react"
import Layout from "../components/Layout"
import Postbox from '../components/Postbox/index'
import AddIcon from '@material-ui/icons/Add';
import { Typography, Tooltip, Fab } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import { PostDialogContext } from "../components/PostDialog/PostDialogContext";
//el index de nuestra página principal
//gatsby autogenera la ruta dependiendo del nombre del archivo
const useStyles = makeStyles((theme: any) => ({
  absolute: {
    position: 'fixed',
    right: '2em',
    bottom: '2em',
    backgroundColor: '#45E3D1',
    '&:hover': {
      backgroundColor: '#00D9C0',
    },
  },
}))
//index es para home
const Index: React.FC = () => {
  const [name, setName] = useState('')

  // @ts-ignore
  const classes = useStyles()

  useEffect(() => {
    let nameTemp: string = localStorage.getItem('name')
    console.log(nameTemp)
    if (nameTemp && nameTemp.length > 0) {
      setName(nameTemp)
    }
  }, [])
  return (
    // Creación de Layout para tener todo el contenido dentro de una instancia
    <Layout>
      <Typography variant="h3" gutterBottom style={{ fontFamily: 'Catamaran', textAlign: 'center', paddingTop: '3rem', color: '#1A1423' }}>
        {name ? `Welcome Again, ${name}` :
          "Blogger: The Open Blog."
        }
      </Typography>
      <Postbox />
      <AddFav />
    </Layout>
  )
}
//Add fab button, we cannot share context in the layout tag, because it does not cover the whole scope
//here we can use the context freely
const AddFav: React.FC = () => {
  // @ts-ignore
  const classes = useStyles()
  //aquí se agrega el contexto del postdialog para crear un nuevo blog
  const { active, dispatch: dialogDispatch } = useContext(PostDialogContext)
  //handle click and add  a new dialog window
  const handleClick = (e) => {
    e.preventDefault()
    dialogDispatch({ type: 'set', active: true })
  }
  return (
    <React.Fragment>
      {/* Alternative way to add a blog through a fab button */}
      <Tooltip title="Add Blog" aria-label="add">
        <Fab color="secondary" onClick={handleClick} className={classes.absolute}>
          <AddIcon />
        </Fab>
      </Tooltip>
    </React.Fragment>
  )
}
export default Index
