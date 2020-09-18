import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MobilRightMenuSlider from '@material-ui/core/Drawer';
import {
AppBar,
Toolbar,
ListItem,
IconButton,
ListItemIcon,
ListItemText,
Avatar,
Divider,
List,
Typography,
Box
} from "@material-ui/core";

import {
ArrowBack,
AssignmentInd,
Home,
Apps,
ContactMail
} from "@material-ui/icons";
import avatar from "../Components/IMG/Avater.png";


// CSS Styles
const useStyles = makeStyles(theme=>({
    menuSliderContainer: {
        width: 250,
        background: "#511",
        height: "100%"
    },
    avatar: {
        display: "block",
        margin: ".5rem auto",
        width: theme.spacing(13),
        height: theme.spacing(20)
    },
    listItem: {
        color: "tan"
    },
    typography: {
        display: "inline-block"
    }
}));

const menuItems = [
    {
        listIcon: <Home/>,
        listText: "Home"
    },
    {
        listIcon: <AssignmentInd/>,
        listText: "Resume"
    },
    {
        listIcon: <Apps/>,
        listText: "Portfolio"
    },
    {
        listIcon: <ContactMail/>,
        listText: "Contacts"
    }

]

const Navbar = () => {
    const [state, setState] = useState({
        right: false
    });

    const toggleSlider = (slider, open) => () => {
        setState({...state, [slider]: open});
    };

    const classes = useStyles();

    const sideList = slider => (
        <Box className={classes.menuSliderContainer} component="div" onClick={toggleSlider(slider, false)}>
            <Avatar className={classes.avatar} src={avatar} alt="Fazle Rabbi Mithun" />
            <Divider />
            <List>
                {menuItems.map((lsItem, key)=>(
                    <ListItem button key={key}>
                        <ListItemIcon className={classes.listItem} >
                            {lsItem.listIcon}
                        </ListItemIcon>
                        <ListItemText className={classes.listItem} primary={lsItem.listText} />
                    </ListItem>
                ))}
                
            </List>
        </Box>
    )


    return (
    <>
    

        <Box component="nav">
        <AppBar position="static" style={{ background: "#222" }}>
            <toolbar>
                <IconButton onClick={toggleSlider("right", true)} >
                    <ArrowBack style={{ color: "tomato" }} />
                </IconButton>
                <Typography className={classes.typography} variant="h5" style={{color:"tan"}} >Portfolio</Typography>
                <MobilRightMenuSlider anchor="right" open={state.right} onClose={toggleSlider("right", false)} >
                    {sideList("right")}
                </MobilRightMenuSlider>
            </toolbar>
        </AppBar>
        
        </Box>
    </>
    );
};

export default Navbar;
