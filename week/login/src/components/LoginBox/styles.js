import { makeStyles } from "@material-ui/core/styles"
export const useStyles = makeStyles((theme) => ({
    card: {
        position: 'relative',
        width: '450px',
        padding: '1rem',
        display: 'block'
    },
    userIcon: {
        color: 'rgba(0, 0, 0, 0.54)'
    },
    googleIco: {
        height: '20px',
        padding: '0 10px',
        position: 'relative',
        top: '4px'
    },
    input: {
        fontFamily: 'Montserrat !important',
        position: 'relative',
        width: '320px',
        display: 'flex !important',
        margin: '10px auto !important',
    },
    inputProp: {
        padding: '15px 25px 15px !important'
    },
    button: {
        borderRadius: '12px',
        width: '320px',
        padding: '0.5rem',
        textAlign: 'center',
        display: 'block',
        margin: '0 auto',
        color: 'white',
        fontFamily: 'Montserrat',
        fontSize: '1rem',
        backgroundColor: '#005289',
        marginBottom: '20px',
    },
    passwordOptions: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '320px',
        margin: '10px auto',
        marginBottom: '30px',
        fontFamily: 'Montserrat',
        fontSize: '0.85rem'
    },
    checkbox: {
        padding: '0  !important'
    },
    label: {
        fontFamily: 'Montserrat',
        fontSize: '1rem',
        width: '320px',
        margin: '10px auto',
        marginTop: '20px',
        color: 'rgba(0, 0, 0, 0.54)'
    },
    link: {
        textDecoration: 'none',
        color: '#005289'
    }
}))