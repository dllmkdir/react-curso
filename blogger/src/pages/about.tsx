import React from "react"
import Layout from "../components/Layout"
import { Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/styles"
import UserForm from '../components/User/UserForm'
//Se pueden generar las clases dentro de la misma página
const useStyles = makeStyles((theme: any) => ({
  description: {
    padding: '26px',
    textAlign: 'justify'
  },
  container: {
    display: 'block',
    maxWidth: '900px',
    margin: '0 auto',
    padding: '1rem',
  }
}))
//se genera la página about
const About: React.FC = () => {
  // @ts-ignore
  const classes = useStyles()
  return (
    //de todos modos se agrega el Layout

    <Layout>
      <div className={classes.container}>
        <Typography variant="h3" gutterBottom style={{ fontFamily: 'Catamaran', textAlign: 'center', paddingTop: '2rem' }}>
          About Blogger.
      </Typography>
        <Typography variant="subtitle1" gutterBottom className={classes.description}>
          Bienvenido a Blogger ! El entorno abierto para publicar posts!
          Por el momento no contamos con ningún servidor disponible, por lo que no podemos grabar la sesión de nuestros usuarios.
          Sin embargo; hemos aprovechado esta desventaja para crear un servicio de posts anónimos y abiertos,
          A través del sitio podrás ver diferente sposts escritos por usuarios anónimos.
          Suscríbete a nuestro Newsletter.
      </Typography>
        <UserForm />
      </div>
    </Layout>
  )
}

export default About
