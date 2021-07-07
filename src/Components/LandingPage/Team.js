import React from 'react';
import {Box, Container,Typography,Card,CardContent,Grid} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import YouTube from "../../Assets/Images/Youtube.png";
import SimbaImg from "../../Assets/Images/simba.jpg";
import ZebraImg from "../../Assets/Images/zebra.jpg";

const TeamStyles =makeStyles((theme)=>({
    root:{
        width:"100%",
        backgroundColor:theme.palette.primary.light
    },
    card1:{
      backgroundColor:theme.palette.secondary.main,

    },
    card3:{
        backgroundColor:theme.palette.primary.main
    },
    cardContent:{
        padding:theme.spacing(8)
    },
    teamImg:{
        position:"relative",
        bottom:-50,
        textAlign:"center",
        "& img":{
            borderRadius:"50%",
            height:"100px",
            width:"100px",
            objectFit:"cover"
        }
    },

}))

const Team =() =>{
    const classes =TeamStyles()

    return(
        <Box className={classes.root} py={5}>
            <Container>
               <Typography variant={"h4"} align="center">Meet Our Team</Typography>

                <Box py={2}>
                    <Typography variant="subtitle1" align={"center"} >
                        Sunnydale Team embraces diversity, sustainability as well as creativity to serving their customers
                    </Typography>
                </Box>
                <Box>
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={6} md={4} lg={4} >
                            <Box>
                                <div className={classes.teamImg}>
                                    <img src={SimbaImg}/>
                                </div>

                                <Card classes={{root:classes.card1}}>
                                    <CardContent classes={{root:classes.cardContent}}>
                                        <Typography variant="h5" align={"center"}>Ambrose Mugambi</Typography>
                                    </CardContent>
                                </Card>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={4}>
                            <Box>
                                <div className={classes.teamImg}>
                                    <img src={SimbaImg}/>
                                </div>

                                <Card classes={{root:classes.card2}}>
                                    <CardContent>
                                        <Typography variant="h5" align={"center"}>John Doe</Typography>
                                    </CardContent>
                                </Card>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={4}>
                            <Box>
                                <div className={classes.teamImg}>
                                    <img src={SimbaImg}/>
                                </div>

                                <Card classes={{root:classes.card3}}>
                                    <CardContent>
                                        <Typography variant="h5" align={"center"}>James Kim</Typography>
                                    </CardContent>
                                </Card>
                            </Box>
                        </Grid>
                    </Grid>

                </Box>
            </Container>
        </Box>
    )
}

export default Team;