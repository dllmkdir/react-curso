import { makeStyles } from "@material-ui/core/styles"
export const useStyles = makeStyles((theme: any) => ({
    photo: {
        maxWidth: '100px',
        maxHeight: '100px',
        borderRadius: '10px',
        objectFit: 'cover'
    }, photoContainer: {
        display: 'block'
    }
}))