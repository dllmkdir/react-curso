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
        width: '90%'
    },
    description: {
        fontFamily: 'Roboto'
    }
}))