import React from 'react';
import {Box, Container,Typography,Card,CardContent,Grid,IconButton} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import YouTube from "../../Assets/Images/Youtube.png";
import SimbaImg from "../../Assets/Images/simba.jpg";
import ZebraImg from "../../Assets/Images/zebra.jpg";
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import MailIcon from '@material-ui/icons/Mail';

const TeamStyles =makeStyles((theme)=>({
    root:{
        width:"100%",
        backgroundColor:theme.palette.primary.light
    },
    card1:{
      backgroundColor:theme.palette.secondary.main,
      borderRadius:"36px"
    },
    card2:{
        borderRadius:"36px"
    },
    card3:{
        backgroundColor:theme.palette.primary.main,
        borderRadius:"36px"
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
    cardTeamName:{
        textAlign:"center",
        paddingBottom:theme.spacing(2)
    },
    cardTeamPosition:{
        textAlign:"center",
        color:theme.palette.white,
        paddingBottom:theme.spacing(2)

    },
    teamCenterPosition:{
        color:"#0093dd",
        paddingBottom:theme.spacing(2),
    }

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

                                        <Typography variant="h5" className={classes.cardTeamName}>
                                            Ambrose Mugambi
                                        </Typography>

                                        <Typography variant="h5" className={classes.cardTeamPosition}>
                                            Founder & CEO
                                        </Typography>

                                        <Grid container>
                                            <Grid item lg={4}>
                                                <IconButton>
                                                    <TwitterIcon  fontSize="large" style={{color:"#ffffff"}}/>
                                                </IconButton>
                                            </Grid>
                                            <Grid item lg={4}>
                                                <IconButton>
                                                    <FacebookIcon fontSize="large" style={{color:"#ffffff"}}/>
                                                </IconButton>
                                            </Grid>
                                            <Grid item lg={4}>
                                                <IconButton>
                                                    <MailIcon fontSize="large" style={{color:"#ffffff"}}/>
                                                </IconButton>
                                            </Grid>
                                        </Grid>
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
                                    <CardContent classes={{root:classes.cardContent}}>
                                        <Typography variant="h5" className={classes.cardTeamName}>
                                            John Doe
                                        </Typography>

                                        <Typography
                                            variant="h5"
                                            align={"center"}
                                            className={classes.teamCenterPosition}
                                        >
                                            Founder & CEO
                                        </Typography>

                                        <Grid container>
                                            <Grid item lg={4}>
                                                <IconButton>
                                                    <TwitterIcon  fontSize="large" style={{color:"#0093dd"}}/>
                                                </IconButton>
                                            </Grid>
                                            <Grid item lg={4}>
                                                <IconButton>
                                                    <FacebookIcon fontSize="large" style={{color:"#0093dd"}}/>
                                                </IconButton>
                                            </Grid>
                                            <Grid item lg={4}>
                                                <IconButton>
                                                    <MailIcon fontSize="large" style={{color:"#0093dd"}}/>
                                                </IconButton>
                                            </Grid>
                                        </Grid>

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
                                    <CardContent classes={{root:classes.cardContent}}>

                                        <Typography variant="h5" className={classes.cardTeamName}>
                                            James Kim
                                        </Typography>

                                        <Typography variant="h5" align={"center"} className={classes.cardTeamPosition}>
                                            Founder & CEO
                                        </Typography>

                                        <Grid container>
                                            <Grid item lg={4}>
                                                <IconButton>
                                                    <TwitterIcon  fontSize="large" style={{color:"#ffffff"}}/>
                                                </IconButton>
                                            </Grid>
                                            <Grid item lg={4}>
                                                <IconButton>
                                                    <FacebookIcon fontSize="large" style={{color:"#ffffff"}}/>
                                                </IconButton>
                                            </Grid>
                                            <Grid item lg={4}>
                                                <IconButton>
                                                    <MailIcon fontSize="large" style={{color:"#ffffff"}}/>
                                                </IconButton>
                                            </Grid>
                                        </Grid>

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