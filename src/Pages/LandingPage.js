import React from 'react';
import {
    Paper,
    Container,
    Grid,
    Typography, useMediaQuery,Hidden,Box,Card,CardContent

} from "@material-ui/core";
import {makeStyles} from "@material-ui/styles";
import Header from "../Containers/Header";
import SliderComponent from "../Components/PhotosGlider";
import OnBoardingServices from "../Components/OnBoardingServices";
import {useTheme} from "@material-ui/core/styles";
import HowItWorksStyles from "../Assets/jss/HowItWorks";
import FindServiceImage from '../Assets/Images/find-service@2x.png';
import ExamineServiceImg from '../Assets/Images/examine-service@2x.png';
import ContactProviderImg from '../Assets/Images/contact-provider@2x.png';

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
            // backgroundColor:theme.palette.white,
            // color:theme.palette.black,
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

const HowItWorks =()=>{
    const howItWorksStyles =HowItWorksStyles()
    const theme =useTheme();
    const isMobileTablet =useMediaQuery(theme.breakpoints.down("md"))

    return(
        <Box marginY={3} textAlign="center" >
            <Typography
                variant="h4"
                className={howItWorksStyles.title}
            >
                How it Works
            </Typography>

            <Grid container justify="flex-start">
                <Grid item xs={12} md={12} lg={4}>

                    <Card elevation={isMobileTablet && 1}>
                        <CardContent>
                            <Box mb={2}>
                                <img  src={FindServiceImage} alt="Find Service Image" width={250} />
                            </Box>

                            <Typography variant="h5" align="left">
                                Find a Service
                            </Typography>

                            <Typography variant="subtitle1" align="left">
                                Browse through our Real Estate and Environmental services to pick your best desire.
                            </Typography>
                        </CardContent>
                    </Card>


                </Grid>

                <Grid item xs={12} md={12} lg={4}>
                    <Card elevation={isMobileTablet && 1}>
                        <CardContent>
                            <Box mb={2}>
                                <img src={ExamineServiceImg} alt="Examine Service" width={250}/>
                            </Box>

                            <Typography variant="h5" align="left">
                                Examine your Service
                            </Typography>

                            <Typography variant="subtitle1" align="left">
                                Have you found your best service? Take time to go through all the details provided to make the right decision.
                            </Typography>
                        </CardContent>
                    </Card>

                </Grid>
                <Grid item xs={12} md={12} lg={4}>

                    <Card elevation={isMobileTablet && 1}>
                        <CardContent>
                            <Box mb={2}>
                                <img src={ContactProviderImg} alt="Contact Provider Image" width={250}/>
                            </Box>

                            <Typography variant="h5" align="left" >
                                Contact the Service Provider
                            </Typography>

                            <Typography variant="subtitle1" align="left">
                                With just a click, you can get all the details you need to get in touch with your service provider.
                            </Typography>
                        </CardContent>
                    </Card>



                </Grid>
            </Grid>
        </Box>
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

                    <HowItWorks/>
                </Container>

        </>

    )
}

export default LandingPage;