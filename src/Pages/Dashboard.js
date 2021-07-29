import React from 'react';
import {Box,Container,Grid} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import Apartments from '../Components/Dashboard/Apartments';
import Offices from '../Components/Dashboard/Offices';
import Shops from '../Components/Dashboard/Shops';
import Airbnb from '../Components/Dashboard/Airbnb';

const useStyles =makeStyles((theme)=>({
  root:{
    backgroundColor:theme.palette.background.default,
    minHeight: '100%',
    height:'100%',
    padding:theme.spacing(2)
  }
}))
const Dashboard =()=>{

  const classes =useStyles()

    return(
       <Box className={classes.root}>
         <Container maxWidth={false}>
           <Grid container spacing={3} >

             <Grid 
             item 
             xs={12} 
             sm={6} 
             md={6} 
             lg={4} 
             xl={4} 
             >
               <Apartments/>
             </Grid>

             <Grid 
             item 
             xs={12} 
             sm={6} 
             md={6} 
             lg={4} 
             xl={4} 
             >
               <Offices/>
             </Grid>

             <Grid 
             item 
             xs={12} 
             sm={6} 
             md={6} 
             lg={4} 
             xl={4} 
             >
               <Shops/>
             </Grid>

             <Grid 
             item 
             xs={12} 
             sm={6} 
             md={6} 
             lg={4} 
             xl={4} 
             >
               <Airbnb/>
             </Grid>

             {/* <Grid 
             item 
             xs={12} 
             sm={6} 
             md={6} 
             lg={3} 
             xl={3} 
             >
               <Offices/>
             </Grid> */}

           </Grid>
         </Container>
       </Box>
    )
}

export default Dashboard;
