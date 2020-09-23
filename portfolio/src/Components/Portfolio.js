import React from 'react';
import Navbar from "./Navbar";
import {
    Box,
    Grid,
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
    Button,
    Typography, CardActions
} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import project1 from "../Components/IMG/img4.png";
import project2 from "../Components/IMG/img5.png";
import project3 from "../Components/IMG/img6.png";
import project4 from "../Components/IMG/img7.png";
import project5 from "../Components/IMG/img8.png";


const useStyles = makeStyles({
    mainContainer: {
        background: "#233",
        height: "100%"
    },
    cardContainer: {
        maxWidth: 350,
        margin: "3rem",
        margin: "5rem auto"
    }
});



const Portfolio = () => {
    const classes = useStyles();
    return (
        <Box component="div" className={classes.mainContainer}>
            <Navbar />
            <Grid container justify="center" >
                <Grid item xs={12} sm={8} md={6}>
                    <Card className={classes.cardContainer}>
                        <CardActionArea>
                            <CardMedia component="img" 
                            alt="Project 1"
                            height="140"
                            image={project1} />
                            <CardContent>
                                <Typography gutterBottom variant="h5">
                                    Shehzin's BakeStation
                                </Typography>
                                <Typography  variant="Body2" color="textSecondary" component="p">
                                RECEIVE-SMSS.COM IS A FREE SERVICE FOR RECEIVING SMS MESSAGES AND VOICE MAILS ONLINE. THERE IS NO NEED TO REGISTER. JUST SELECT YOUR PHONE NUMBER FROM THE LIST BELOW. YOU CAN USE IT TO RECEIVE MESSAGES FROM FACEBOOK, TELEGRAM, WECHAT, VK, PAYPAL, ALIPAY AND MORE
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary">
                                Share
                            </Button>
                            <Button size="small" color="primary">
                                Live Demo
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={8} md={6}>
                    <Card className={classes.cardContainer}>
                        <CardActionArea>
                            <CardMedia component="img" 
                            alt="Project 2"
                            height="140"
                            image={project2} />
                            <CardContent>
                                <Typography gutterBottom variant="h5">
                                    Tavel
                                </Typography>
                                <Typography  variant="Body2" color="textSecondary" component="p">
                                RECEIVE-SMSS.COM IS A FREE SERVICE FOR RECEIVING SMS MESSAGES AND VOICE MAILS ONLINE. THERE IS NO NEED TO REGISTER. JUST SELECT YOUR PHONE NUMBER FROM THE LIST BELOW. YOU CAN USE IT TO RECEIVE MESSAGES FROM FACEBOOK, TELEGRAM, WECHAT, VK, PAYPAL, ALIPAY AND MORE
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary">
                                Share
                            </Button>
                            <Button size="small" color="primary">
                                Live Demo
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={8} md={6}>
                    <Card className={classes.cardContainer}>
                        <CardActionArea>
                            <CardMedia component="img" 
                            alt="Project 3"
                            height="140"
                            image={project3} />
                            <CardContent>
                                <Typography gutterBottom variant="h5">
                                    Portfolio
                                </Typography>
                                <Typography  variant="Body2" color="textSecondary" component="p">
                                RECEIVE-SMSS.COM IS A FREE SERVICE FOR RECEIVING SMS MESSAGES AND VOICE MAILS ONLINE. THERE IS NO NEED TO REGISTER. JUST SELECT YOUR PHONE NUMBER FROM THE LIST BELOW. YOU CAN USE IT TO RECEIVE MESSAGES FROM FACEBOOK, TELEGRAM, WECHAT, VK, PAYPAL, ALIPAY AND MORE
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary">
                                Share
                            </Button>
                            <Button size="small" color="primary">
                                Live Demo
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={8} md={6}>
                    <Card className={classes.cardContainer}>
                        <CardActionArea>
                            <CardMedia component="img" 
                            alt="Project 4"
                            height="140"
                            image={project4} />
                            <CardContent>
                                <Typography gutterBottom variant="h5">
                                    Mick E Watch
                                </Typography>
                                <Typography  variant="Body2" color="textSecondary" component="p">
                                RECEIVE-SMSS.COM IS A FREE SERVICE FOR RECEIVING SMS MESSAGES AND VOICE MAILS ONLINE. THERE IS NO NEED TO REGISTER. JUST SELECT YOUR PHONE NUMBER FROM THE LIST BELOW. YOU CAN USE IT TO RECEIVE MESSAGES FROM FACEBOOK, TELEGRAM, WECHAT, VK, PAYPAL, ALIPAY AND MORE
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary">
                                Share
                            </Button>
                            <Button size="small" color="primary">
                                Live Demo
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={8} md={6}>
                    <Card className={classes.cardContainer}>
                        <CardActionArea>
                            <CardMedia component="img" 
                            alt="Project 5"
                            height="140"
                            image={project5} />
                            <CardContent>
                                <Typography gutterBottom variant="h5">
                                    Blinkist
                                </Typography>
                                <Typography  variant="Body2" color="textSecondary" component="p">
                                RECEIVE-SMSS.COM IS A FREE SERVICE FOR RECEIVING SMS MESSAGES AND VOICE MAILS ONLINE. THERE IS NO NEED TO REGISTER. JUST SELECT YOUR PHONE NUMBER FROM THE LIST BELOW. YOU CAN USE IT TO RECEIVE MESSAGES FROM FACEBOOK, TELEGRAM, WECHAT, VK, PAYPAL, ALIPAY AND MORE
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary">
                                Share
                            </Button>
                            <Button size="small" color="primary">
                                Live Demo
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Portfolio;
