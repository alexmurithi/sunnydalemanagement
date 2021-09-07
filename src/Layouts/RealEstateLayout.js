import React from 'react';
import { Outlet } from 'react-router-dom';
import MainNavbar from '../Containers/Header';
import Alert from '@material-ui/lab/Alert';
import {
    Box,
    Container,
    Typography,
    Grid,
    Hidden,
   
}
from "@material-ui/core";


import PropertyNavTabs from '../Components/RealEstate/PropertyNavTabs';
import MobilePropertyNavTabs from '../Components/RealEstate/MobilePropertyNavTabs';

const AlertMessage =()=>(
    <Box py={2}>
        <Alert severity="info">
            <Typography gutterBottom variant='caption'>
                Please note that data or any information 
                on this page or website is for testing purposes only!
            </Typography >

            <Typography variant='caption'>
                Real data or information will be uploaded soon. Keep Checking! 
            </Typography>   
        </Alert>
    </Box>
)

const RealEstateContent =(props)=>{
    
    return (
        <Box>
        <Grid container spacing={4}>
            <Grid item xs={12} sm={12} md={12} lg={8} xl={8}>
               <Outlet/>
            </Grid>
            <Hidden mdDown>
            <Grid item  lg={4} xl={4}>
               <PropertyNavTabs />
            </Grid>
            </Hidden>
        </Grid>
    </Box>
    )
    
}

const RealEstateLayout =()=>{
    
    return(
        <>
            <MainNavbar/>

            <Container maxWidth='xl'>
                <AlertMessage/>
                <MobilePropertyNavTabs/>
                <RealEstateContent/>
            </Container>
            
        </>
    )
}

export default React.memo(RealEstateLayout);