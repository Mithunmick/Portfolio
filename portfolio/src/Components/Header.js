import React from 'react'
import {
    Typography,
    Avatar,
    Grid,
    Box
} from '@material-ui/core';
import avatar from "../Components/IMG/Avater.png";

const Header = () => {
    return (
        <Box>
            <Avatar src={avatar} alt="Mithunm" />
        </Box>
    );
};

export default Header;
