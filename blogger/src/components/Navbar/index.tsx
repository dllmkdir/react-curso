import React, { useState, useContext } from "react"
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import LibraryAddIcon from '@material-ui/icons/LibraryAdd';
import CodeRounded from '@material-ui/icons/CodeRounded';
import { useStyles } from "./styles"
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Tooltip from '@material-ui/core/Tooltip';
import { Link } from "gatsby"
import { PostDialogContext } from "../PostDialog/PostDialogContext";
import PostDialog from '../PostDialog/index'
//declaración de componente funcional en typescript
//declaración de barra de navegación
//se declara la interfaz de typescript para mandar la información
interface NavbarProps { }
//se declara en typescript que la función será de tipo Functional Component
const Navbar: React.FC<NavbarProps> = () => {
  //aquí se agrega el contexto del postdialog para crear un nuevo blog
  const { active, dispatch: dialogDispatch } = useContext(PostDialogContext)
  //función necesaria para poder utilizar la app bar 
  //el anchorva a funcinar para localizar de manera correcta el diálogo en la pantalla
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  //funion para hacer toggle del menu,
  const handleMenu = (e) => {
    //en material ui, tienes que implementar esto de manera manual, a diferencia de ant design
    e.preventDefault()
    //el hook puede extraer la propeidad actual y cambiarla dependiendo de su uso
    setAnchorEl(e.currentTarget)
  }
  //funcion para poder ir al curso disponible en github
  const handleGithub = (e) => {
    e.preventDefault()
    window.location.href = 'https://github.com/dllmkdir/react-curso';
  }
  //funcion para manejar la salida de la barr ade navegación:
  const handleClose = (e) => {
    e.preventDefault()
    setAnchorEl(null)
  }
  //se ejecuta el dispatch que abre la ventana
  const handleAddDialog = (e) => {
    e.preventDefault()
    dialogDispatch({ type: 'set', active: true })
  }
  //se utiliza ts ignore para ignorar casos en typescript
  //acontinuación se obtienen las clases del archivo styles
  // @ts-ignore
  const classes = useStyles()
  return (
    //Se utiliza la documentaciónk de material ui para generar la app bar:
    //https://material-ui.com/components/app-bar/
    <AppBar position="fixed" className={classes.root}>
      <Toolbar>

        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
          <Link to="/" className={classes.link}>
            <LibraryBooksIcon />
          </Link>
        </IconButton>


        <Typography variant="h6" className={classes.title}>
          <Link to="/" className={classes.link}>Blogger </Link>
        </Typography>

        <div style={{ position: 'relative', marginRight: '10px' }}>
          <Link to="/about" className={classes.link}>
            <Typography variant="h6" className={classes.title}>
              About
          </Typography>
          </Link>
        </div>
        <div>
          {/* Add post button, important to active the postdialog component */}
          <Tooltip title="Add Post">
            <IconButton
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleAddDialog}
              color="inherit"
            >
              <LibraryAddIcon />
            </IconButton>
          </Tooltip>
          <PostDialog />
          <Tooltip title="Check source code">
            <IconButton
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <CodeRounded />
            </IconButton>
          </Tooltip>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={open}
            onClose={handleClose}
          >
            <MenuItem onClick={handleGithub}>Ir al curso en Github</MenuItem>
            <MenuItem onClick={handleClose}>Cerrar Menú</MenuItem>
          </Menu>
        </div>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar
