import { makeStyles } from "@material-ui/core/styles"
export const useStyles = makeStyles((theme: any) => ({
    root: {},
    paper: {
        margin: '32px',
    },
    progress: {
        color: 'black',
        margin: '0 auto',
    },
    container: {
        display: 'block',
        maxWidth: '900px',
        margin: '0 auto',
        padding: '1rem',
    },
    loadBox: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '70vh',

    }
}))