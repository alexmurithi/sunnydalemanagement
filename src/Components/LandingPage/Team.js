import React from 'react';
import {Box, Container, Typography, Card, CardContent, Grid, IconButton, CardMedia} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import SimbaImg from "../../Assets/Images/simba.jpg";
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import MailIcon from '@material-ui/icons/Mail';

const TeamStyles =makeStyles((theme)=>({
    root:{
        width:"100%",
        backgroundColor:"ghostwhite"
    },
    card:{
        borderRadius:0
    },
    cardMedia:{
        width:"100px",
        height:'100px',
        borderRadius:"50%",
        marginLeft:"auto",
        marginRight:"auto"
    }

}))

const Team =() =>{
    const classes =TeamStyles()

    return(
        <Box className={classes.root} py={5}>
            <Container>
               <Typography variant={"h5"} align="center">Meet Our Team</Typography>

                <Box py={2}>
                    <Typography variant="subtitle1" align={"center"} >
                        Sunnydale Team embraces diversity, sustainability as well as creativity to serving their customers
                    </Typography>
                </Box>
                <Box>
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={6} md={4} lg={4} >
                            <Box>
                                <Card classes={{root:classes.card}} elevation={3}>
                                    <CardContent >
                                        <CardMedia
                                            image={SimbaImg}
                                            className={classes.cardMedia}
                                        />

                                        <Typography
                                            variant="h5"
                                            align={'center'}
                                        >
                                            Ambrose Mugambi
                                        </Typography>

                                        <Typography
                                            variant="h6"
                                            align='center'
                                            color='primary'
                                        >
                                            Founder & CEO
                                        </Typography>
                                        <Grid container>
                                            <Grid item lg={4}>
                                                <IconButton>
                                                    <TwitterIcon  fontSize="large" />
                                                </IconButton>
                                            </Grid>
                                            <Grid item lg={4}>
                                                <IconButton>
                                                    <FacebookIcon fontSize="large" />
                                                </IconButton>
                                            </Grid>
                                            <Grid item lg={4}>
                                                <IconButton>
                                                    <MailIcon fontSize="large" />
                                                </IconButton>
                                            </Grid>
                                        </Grid>
                                    </CardContent>
                                </Card>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={4}>
                            <Box>
                                <Card classes={{root:classes.card}} elevation={3}>
                                    <CardContent >
                                        <CardMedia
                                            image={SimbaImg}
                                            className={classes.cardMedia}
                                        />
                                        <Typography
                                            variant="h5"
                                            align={'center'}
                                        >
                                            Ambrose Mugambi
                                        </Typography>

                                        <Typography
                                            variant="h6"
                                            align='center'
                                            color='primary'
                                        >
                                            Founder & CEO
                                        </Typography>
                                        <Grid container>
                                            <Grid item lg={4}>
                                                <IconButton>
                                                    <TwitterIcon  fontSize="large" />
                                                </IconButton>
                                            </Grid>
                                            <Grid item lg={4}>
                                                <IconButton>
                                                    <FacebookIcon fontSize="large" />
                                                </IconButton>
                                            </Grid>
                                            <Grid item lg={4}>
                                                <IconButton>
                                                    <MailIcon fontSize="large" />
                                                </IconButton>
                                            </Grid>
                                        </Grid>
                                    </CardContent>
                                </Card>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={4}>
                            <Box>
                                <Card classes={{root:classes.card}} elevation={3}>
                                    <CardContent >
                                        <CardMedia
                                            image={SimbaImg}
                                            className={classes.cardMedia}
                                        />
                                        <Typography
                                            variant="h5"
                                            align={'center'}
                                        >
                                            Ambrose Mugambi
                                        </Typography>

                                        <Typography
                                            variant="h6"
                                            align='center'
                                            color='primary'
                                        >
                                            Founder & CEO
                                        </Typography>

                                        <Grid container>
                                            <Grid item lg={4}>
                                                <IconButton>
                                                    <TwitterIcon  fontSize="large" />
                                                </IconButton>
                                            </Grid>
                                            <Grid item lg={4}>
                                                <IconButton>
                                                    <FacebookIcon fontSize="large" />
                                                </IconButton>
                                            </Grid>
                                            <Grid item lg={4}>
                                                <IconButton>
                                                    <MailIcon fontSize="large" />
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