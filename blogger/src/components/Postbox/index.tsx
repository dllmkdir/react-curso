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
import { Paper } from "@material-ui/core";
import axios from "axios"
//se declara el contenedor en el cual se va a tener toda la información de todos los posts
//es importante conocer que estos posts serán accedidos a través de axios
interface PostboxProps{}
//se declara en typescript que la función será de tipo Functional Component
const Postbox: React.FC<PostboxProps> = () => {
// @ts-ignore
const  classes = useStyles()
//hook for posts
const [blog, setBlog] = useState([])
const [loading, setLoading] = useState(false)
//at startup, get all the posts
useEffect(()=>{
    axios
      .get(`https://reactcurso.herokuapp.com/api/blog/`)
      .then(res => {
          console.log(res.data)
          setBlog(res.data)
          //do something with the incoming response,
      })
},[])
  return (
      //Se utiliza la documentaciónk de material ui para generar la app bar:
      //https://material-ui.com/components/app-bar/
    <Paper className={classes.paper}>
        {blog && blog.map((post, i)=>(
            // Set the key with the i attribute
            <div key={i}>{post.title}</div>
        ))}
    </Paper>
  )
}

export default Postbox
