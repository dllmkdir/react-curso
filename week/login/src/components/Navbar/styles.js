import { makeStyles, Theme } from "@material-ui/core/styles"

export const useStyles = makeStyles((theme) => ({
    fullBox: {
        color: 'blue',
        letterSpacing: '3px'
    },
    text: {
        fontSize: '50px',
        color: 'white'
    },
    menuButton: {
        marginRight: '12px',
        color: 'white'
    },
    menuIcon: {
        color: 'white'
    },
    title: {
        margin: '12px',
        color: 'white',
        textDecoration: 'none !important',
        fontFamily: 'Montserrat'
    },
    appBar: {
        backgroundColor: '#005289 !important'
    },
    root: {
        backgroundColor: '#005289'
    }
}))