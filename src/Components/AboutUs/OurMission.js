import React from 'react';
import {
    Box,Container,Grid,Typography,
} from '@material-ui/core';
import {ReactComponent as MissionSvg} from "../../Assets/svg/Mission.svg";

const OurMission =()=>{
    return(
        <Box py={1}>
            <Container>
                <Grid container>
                    <Grid
                        item xs={12}
                        sm={12} md={6}
                        lg={6}
                    >
                        <MissionSvg width="100%"/>
                    </Grid>
                    <Grid
                        item xs={12}
                        sm={12} md={6}
                        lg={6}
                    >
                            <Box py={3}>
                                <Typography
                                    variant="h5"
                                >
                                    Mission & Values
                                </Typography>
                            </Box>

                            <Typography variant='body1'>
                                At Sunnydale, we believe that our success depends on
                                the benefits our clients receive on choosing to partner with us.
                                Thats why every business value that we strive to give and actions we take
                                is directed by our company's core Mission and vision. Our values are
                                reflected in our interaction and we passionately dedicated to delivering
                                over and above what has been expected. We strive to keep up high standards
                                of service and make sure that every recommendation we make to help you
                                meet your goals is only after careful analysis and research.
                            </Typography>

                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}

export default OurMission;