import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Typed from 'react-typed';

import {
    Typography,
    Avatar,
    Grid,
    Box,
} from '@material-ui/core';
import avatar from "../Components/IMG/Avater.png";
import { HoverMode } from 'react-particles-js';


// CSS styles
const useStyles = makeStyles(theme=> ({
    avatar: {
        width: theme.spacing(20),
        height: theme.spacing(30),
        margin: theme.spacing(1),
        zIndex: "-1",
    },
    title: {
        color: "tomato"
    },
    subtitle: {
        color: "tan"
    },
    typeContainer: {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "100vw",
        textAlign: "center",
        zIndex: 1
    },
    
    
}))

const Header = () => {
    const classes = useStyles()
    return (
        
        
        <Box className={classes.typeContainer}>
            <Grid container justify="center" >
            <Avatar className={classes.avatar} src={avatar} alt="Mithunm" />
            
            </Grid>
            <Typography className={classes.title} variant="h4" >
                <Typed strings={["Fazle Rabbi Mithun"]} TypeSpeed={40} />
            </Typography>
            <br/>
            <Typography className={classes.subtitle} variant="h5" >
                <Typed
                    strings={["Web Design", "Web Development","Full Stack"]}
                    TypeSpeed={40}
                    backSpeed={60}
                    loop
                />
            </Typography>
        </Box>
    );
};

export default Header;
