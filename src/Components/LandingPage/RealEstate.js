import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import  {ReactComponent as SearchHseSvg} from '../../Assets/svg/house-searching.svg';
import {ReactComponent as ApartmentSvg} from '../../Assets/svg/apartments.svg';
import {ReactComponent as RentalsSvg} from '../../Assets/svg/rentals.svg';
import {ReactComponent as HomesSvg} from '../../Assets/svg/homes.svg';
import {ReactComponent as OfficeSvg} from '../../Assets/svg/offices.svg';
import { ReactComponent as SaleSvg} from '../../Assets/svg/forSale.svg';
import { ReactComponent as RentSvg} from '../../Assets/svg/onRent.svg';

import {
    Box,
    Container,
    Typography,
    Card,
    Grid,
    Button
} from '@material-ui/core';

const useStyles =makeStyles((theme)=>({
    card:{
        borderRadius:0,
        // display:'flex',
        padding:theme.spacing(2),
        marginBottom:theme.spacing(3)
    },

    iconCard:{
        borderRadius:theme.spacing(2),
        padding:theme.spacing(1),
        width:99,
        height:99,
        display:'flex',
        alignItems:'center',
        justifyContent:'center'
    },
    apartment:{
        borderRadius:theme.spacing(2),
        backgroundColor:theme.palette.primary.main,
        
    },
    home:{
        backgroundColor:theme.palette.secondary.main
    },
    startBtn:{
        backgroundColor:theme.palette.white,
        borderRadius:theme.spacing(2),
        textTransform:'none',
        width:250,
        height:50,
        fontSize:theme.typography.h4.fontSize,
        fontWeight:'bold',
        padding:theme.spacing(2)
    }
   
}))

const RealEstateItems =[
    {
        name:'Apartments',
        icon:<ApartmentSvg/>,
    
    },
    {
        name:'Homes',
        icon:<HomesSvg/>
    },

    {
        name:'offices',
        icon:<OfficeSvg/>,
      
    },
    
    {
        name:'Rentals',
        icon:<RentalsSvg/>
    }
]

const largeCards =[
    {
        title:'Search for a property',
        description:`Our agents work tirelessly to find that your 
        housing dream comes true with the best 
        possible value.`,
        svg:<SearchHseSvg/>
    },
    {
        title:' For Sale',
        description:` At Sunnydale you get a dozen of Real 
        Estate property on sale and you get 
        to choose what's best for you.`,
        svg:<SaleSvg/>
    },
    {
        title:'On Rent',
        description:` We have rental houses from singles 
        bedsitters,one and two bedrooms 
        and family homes.`,
        svg:<RentSvg/>
    }
]

const RealEstate =()=>{
    const classes =useStyles()
    return(
        <>
            
         <Container maxWidth='lg'>
            <Box py={4}>
                     <Typography variant='h4' color='secondary' align='center'>
                        Real Estate Management
                    </Typography> 

                    <Box py={3}>
                        <Grid container spacing={3}>

                            <Grid item lg={6} container>
                                {largeCards.map((item,index)=>(
                                    <Grid item key={index}>
                                       <Card 
                                            elevation={0}
                                            classes={{root:classes.card}}
                                       >
                                           <Grid container spacing={3}>
                                               <Grid item xs={12} sm={12} md={12} lg={4} xl={4}>
                                                  {item.svg}
                                               </Grid>
                                               <Grid item xs={12} sm={12} md={12} lg={8} xl={8}>
                                                   <Typography variant='h4'gutterBottom>
                                                       {item.title}
                                                   </Typography>
                                                   <Typography color='textSecondary'>
                                                       {item.description}
                                                   </Typography>
                                               </Grid>
                                           </Grid>
                                       </Card>
                                    </Grid>
                                ))}
                            </Grid>

                            <Grid item lg={6} container>
                                <Box>
                                    <Typography variant='h4' gutterBottom>
                                        Find a lovely apartmment, office or home
                                    </Typography>

                                    <Typography paragraph color='textSecondary'>
                                        Our Real Estate properties are located in accessible,
                                        secure and clean neighborhood.
                                   </Typography>

                                </Box>

                               <Box>
                                   <Grid  container spacing={3}>
                                       {RealEstateItems.map((item,index)=>(
                                           <Grid item xs={6} sm={6} md={6} lg={3} xl={3} key={index}>
                                               <Card 
                                                   className={classes.iconCard} 
                                                    elevation={0}
                                               >
                                                   {item.icon} 

                                               </Card>
                                               <Typography 
                                                    variant='h5' 
                                                    align='left' 
                                                    style={{
                                                        marginTop:4,
                                                        paddingLeft:4
                                                    }} 
                                               >
                                                   {item.name}
                                               </Typography>
                                           </Grid>
                                       ))}
                                   </Grid>
                               </Box>

                               <Box py={5}>
                                        <Button 
                                            variant='outlined' 
                                            color='primary' 
                                            size='large'
                                            className={classes.startBtn}
                                        >
                                            Get Started
                                        </Button>
                                   </Box>

                            </Grid>
                            
                        </Grid>
                    </Box> 
            </Box>
        </Container>
            
        </>
    )
}

export default RealEstate;