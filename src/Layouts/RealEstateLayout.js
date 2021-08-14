import React from 'react';
import { Outlet } from 'react-router';
import MainNavbar from '../Containers/Header';
import Alert from '@material-ui/lab/Alert';
import {
    Box,
    Container,
    Typography,
    Grid,
    Hidden
}
from "@material-ui/core";

const AlertMessage =()=>(
    <Box py={2}>
        <Alert severity="info">
            <Typography gutterBottom variant='h5'>
                Please note that data or any information 
                on this page or website is for testing purposes only!
            </Typography >

            <Typography variant='h5'>
                Real data or information will be uploaded soon. Keep Checking! 
            </Typography>   
        </Alert>
    </Box>
)

const RealEstateContent =()=>(
    <Box>
        <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={12} lg={8} xl={8}>
               <Outlet/>
            </Grid>
            <Hidden mdDown>
            <Grid item  lg={4} xl={4}>
                bjbj
            </Grid>
            </Hidden>
        </Grid>
    </Box>
)

const RealEstateLayout =()=>{
    return(
        <>
            <MainNavbar/>

            <Container maxWidth='xl'>
                <AlertMessage/>

                <RealEstateContent/>
            </Container>
            
        </>
    )
}

export default React.memo(RealEstateLayout);