import React from 'react';
import {Box,Container,Typography,Grid,useMediaQuery} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import {ReactComponent as ShareItSvg} from "../../Assets/svg/ShareIt.svg";
import {ReactComponent as NikeSvg} from "../../Assets/svg/Nike.svg";
import {ReactComponent as AdidasSvg} from "../../Assets/svg/addidas.svg";
import YoutubeImg from '../../Assets/Images/Youtube.png';
import NikeImg from '../../Assets/Images/Nike.png';
import MillwallImg from '../../Assets/Images/millwall.png';
import {useTheme} from "@material-ui/core";

const PartnersStyles =makeStyles((theme)=>({
    root:{
        width:"100%",
        backgroundColor:theme.palette.secondary.light
    },
    partnersWrapper:{
       paddingTop:theme.spacing(5)
    },
    partnersImg:{
        paddingBottom:"10px"
    }
    // partnersSvg:{
    //     height:"70px",
    //     [theme.breakpoints.down('md')]:{
    //         height:"30px",
    //     }
    // }
}))

const Partners =()=>{
    const classes =PartnersStyles()
    const theme =useTheme()
    const isMobileTablet =useMediaQuery(theme.breakpoints.down('md'))
    return(
        <Box className={classes.root} py={isMobileTablet ? 4 :8}>
            <Container>
               <Typography variant="h4" align={"center"}>Our Partners</Typography>

                <Grid container className={classes.partnersWrapper}  justify="space-between">
                    <Grid item xs={6} sm={6} md={4} lg={3} >
                        <img src={YoutubeImg} height="60px" alt="image" />
                            {/*<ShareItSvg className={classes.partnersSvg} />*/}
                    </Grid>
                    <Grid item xs={6} sm={6} md={4} lg={3}>
                        <img src={NikeImg} height="60px" alt="image" className={classes.partnersImg}/>
                            {/*<NikeSvg className={classes.partnersSvg}/>*/}
                    </Grid>
                    <Grid item xs={6} sm={6} md={4} lg={3}>
                        <img src={MillwallImg} height="60px" alt="image" className={classes.partnersImg}/>

                    </Grid>
                    <Grid item xs={6} sm={6} md={4} lg={3}>
                        <img src={MillwallImg} height="60px" alt="image" className={classes.partnersImg}/>

                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}

export default Partners;