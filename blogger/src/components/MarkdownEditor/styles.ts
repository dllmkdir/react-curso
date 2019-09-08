import { makeStyles } from "@material-ui/core/styles"
export const useStyles = makeStyles((theme: any) => ({
    box: {
        display: 'flex',
        justifyContent: 'space-between'
    },
    comparisonBox: {
        width: '50%',

    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: '90%',
        '& label.Mui-focused': {
            color: '#00D9C0',
        },
        '& .MuiOutlinedInput-root': {
            '&.Mui-focused fieldset': {
                borderColor: '#1A1423',
            },
        },
    },
    description: {
        fontFamily: 'Roboto',
        border: 'solid #bababa 1px',
        borderRadius: '3px',
        padding: '0.5em',
        height: '10.7rem',
        overflow: 'scroll'
    }
}))