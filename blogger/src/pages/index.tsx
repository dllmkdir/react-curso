import React, { useContext, useState, useEffect } from "react"
import Layout from "../components/Layout"
import Postbox from '../components/Postbox/index'
import { Typography } from "@material-ui/core"
import { UserContext } from "../components/User/UserContext"
//el index de nuestra página principal
//gatsby autogenera la ruta dependiendo del nombre del archivo
//index es para home
const Index: React.FC = () => {
  const [name, setName] = useState('')
  //in advance utilitis, get the context of the username and render it on screen
  //const { name, dispatch } = useContext(UserContext)
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
      <Typography variant="h3" gutterBottom style={{ fontFamily: 'Catamaran', textAlign: 'center', paddingTop: '2rem' }}>
        {name ? `Welcome Again, ${name}` :
          "Blogger: The Open Blog."
        }
      </Typography>
      <Postbox />
    </Layout>
  )
}

export default Index
