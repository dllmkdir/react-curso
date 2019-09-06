import { makeStyles } from "@material-ui/core/styles"
export const useStyles = makeStyles((theme: any) => ({
    root:{
        backgroundColor:'#262626',
        color:'white'
    },
    title: {
        flexGrow: 1,
      },
      menuButton: {
        marginRight: theme.spacing(2),
      },
    link:{
        color:'white',
        textDecoration:'none',
        transition:'0.5s all',
        '&:hover':{
            color:'#4392F1'
        }
    }
}))