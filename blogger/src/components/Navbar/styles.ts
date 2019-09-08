import { makeStyles } from "@material-ui/core/styles"
export const useStyles = makeStyles((theme: any) => ({
    root: {
        backgroundColor: '#1A1423',
        color: 'white'
    },
    title: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    link: {
        color: 'white',
        textDecoration: 'none',
        transition: '0.5s all',
        '&:hover': {
            color: '#5BC0EB'
        }
    },
    scroller: {
        position: 'fixed',
        bottom: theme.spacing(2),
        right: theme.spacing(2),
    },
}))