import React, {useState} from 'react';
import {
    Collapse,
    Divider,
    List,
    ListItem,
    ListItemText,
    Button,

} from '@material-ui/core'
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import {makeStyles} from '@material-ui/core/styles';
import {Link} from "react-router-dom";
import Logo from "../../Assets/Logo/Logo.png";


const useStyles =makeStyles(theme=>({
    drawerListItemNested:{
        paddingLeft:theme.spacing(4)
    },
    drawerLogoBtn:{
        "&:hover":{
            backGroundColor:"transparent"
        }
    }
}))

const Drawer =()=>{
    const classes =useStyles();

    const [openEServices, setOpenEServices] =useState(false)

    const toggleEServices =()=>{
        setOpenEServices(!openEServices)
    }
    return(
        <>
            <List>
                <ListItem button divider>
                    <Button 
                        disableRipple 
                        component={Link} 
                        to="/" 
                        className={classes.drawerLogoBtn}
                    >
                        <img edge="start"
                             src={Logo} width="100%"
                             height={60} alt="Sunnydale"
                             style={{objectFit:"contain"}}

                        />
                    </Button>
                </ListItem>

                <ListItem 
                    button 
                    divider
                    component={Link}
                    to='/real-estate-and-property-management' 
                >
                    <ListItemText 
                        primary="Property Management" 
                    />

                </ListItem>
       
                <ListItem 
                    button 
                    onClick={toggleEServices} 
                    component={Link}
                    to='/monitoring-and-evaluation' 
                >
                    <ListItemText 
                        primary="Environmental Services" 
                    />

                    {openEServices ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Divider />

                <Collapse 
                    in={openEServices} 
                    timeout="auto" 
                    unmountOnExit 
                >
                    <List component="div" disablePadding>
                        <ListItem 
                            button 
                            className={classes.drawerListItemNested} 
                            component={Link}
                            to='/monitoring-and-evaluation/environmental-audit'
                            divider 
                        >
                            <ListItemText primary="Environmental Audit" />
                        </ListItem>

                        <ListItem 
                            button 
                            className={classes.drawerListItemNested}
                            component={Link}
                            to='/monitoring-and-evaluation/environmental-conservation-and-protection'
                            divider 
                        >
                            <ListItemText 
                                primary="Environmental 
                                Conservation & Protection" 
                            />
                        </ListItem>

                        <ListItem 
                            button 
                            className={classes.drawerListItemNested}
                            component={Link}
                            to='/monitoring-and-evaluation/waste-disposal-and-management'
                            divider 
                        >
                            <ListItemText 
                                primary="Waste Disposal & Management" 
                            />
                        </ListItem>

                        <ListItem 
                            button 
                            className={classes.drawerListItemNested}
                            component={Link}
                            to='/monitoring-and-evaluation/environmental-impact-and-assessment'
                            divider 
                        >
                            <ListItemText 
                                primary="Environmental Impact Assessment" 
                            />
                        </ListItem>

                        <ListItem 
                            button 
                            className={classes.drawerListItemNested}
                            component={Link}
                            to='/monitoring-and-evaluation/environmental-research'
                            divider 
                        >
                            <ListItemText 
                                primary="Environmental Research" 
                            />
                        </ListItem>

                        <ListItem 
                            button 
                            className={classes.drawerListItemNested}
                            component={Link}
                            to='/monitoring-and-evaluation/water-and-forest-resources'
                            divider 
                        >
                            <ListItemText 
                                primary="Water & Forest Resources" 
                            />
                        </ListItem>

                        <ListItem 
                            button 
                            className={classes.drawerListItemNested}
                            component={Link}
                            to='/monitoring-and-evaluation/public-capacity-building'
                            divider 
                        >
                            <ListItemText 
                                primary="Public Capacity Building" 
                            />
                        </ListItem>

                    </List>
                </Collapse>

                <ListItem 
                    button 
                    divider 
                >
                    <ListItemText 
                        primary="Airbnb" 
                    />
                </ListItem>
                
                <ListItem 
                    button 
                    component={Link} 
                    to="/about-us"
                    divider 
                >
                    <ListItemText 
                        primary="About" 
                    />
                </ListItem>
               
                <ListItem 
                    button 
                    divider 
                >
                    <ListItemText 
                        primary="Contact Us" 
                    />
                </ListItem>
               
                <ListItem 
                    button 
                    component={Link} 
                    to="/auth/login"
                    divider 
                >
                    <ListItemText 
                        primary="Login" 
                    />
                </ListItem>
               
            </List>
        </>
    )
}
export default Drawer;