import React from "react"
import { useStyles } from "./styles"
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { Typography, Button } from "@material-ui/core";
import Moment from 'react-moment';
import ReactMarkdown from 'react-markdown'
interface LayoutProps {
    title: string
    description: string
    date: string
    location: string
}
const Layout: React.FC<LayoutProps> = ({ title, description, date, location }) => {
    // @ts-ignore
    const classes = useStyles()
    return (
        <Card className={classes.card}>
            <CardContent>

                <Typography className={classes.title} variant="h5" component="h2">
                    {title}
                </Typography>
                <Typography className={classes.location} color="textSecondary">
                    {location}
                </Typography>
                <ReactMarkdown source={description} className={classes.description} />
                <Typography className={classes.date} color="textSecondary" >
                    <Moment format="YYYY/MM/DD HH:mm">{date}</Moment>
                </Typography>
            </CardContent>
            <CardActions>
            </CardActions>
        </Card>
    )
}

export default Layout


