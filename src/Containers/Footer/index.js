import React from 'react';
import {
    Box,
    Container,Grid,List,ListItem,ListItemIcon,ListItemText,Typography
} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import StreetviewIcon from '@material-ui/icons/Streetview';
import PhoneIcon from '@material-ui/icons/Phone';
import PersonIcon from '@material-ui/icons/Person';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import EmailIcon from '@material-ui/icons/Email';

const useStyles = makeStyles((theme)=>({
    root:{
        width:"100%",
        backgroundColor:theme.palette.primary.main,
        color:theme.palette.white
    },
    footerList:{
        [theme.breakpoints.down("md")]:{
            marginBottom:theme.spacing(4)
        }
    },

    footerListItem:{
        paddingBottom:"8px !important",
        paddingTop:"8px !important",
        paddingRight:"8px !important",

        '& .MuiListItemIcon-root':{
            color:theme.palette.white
        },
        '&.MuiListItem-gutters':{
            padding:0
        }
    }
}))

const Footer =()=>{
    const classes =useStyles();

    return(
        <Box py={4} className={classes.root}>
            <Container>
                <Grid container>
                    <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                        <Typography variant="h5">Locations</Typography>
                       <List className={classes.footerList}>
                           <ListItem className={classes.footerListItem}>
                               <ListItemIcon>
                                   <LocationOnIcon fontSize="large"/>
                               </ListItemIcon>
                               <ListItemText primary="Meru & Thika"/>
                           </ListItem>
                           <ListItem className={classes.footerListItem}>
                               <ListItemIcon>
                                   <StreetviewIcon fontSize="large"/>
                               </ListItemIcon>
                               <ListItemText primary="D7, Kyanjau House Thika"/>
                           </ListItem>
                       </List>
                    </Grid>
                    <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                        <Typography variant="h5">Contact</Typography>
                        <List className={classes.footerList}>
                            <ListItem className={classes.footerListItem}>
                                <ListItemIcon>
                                    <PhoneIcon fontSize="large"/>
                                </ListItemIcon>
                                <ListItemText primary="0715907041"/>
                            </ListItem>
                            <ListItem className={classes.footerListItem}>
                                <ListItemIcon>
                                    <PersonIcon fontSize="large"/>
                                </ListItemIcon>
                                <ListItemText primary="Stanely Mugambi"/>
                            </ListItem>
                        </List>
                    </Grid>
                    <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                        <Typography variant="h5">Social Media</Typography>
                        <List className={classes.footerList}>
                            <ListItem className={classes.footerListItem}>
                                <ListItemIcon>
                                    <EmailIcon fontSize="large"/>
                                </ListItemIcon>
                                <ListItemText primary="sunnydalemanagement@gmail.com"/>
                            </ListItem>
                            <ListItem className={classes.footerListItem}>
                                <ListItemIcon>
                                    <FacebookIcon fontSize="large"/>
                                </ListItemIcon>
                                <ListItemText primary="Sunnydale Management"/>
                            </ListItem>
                            <ListItem className={classes.footerListItem}>
                                <ListItemIcon>
                                    <TwitterIcon fontSize="large"/>
                                </ListItemIcon>
                                <ListItemText primary="@sunnydalemanagement"/>
                            </ListItem>
                        </List>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}

export default Footer;
