import React from 'react';
import WhyChooseUsStyles from "../../Assets/jss/WhyChooseUs";
import {Box, Card, CardContent, Container, Grid, Hidden, Typography} from "@material-ui/core";
import WhyChooseUsImg from "../../Assets/Images/why-us.png";
import {ReactComponent as WhyChooseIconFirst} from "../../Assets/svg/whyChoose1.svg";

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

export default WhyChooseUs;