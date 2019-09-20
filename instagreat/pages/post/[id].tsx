// Extract post using next router url parameters
//the id will be extracted from the page
import React, { useEffect, useState } from "react"
import { useRouter } from 'next/router';
import axios from "axios"
import Layout from '../../components/Layout/index'
import Photo from '../../components/Photo/index'
//set photo props for typescript integration
interface PhotoProps {
    image: string
    created: string
    description: string
    id: string
}

interface PostProps { }
const Post: React.FC<PostProps> = () => {
    const router = useRouter()
    //React state
    const [photo, setPhoto] = useState<PhotoProps>(null)
    //the id can be extracted in next using router.query.id
    useEffect(() => {
        axios
            .get(`https://reactcurso.herokuapp.com/api/gallery/${router.query.id}/`)
            .then(res => {
                //Set timeoute to wait a little more for the data

                //   Consume data with a 1 sec delay
                setPhoto(res.data)

                //do something with the incoming response,
            })
    }, [])

    return (
        <Layout>
            <div>
                Extract this post
            {router.query.id}
                {photo && <Photo photo={photo} />}
            </div>
        </Layout>
    )
}

export default Post