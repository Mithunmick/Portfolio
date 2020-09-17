import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
AppBar,
Toolbar,
ListItem,
IconButton,
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
        height: "30rem"
    },
    avatar: {
        display: "block",
        margin: ".5rem auto",
        width: theme.spacing(13),
        height: theme.spacing(13)
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
    const classes = useStyles();
    return (
    <>
    <Box className={classes.menuSliderContainer} component="div">
        <Avatar className={classes.avatar} src={avatar} alt="Fazle Rabbi Mithun" />
        <Divider />
        <List>
            {menuItems.map((lsItem, key)=>{
                <ListItem>
                    <listIcon>
                        
                    </listIcon>
                </ListItem>
            })}
            
        </List>
    </Box>

        <Box component="nav">
        <AppBar position="static" style={{ background: "#222" }}>
            <toolbar>
                <IconButton>
                    <ArrowBack style={{ color: "tomato" }} />
                </IconButton>
                <Typography variant="h5" style={{color:"tan"}} >Portfolio</Typography>
            </toolbar>
        </AppBar>
        
        </Box>
    </>
    );
};

export default Navbar;
