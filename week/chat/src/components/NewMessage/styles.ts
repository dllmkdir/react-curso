import { makeStyles } from "@material-ui/core/styles"
export const useStyles = makeStyles((theme) => ({
    input: {
        fontFamily: 'Montserrat !important',
        position: 'relative',
        width: 'calc(100% - 80px)',
        margin: '10px auto !important',
    },
    inputProp: {
        padding: '15px 25px 15px !important',
    },
}))