import { makeStyles } from "@material-ui/core/styles"
export const useStyles = makeStyles((theme: any) => ({
    textField: {
        '& label.Mui-focused': {
            color: '#00D9C0',
        },
        '& .MuiOutlinedInput-root': {
            '&.Mui-focused fieldset': {
                borderColor: '#1A1423',
            },
        },
        margin: '1em',
        width: '21rem'
    },
    button: {
        backgroundColor: '#00D9C0',
        padding: '0.3em 2em',
        height: '3.5rem',
        margin: '1.1em',
        '&:hover': {
            backgroundColor: '#45E3D1'
        }
    },
    close: {
        padding: theme.spacing(0.5),
    },
}))