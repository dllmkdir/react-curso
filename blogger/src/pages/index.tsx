import React from "react"
import Layout from "../components/Layout"
import Postbox from '../components/Postbox/index'
import { Typography } from "@material-ui/core"
//el index de nuestra página principal
//gatsby autogenera la ruta dependiendo del nombre del archivo
//index es para home
const Index = () => {
  return (
    // Creación de Layout para tener todo el contenido dentro de una instancia
    <Layout>
      <Typography variant="h3" gutterBottom style={{fontFamily:'Catamaran', textAlign:'center', paddingTop:'2rem'}}>
        Blogger: The Open Blog.
      </Typography>
      <Postbox/>
    </Layout>
  )
}

export default Index
