import React from 'react';
import {Box, Container, Grid, Hidden, Paper, Typography} from "@material-ui/core";
import SliderComponent from "../PhotosGlider";
import OnBoardingServices from "../OnBoardingServices";
import {makeStyles} from "@material-ui/styles";

const useStyles =makeStyles(theme=>({
    wrapper:{
        marginTop:theme.spacing(2)
    },
    onBoardingBox:{
        paddingRight:theme.spacing(2),
        paddingLeft:theme.spacing(2)
    },
    landingPaper:{
        backgroundColor:theme.palette.primary.main,
        color:theme.palette.white,
        borderRadius:"30px",
        padding:theme.spacing(3),
        [theme.breakpoints.down("md")]:{
            padding:theme.spacing(0),
            borderRadius: 0,

        }
    },


}))

const OnBoardingText =() =>{
    const classes =useStyles()
    return (
        <>
            <Box component="div" className={classes.onBoardingBox}>
                <Typography  variant="h3">
                    Find Your Best Apartment,
                    Office, Land Shop & Environmental Services From Us
                </Typography>
            </Box>

        </>
    )
}

const OnBoardingSection =() =>{
    const classes =useStyles()
    return (
        <Container className={classes.wrapper}>
            <Paper className={ classes.landingPaper} elevation={3}>
                <Grid container >
                    <Grid item xs={12} lg={4} >
                        <OnBoardingText />
                    </Grid>
                    <Grid item xs={12} lg={8}>
                        <SliderComponent />
                    </Grid>
                </Grid>
                <Hidden only={['md','sm','xs']}>
                    <OnBoardingServices />
                </Hidden>
            </Paper>
        </Container>
    )
}

export default OnBoardingSection;