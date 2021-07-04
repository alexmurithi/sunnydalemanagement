import React from 'react';
import {
    Paper,
    Container,
    Grid,
    Typography, useMediaQuery,

} from "@material-ui/core";
import {makeStyles} from "@material-ui/styles";
import Header from "../Containers/Header";
import SliderComponent from "../Components/PhotosGlider";
import OnBoardingServices from "../Components/OnBoardingServices";
import {useTheme} from "@material-ui/core/styles";


const useStyles =makeStyles(theme=>({
   wrapper:{
       marginTop:theme.spacing(2)
   },
    landingPaper:{
       backgroundColor:theme.palette.primary.main,
        color:theme.palette.white,
        borderRadius:"30px",
        padding:theme.spacing(3),
        [theme.breakpoints.down("md")]:{
            padding:theme.spacing(0),
            borderRadius: 0,
            backgroundColor:theme.palette.white,
            color:theme.palette.black,
        }
    },

    landingPText:{
      fontSize:"42px",
      fontWeight:800,
        [theme.breakpoints.down("md")]:{
          fontSize:"21px",
            padding:theme.spacing(2),
            fontWeight: 700
        },
        [theme.breakpoints.down("sm")]:{
          fontSize:"18px",
            padding:theme.spacing(1)
        }

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
    const theme =useTheme();
    const isMobileTablet =useMediaQuery(theme.breakpoints.down("md"))
    return(
        <>
            <Header />

                <Container className={classes.wrapper}>
                    <Paper className={ classes.landingPaper} elevation={isMobileTablet && 3}>
                                <Grid container >
                                    <Grid item xs={12} lg={4} >
                                        <OnBoardingText />
                                    </Grid>
                                    <Grid item xs={12} lg={8}>
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