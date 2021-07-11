import React from 'react';
import HowItWorksStyles from "../../Assets/jss/HowItWorks";
import {Box, Card, CardContent, Container, Grid, Typography,} from "@material-ui/core";
import FindServiceImage from "../../Assets/Images/find-service@2x.png";
import ExamineServiceImg from "../../Assets/Images/examine-service@2x.png";
import ContactProviderImg from "../../Assets/Images/contact-provider@2x.png";

const HowItWorks =()=>{
    const howItWorksStyles =HowItWorksStyles()
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
                                    <img  src={FindServiceImage} alt="" width={250} height="auto" />
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
                                    <img src={ExamineServiceImg} alt="" width={250} height="auto"/>
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
                                    <img src={ContactProviderImg} alt="" width={250} height="auto"/>
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

export default HowItWorks;