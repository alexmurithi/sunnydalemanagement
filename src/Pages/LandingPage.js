import React from 'react';
import {
    Paper,
    Container,
    Grid,
    Typography, useMediaQuery,Hidden,Box,Card,CardContent,CardActionArea,CardMedia

} from "@material-ui/core";
import {makeStyles} from "@material-ui/styles";
import Header from "../Containers/Header";
import SliderComponent from "../Components/PhotosGlider";
import OnBoardingServices from "../Components/OnBoardingServices";
import {useTheme} from "@material-ui/core/styles";
import HowItWorksStyles from "../Assets/jss/HowItWorks";
import OtherServicesStyles from "../Assets/jss/OtherServicesStyles";
import FindServiceImage from '../Assets/Images/find-service@2x.png';
import ExamineServiceImg from '../Assets/Images/examine-service@2x.png';
import ContactProviderImg from '../Assets/Images/contact-provider@2x.png';
import EnvironmentalImage1 from "../Assets/Images/environmental-image1@2x.png";
import EnvironmentalImage2 from "../Assets/Images/environmental-image2@2x.png";
import EnvironmentalImage3 from "../Assets/Images/environmental-image3@2x.png";

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

const OtherServices =() =>{
    const otherServicesStyles =OtherServicesStyles()

    return(
        <Box className={otherServicesStyles.root}>
           <Container>
               <Box py={3}>
                   <Typography variant="h4" align="center">
                       Other Services - Monitoring & Evaluation
                   </Typography>
               </Box>

               <Box py={3}>
                   <Typography variant="subtitle2" style={{color:"#ffffff"}}>
                       We are a Real Estate & an Environmental organization that is socially and environmentally
                       responsible & embraces diversity, sustainability and creativity as we commit to preserve
                       and protect the environment.
                   </Typography>
               </Box>

               <Box>
                   <Grid container spacing={3}>
                       <Grid item xs={12} sm={12} lg={4} >
                           <Card className={otherServicesStyles.card}>
                               <CardActionArea>
                                   <CardMedia
                                       image={EnvironmentalImage1}
                                       title="Contemplative Reptile"
                                       className={otherServicesStyles.media}
                                   />
                               </CardActionArea>
                               <CardContent>
                                   <Box>
                                       <Typography variant="h5">
                                           Environmental Audit
                                       </Typography>
                                   </Box>
                                   <Box py={2}>
                                       <Typography variant="subtitle2" style={{color:"#0093dd"}}>
                                           It is a long established fact that a reader will
                                           be distracted by the readable content of a page when looking at its layout
                                       </Typography>
                                   </Box>
                               </CardContent>
                           </Card>
                       </Grid>
                       <Grid item xs={12} sm={12} lg={4}>
                           <Card className={otherServicesStyles.card}>
                               <CardActionArea>
                                   <CardMedia
                                       image={EnvironmentalImage2}
                                       title="Contemplative Reptile"
                                       className={otherServicesStyles.media}
                                   />
                               </CardActionArea>
                               <CardContent>
                                   <Box>
                                       <Typography variant="h5">
                                           Environmental Monitoring & Evaluation
                                       </Typography>
                                   </Box>
                                   <Box py={2}>
                                       <Typography variant="subtitle2" style={{color:"#0093dd"}}>
                                           It is a long established fact that a reader will
                                           be distracted by the readable content of a page when looking at its layout
                                       </Typography>
                                   </Box>
                               </CardContent>
                           </Card>
                       </Grid>
                       <Grid item xs={12} sm={12} lg={4}>
                           <Card className={otherServicesStyles.card}>
                               <CardActionArea>
                                   <CardMedia
                                       image={EnvironmentalImage3}
                                       title="Contemplative Reptile"
                                       className={otherServicesStyles.media}
                                   />
                               </CardActionArea>
                               <CardContent>
                                   <Box>
                                       <Typography variant="h5">
                                           Environmental Conservation & Protection
                                       </Typography>
                                   </Box>
                                   <Box py={2}>
                                       <Typography variant="subtitle2" style={{color:"#0093dd"}}>
                                           It is a long established fact that a reader will
                                           be distracted by the readable content of a page when looking at its layout
                                       </Typography>
                                   </Box>
                               </CardContent>
                           </Card>
                       </Grid>
                   </Grid>
               </Box>

           </Container>
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

            <OtherServices/>

        </>

    )
}

export default LandingPage;