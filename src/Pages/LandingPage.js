import React, {useState} from 'react';
import {
    Paper,
    Container,
    Grid,
    Typography,
    Tabs,
    Tab,
    Box,
    Divider,
    SvgIcon
} from "@material-ui/core";
import {makeStyles} from "@material-ui/styles";
import Header from "../Containers/Header";
import SliderComponent from "../Components/PhotosGlider";
import OnBoardingServices from "../Components/OnBoardingServices";

const useStyles =makeStyles(theme=>({
   wrapper:{
       marginTop:theme.spacing(2)
   },
    landingPaper:{
       backgroundColor:theme.palette.primary.main,
        color:theme.palette.white,
        borderRadius:"30px",
        padding:theme.spacing(3),


    },
    landingPText:{
      fontSize:"42px",
        fontWeight:800,

    },


}))

const OnBoardingText =() =>{
    const classes =useStyles()
    return (
        <>
            <Typography className={classes.landingPText}>
                Find Your Best Apartment,
                Office, Land Shop & Environmental Services From Us
            </Typography>
        </>
        )
}

const LandingPage =()=>{
    const classes =useStyles()


    return(
        <>
            <Header />

            <Container className={classes.wrapper}>
                <Paper className={classes.landingPaper}>
                    <Grid container >
                      <Grid item lg={4} >
                         <OnBoardingText />
                      </Grid>
                        <Grid item lg={8}>
                         <SliderComponent />
                        </Grid>
                    </Grid>

                    <OnBoardingServices />
                </Paper>
            </Container>
        </>

    )
}

export default LandingPage;