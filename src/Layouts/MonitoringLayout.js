import React from 'react';
import {styled} from '@material-ui/core/styles';
import Navbar from '../Containers/Header';
import { Outlet } from 'react-router';
// import MonitoringCarousel from '../Components/Monitoring/Carousel';
import {Box,Grid,Hidden} from '@material-ui/core';
import MonitoringMenu from '../Components/Monitoring/MonitoringMenu';
import ContactForm from '../Components/Monitoring/ContactForm';
import {Helmet} from 'react-helmet';

const MonitoringRoot =styled(Box)((theme)=>({
    
    // display: 'flex',
    height: '100%',
    // // overflow: 'hidden',
    width: '100%',
    background:"#F4F6F8"
}))

const MonitoringLayoutWrapper =styled(Box)({

})



const MonitoringLayout =()=>{
    return(
        <>
            <Helmet>
                <title>Monitoring and Evalution</title>
                <meta 
                    name="description" 
                    content="environmental services" 
                />
            </Helmet>

            <MonitoringRoot>
            
            <Navbar/>
            <MonitoringLayoutWrapper>
                {/* <Container> */}
                <Grid container style={{paddingTop:"16px"}}>
                    <Grid item xs={12} sm={12} lg={3}>
                        <Hidden mdDown>
                        <MonitoringMenu/>
                        </Hidden>
                      
                    </Grid>

                    <Grid item lg={6}>
                        <Outlet/>
                    </Grid>

                    <Grid item xs={12} sm={12} lg={3}>
                       <ContactForm/>
                    </Grid>
                </Grid>
                {/* </Container> */}
                
            </MonitoringLayoutWrapper>
        </MonitoringRoot>
        </>
       
    )
}

export default React.memo(MonitoringLayout);
