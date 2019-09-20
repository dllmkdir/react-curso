//se debe crear la caja que contiene a todas las instancias de fotografías
import React, { useEffect } from "react"
import { useStyles } from "./styles"
import axios from "axios"
import Photo from '../Photo/index'
interface PhotoBoxProps { }
const PhotoBox: React.FC<PhotoBoxProps> = () => {
    // @ts-ignore
    const classes = useStyles()
    const [gallery, setGallery] = React.useState([])
    //at startup, get all the photos using axios
    useEffect(() => {
        axios
            .get(`https://reactcurso.herokuapp.com/api/gallery/`)
            .then(res => {
                //Set timeoute to wait a little more for the data
                setTimeout(function () {
                    console.log(res.data)
                    //   Consume data with a 1 sec delay
                    setGallery(res.data)
                }, 1000)

                //do something with the incoming response,
            })
    }, [])
    return (
        <div className={classes.container}>
            {gallery && gallery.map((photo, i) => (
                <Photo photo={photo} key={i} />
            ))}
        </div>
    )
}

export default PhotoBox