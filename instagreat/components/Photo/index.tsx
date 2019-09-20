//todas las fotografías heredan el siguiente componente
import React from "react"
import { useStyles } from "./styles"
import Moment from 'react-moment'
import Link from 'next/link';
interface Photo {
    image: string
    created: string
    description: string
    id: string
}
// Now we are using an interface to define a bigger interface.
//in this cas all the attributes of photo will be nested isnide the object,
//instead of passing every attribute one by one
interface PhotoProps {
    photo: Photo
}
const Photo: React.FC<PhotoProps> = ({ photo }) => {
    // @ts-ignore
    const classes = useStyles()

    return (
        <div className={classes.photoContainer}>
            <img src={photo.image} className={classes.photo} />
            {photo.description}
            {/* Format date */}
            <Link href="/post/[id]" as={`/post/${photo.id}`}>
                <a>{photo.id}</a>
            </Link>
            <Moment format="YYYY/MM/DD HH:mm">{photo.created}</Moment>
        </div>
    )
}

export default Photo