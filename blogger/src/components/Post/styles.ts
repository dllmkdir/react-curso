import { makeStyles } from "@material-ui/core/styles"
export const useStyles = makeStyles((theme: any) => ({
    card: {
        minWidth: 275,
        margin: '2.5rem 0',
    },
    title: {
        marginBottom: '1rem'
    },
    description: {
        fontFamily: 'Roboto',

    },
    location: {},
    date: {
        textAlign: 'right',
        fontSize: '14px'
    }
}))