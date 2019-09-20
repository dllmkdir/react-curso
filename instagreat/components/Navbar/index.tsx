import React from "react"
//importamos navbar
import { useStyles } from "./styles"
import { BottomNavigation, BottomNavigationAction } from "@material-ui/core";
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import FolderIcon from '@material-ui/icons/Folder';
interface NavbarProps { }
const Navbar: React.FC<NavbarProps> = () => {
    // @ts-ignore
    const classes = useStyles()
    const [active, setActive] = React.useState('');
    const handleChange = (event: React.ChangeEvent<{}>, newValue: string) => {
        setActive(newValue);
    }
    return (
        <BottomNavigation value={active} onChange={handleChange} className={classes.root}>
            <BottomNavigationAction label="Recents" value="recents" icon={<RestoreIcon />} />
            <BottomNavigationAction label="Favorites" value="favorites" icon={<FavoriteIcon />} />
            <BottomNavigationAction label="Nearby" value="nearby" icon={<LocationOnIcon />} />
            <BottomNavigationAction label="Folder" value="folder" icon={<FolderIcon />} />
        </BottomNavigation>
    )
}

export default Navbar