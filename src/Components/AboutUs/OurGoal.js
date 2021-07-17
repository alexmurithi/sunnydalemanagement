import React from 'react';
import {
    Box,Container,Grid,Typography,useMediaQuery
} from "@material-ui/core";
import {useTheme} from "@material-ui/core/styles";
import {ReactComponent as OurGoalSvg} from "../../Assets/svg/ourGoal.svg";

const OurGoal =()=>{
    const theme =useTheme()
    const isMobileTablet =useMediaQuery(theme.breakpoints.down('sm'));
    return(
        <Box py={5}>
            <Container maxWidth={'xl'}>
                <Grid container direction={isMobileTablet ? 'column-reverse':null}>

                    <Grid item xs={12} sm={12} lg={6}>
                        <Box py={3}>
                            <Typography variant="h5" >
                                Our Goal
                            </Typography>
                        </Box>
                        <Typography
                            variant="subtitle1"
                        >
                            Describe your background and what has led you to join the real estate industry.
                            Is this a family business you’ve taken over? Your own venture you’ve been dreaming
                            of launching since college? Have you moved from abroad and so can boast a deep understanding
                            of how the business works in different settings?
                        </Typography>
                    </Grid>
                    <Grid xs={12} sm={12} item lg={6}>
                        <OurGoalSvg width="100%"/>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}

export default OurGoal;