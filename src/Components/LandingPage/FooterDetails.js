import React from 'react';

import {
    Box,
    Container,
    Grid,
    Typography,
    Link
}
from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import MapIcon from '@material-ui/icons/Map';
import PhoneIcon from '@material-ui/icons/Phone';
import PersonIcon from '@material-ui/icons/Person';

import  FaceBookImg from '../../Assets/Images/SocialMedia/facebook.png';
import  TwitterImg from '../../Assets/Images/SocialMedia/twitter.png';
import  LinkedInImg from '../../Assets/Images/SocialMedia/linkedin.png';
import  InstagramImg from '../../Assets/Images/SocialMedia/instagram.png';


const useStyles =makeStyles((theme)=>({
    root:{
        width:'100%',
        backgroundColor:`rgba(0,0,0,0.87)`,
        color:theme.palette.white,
        zIndex:'-1'
    }
}))

const socialMedias =[
    {name:'facebook',image:FaceBookImg,link:'https://web.facebook.com/sunnydalemanagementltd/?ref=page_internal'},
    {name:'twitter',image:TwitterImg,link:'https://twitter.com/sunnydalekenya'},
    {name:'linkedin',image:LinkedInImg,link:'https://www.linkedin.com/in/sunnydale-management-ltd-35a37b194/'},
    {name:'insagram',image:InstagramImg,link:'https://www.instagram.com/sunnydalemanagementltd/'},
]

const FooterDetails =()=>{
    const classes =useStyles()

    return(
        <>
        <Box className={classes.root} py={3}>
            <Container maxWidth='lg'>
                <Grid container>
                    <Grid item xs={12} sm={12} md={12} lg={4} xl={4}>
                        <Box py={2}>
                            <Typography variant='h5'>
                                Location
                            </Typography>
                        </Box>

                       <Grid container spacing={2}>
                           <Grid item xs={4} sm={4} md={4} lg={2} xl={2}>
                               <LocationOnIcon />
                           </Grid>
                           <Grid item xs={8} sm={8} md={8} lg={10} xl={10}>
                               <Typography varinat='h5'>Meru & Thika</Typography>
                           </Grid>
                           <Grid item xs={4} sm={4} md={4} lg={2} xl={2}>
                               <MapIcon />
                           </Grid>
                           <Grid item xs={8} sm={8} md={8} lg={10} xl={10}>
                               <Typography varinat='h5'>D7, Kyanjau House, Thika</Typography>
                           </Grid>
                       </Grid>
                        

                    </Grid>
                    <Grid item sm={12} md={12} lg={4} xl={4}>
                        <Box py={2}>
                        <Typography variant='h5'>
                                Contacts
                    </Typography>
                        </Box>
                    
                    <Grid container spacing={2}>
                           <Grid item xs={4} sm={4} md={4} lg={2} xl={2}>
                               <PhoneIcon />
                           </Grid>
                           <Grid item xs={8} sm={8} md={8} lg={10} xl={10}>
                               <Typography varinat='h5'>0715907041</Typography>
                           </Grid>
                           <Grid item xs={4} sm={4} md={4} lg={2} xl={2}>
                               <PersonIcon />
                           </Grid>
                           <Grid item xs={8} sm={8} md={8} lg={10} xl={10}>
                               <Typography varinat='h5'>Ambrose Mugambi</Typography>
                           </Grid>
                       </Grid>
                       
                    </Grid>

                    <Grid item sm={12} md={12} lg={4} xl={4}>
                        <Box py={2}>
                            <Typography variant='h5'>
                                    Social Media
                            </Typography>
                        </Box>
                    <Grid container spacing={2}>
                        
                        {socialMedias.map((item,index)=>(
                            <Grid item xs={6} sm={6} md={6} lg={3} xl={3} key={index}>
                               
                                    <Link component='a' href={item.link} target='_blank'>
                                         <img src={item.image} alt={item.name} />
                                    </Link>
                            </Grid>
                        ))}
                    </Grid>
                    </Grid>
                </Grid>
            </Container>
        </Box>
        </>
    )
}

export default React.memo(FooterDetails);