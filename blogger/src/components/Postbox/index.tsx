import React, { useEffect, useState } from "react"
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { useStyles } from "./styles"
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { Paper, CircularProgress } from "@material-ui/core";
import axios from "axios"
import Post from '../Post/index'
//se declara el contenedor en el cual se va a tener toda la información de todos los posts
//es importante conocer que estos posts serán accedidos a través de axios
interface PostboxProps { }
//se declara en typescript que la función será de tipo Functional Component
const Postbox: React.FC<PostboxProps> = () => {
  // @ts-ignore
  const classes = useStyles()
  //hook for posts
  const [blog, setBlog] = useState([])
  const [loaded, setLoaded] = useState(false)
  //at startup, get all the posts
  useEffect(() => {
    axios
      .get(`https://reactcurso.herokuapp.com/api/blog/`)
      .then(res => {
        //Set timeoute to wait a little more for the data
        setTimeout(function () {
          console.log(res.data)
          setBlog(res.data)
        }, 1000)

        //do something with the incoming response,
      })
  }, [])
  useEffect(() => {
    //if the blogs have been added,
    //then set loaded to true
    if (blog && blog.length > 0) {
      setLoaded(true)
    }
  }, [blog])
  return (
    //Se utiliza la documentaciónk de material ui para generar la app bar:
    //https://material-ui.com/components/app-bar/
    <div className={classes.container}>
      {blog && blog.map((post, i) => (
        // Set the key with the i attribute
        <Post title={post.title} description={post.description} date={post.date} location={post.location} key={i} />
      ))}
      {!loaded && (<div className={classes.loadBox}><CircularProgress className={classes.progress} /></div>)}
    </div>
  )
}

export default Postbox
