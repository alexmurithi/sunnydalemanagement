import React from 'react';
import {Box,Container,Typography} from '@material-ui/core';
import AboutUsImage from '../../Assets/Images/Apartment2.jpg';
import {makeStyles} from "@material-ui/core/styles";

const useStyles =makeStyles((theme)=>({
    flatCarouselBox:{
        backgroundImage:`url(${AboutUsImage})`,
        position:"relative",
        height:"400px",
        backgroundSize:"cover",
        backgroundPosition:'center',
        backgroundRepeat:'no-repeat',
        [theme.breakpoints.down('sm')]:{
            height:'250px'
        }
    },
    overlay:{
        position:"absolute",
        width:"100%",
        height:"100%",
        top:0,
        left:0,
        color:theme.palette.white,
        display:"flex",
        alignItems:"center",
        // justifyContent:"center",
        flexDirection:"column",
        background:`rgba(0,0,0,0.7)`
    },
    aboutText:{
        fontSize:'2rem',
        paddingTop:"18px",
        [theme.breakpoints.down('sm')]:{
            fontSize: '1rem'
        }
    }

}))

const FlatCarousel =()=>{
    const classes =useStyles();
    return(
        <Box py={3}>
            <Container maxWidth={'xl'}>
                <Box component="div" className={classes.flatCarouselBox} >
                    <Box className={classes.overlay} >
                        <Typography
                            variant="h4"
                            align="center"
                            style={{paddingTop:'3rem'}}
                        >
                            About Sunnydale
                        </Typography>
                        <Typography
                            variant="body1"
                            align={'center'}
                            classes={{body1:classes.aboutText}}
                        >
                            We are a Real Estate & an Environmental organization
                            that is socially and environmentally responsible & embraces
                            diversity, sustainability and creativity as we commit to preserve
                            and protect the environment.
                        </Typography>
                    </Box>

                </Box>
            </Container>
        </Box>
    )
}

export default FlatCarousel;