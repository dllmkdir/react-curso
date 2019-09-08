import { makeStyles } from "@material-ui/core/styles"
export const useStyles = makeStyles((theme: any) => ({
    root: {},
    paper: {
        margin: '32px',
    },
    textField: {
        marginBottom: '1em',
        '& label.Mui-focused': {
            color: '#00D9C0',
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: '#1A1423',
        },

    },
    progress: {
        color: '#00D9C0',
        margin: '0 auto',
    },
    button: {
        color: '#00D9C0'
    }
}))