import React from 'react';
import {
    Paper,
    Container,
    Grid,
    Typography, useMediaQuery,Hidden,Box,Card,CardContent,CardActionArea,CardMedia,Button,IconButton,

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
import EnvironmentalImage1 from "../Assets/Images/environmental-1.jpg";
import EnvironmentalImage2 from "../Assets/Images/environmental-2.jpg";
import EnvironmentalImage3 from "../Assets/Images/environmental-3.jpg";
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import WhyChooseUsStyles from "../Assets/jss/WhyChooseUs";
import WhyChooseUsImg from "../Assets/Images/why-us.png";
import {ReactComponent as WhyChooseIconFirst} from '../Assets/svg/whyChoose1.svg';
import Partners from "../Components/LandingPage/Partners";
import Team from '../Components/LandingPage/Team';

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

        }
    },


}))

const OnBoardingText =() =>{
    const classes =useStyles()
    const theme =useTheme();
    const isMobileTablet =useMediaQuery(theme.breakpoints.down("md"))
    return (
        <>
            <Box p={isMobileTablet && 2} >
                <Typography  variant="h3">
                    Find Your Best Apartment,
                    Office, Land Shop & Environmental Services From Us
                </Typography>
            </Box>

        </>
        )
}

const HowItWorks =()=>{
    const howItWorksStyles =HowItWorksStyles()
    const theme =useTheme();
    const isMobileTablet =useMediaQuery(theme.breakpoints.down("md"))

    return(
        <Box mt={2} textAlign="center"  className={howItWorksStyles.root} py={3}>
            <Container>
                <Typography
                    variant="h4"
                    className={howItWorksStyles.title}
                >
                    How it Works
                </Typography>

                <Grid container justify="flex-start" spacing={3}>
                    <Grid item xs={12} md={4} lg={4}>

                        <Card elevation={0} >
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

                    <Grid item xs={12} md={4} lg={4}>
                        <Card elevation={0}>
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
                    <Grid item xs={12} md={4} lg={4}>

                        <Card elevation={0}>
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
            </Container>

        </Box>
    )
}

const OtherServices =() =>{
    const otherServicesStyles =OtherServicesStyles()

    return(
        <Box className={otherServicesStyles.root} py={2}>
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
                       <Grid item xs={12} sm={12} md={4} lg={4} >
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
                       <Grid item xs={12} sm={12} md={4} lg={4}>
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
                       <Grid item xs={12} sm={12} md={4} lg={4}>
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

                   <Box my={2}>
                       <Button variant={"contained"} className={otherServicesStyles.moreBtn}>
                           <Typography variant="h5">More Services</Typography>
                           <IconButton disableRipple color="inherit">
                               <ChevronRightIcon fontSize="large"/>
                           </IconButton>
                       </Button>
                   </Box>
               </Box>

           </Container>
        </Box>
    )
}

const WhyChooseUs =() =>{
    const whyChooseUsStyles =WhyChooseUsStyles()
    return(
        <Box className={whyChooseUsStyles.root} py={3}>
            <Container>

                <Box>
                    <Typography variant="h4" align="center">
                        Why Should You Choose Us
                    </Typography>
                </Box>
                <Box py={4}>
                    <Grid container spacing={3}>
                        <Hidden only={['xs','sm']}>
                            <Grid item md={6} lg={6} >
                                <img src={WhyChooseUsImg} className={whyChooseUsStyles.bannerImg}/>
                            </Grid>
                        </Hidden>

                        <Grid item xs={12} sm={12} md={6} lg={6}>
                            <Box>
                                <Card className={whyChooseUsStyles.card}>
                                    <Box className={whyChooseUsStyles.cardMedia}>
                                        <WhyChooseIconFirst/>
                                    </Box>

                                    <CardContent className={whyChooseUsStyles.cardContent}>

                                        <Typography variant="h5">
                                            Transparent Business Model
                                        </Typography>

                                        <Typography variant="subtitle2" style={{color:"#ffffff"}}>
                                            We are open-minded to endure your business
                                        </Typography>
                                    </CardContent>

                                </Card>
                                <Card className={whyChooseUsStyles.card}>
                                    <Box className={whyChooseUsStyles.cardMedia}>
                                        <WhyChooseIconFirst/>
                                    </Box>

                                    <CardContent>
                                        <Typography variant="h5" >
                                            Responsible & Sustainable
                                        </Typography>

                                        <Typography variant="subtitle2" color="primary">
                                            We are open-minded to endure your business
                                        </Typography>
                                    </CardContent>
                                </Card>
                                <Card className={whyChooseUsStyles.card}>
                                    <Box className={whyChooseUsStyles.cardMedia}>
                                        <WhyChooseIconFirst/>
                                    </Box>

                                    <CardContent>
                                        <Typography variant="h5">
                                            Trustworthy & Professional
                                        </Typography>

                                        <Typography variant="subtitle2" style={{color:"#ffffff"}}>
                                            We are open-minded to endure your business
                                        </Typography>
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
                </Container>
            <HowItWorks/>

            <OtherServices/>

            <WhyChooseUs/>

            <Team/>
            <Partners/>
        </>

    )
}

export default LandingPage;