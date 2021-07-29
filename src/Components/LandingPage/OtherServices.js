import React from 'react';
import OtherServicesStyles from "../../Assets/jss/OtherServicesStyles";
import {
    Box,Button,Card,CardActionArea,CardContent,CardMedia,Container,Grid,Typography
} from "@material-ui/core";
import EnvironmentalImage1 from "../../Assets/Images/environmental-1.jpg";
import EnvironmentalImage2 from "../../Assets/Images/environmental-2.jpg";
import EnvironmentalImage3 from "../../Assets/Images/environmental-3.jpg";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import {Link} from 'react-router-dom';


const OtherServices =() =>{
    const otherServicesStyles =OtherServicesStyles()

    return(
        <Box className={otherServicesStyles.root} py={2}>
            <Container>
                <Box py={3}>
                    <Typography variant="h4" align="center">
                         Monitoring & Evaluation
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
                                        title="Environmental Image"
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
                                        title="Environmental Image 1"
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
                                        title="Environmental Image 2"
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
                        <Button
                            variant={"contained"}
                            className={otherServicesStyles.moreBtn}
                            endIcon={<ChevronRightIcon/>}
                            component={Link}
                            to='/monitoring-and-evaluation'
                        >
                            More Services
                        </Button>
                    </Box>
                </Box>

            </Container>
        </Box>
    )
}

export default OtherServices;