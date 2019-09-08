import React, { useEffect, useState, useContext } from "react"
import { useStyles } from "./styles"
import { CircularProgress } from "@material-ui/core";
import axios from "axios"
import Post from '../Post/index'
import { PostDialogContext } from "../PostDialog/PostDialogContext";
//se declara el contenedor en el cual se va a tener toda la información de todos los posts
//es importante conocer que estos posts serán accedidos a través de axios
interface PostboxProps { }
//se declara en typescript que la función será de tipo Functional Component
const Postbox: React.FC<PostboxProps> = () => {
  // @ts-ignore
  const classes = useStyles()
  const { submit, dispatch: dialogDispatch } = useContext(PostDialogContext)
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
  //check if use Effect is true, then reload the page and set the submit value to false
  useEffect(() => {
    if (submit) {
      dialogDispatch({ type: 'set', active: false })
      setBlog([])
    }
  }, [submit])
  //check if the blog has beeen emptied, then retrieve all the info again
  useEffect(() => {
    if (submit && blog.length == 0 && loaded) {
      setLoaded(false)
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
    }
  }, [submit, blog])
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
