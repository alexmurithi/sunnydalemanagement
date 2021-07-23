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

    const [openOnSale, setOpenOnSale] =useState(false)
    const [openForRent, setOpenForRent] =useState(false)
    const [openEServices, setOpenEServices] =useState(false)

    const toggleOnSale =()=>{
        setOpenOnSale(!openOnSale)
    }

    const toggleForRent =()=>{
        setOpenForRent(!openForRent)
    }
    const toggleEServices =()=>{
        setOpenEServices(!openEServices)
    }
    return(
        <>
            <List>
                <ListItem button >
                    <Button disableRipple component={Link} to="/" className={classes.drawerLogoBtn}
                    >
                        <img edge="start"
                             src={Logo} width="100%"
                             height={60} alt="Sunnydale"
                             style={{objectFit:"contain"}}

                        />
                    </Button>
                </ListItem>
                <Divider />

                <ListItem button onClick={toggleOnSale}>
                    <ListItemText primary="On Sale" />
                    {openOnSale ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Divider />
                <Collapse in={openOnSale} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItem button className={classes.drawerListItemNested}>
                            <ListItemText primary="Apartments" />
                        </ListItem>
                        <ListItem button className={classes.drawerListItemNested}>
                            <ListItemText primary="Offices" />
                        </ListItem>
                        <ListItem button className={classes.drawerListItemNested}>
                            <ListItemText primary="Shops" />
                        </ListItem>
                        <ListItem button className={classes.drawerListItemNested}>
                            <ListItemText primary="Land" />
                        </ListItem>
                    </List>
                </Collapse>

                <ListItem button onClick={toggleForRent}>
                    <ListItemText primary="For Rent" />
                    {openForRent ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Divider />
                <Collapse in={openForRent} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItem button className={classes.drawerListItemNested}>
                            <ListItemText primary="Apartments" />
                        </ListItem>
                        <ListItem button className={classes.drawerListItemNested}>
                            <ListItemText primary="Offices" />
                        </ListItem>
                        <ListItem button className={classes.drawerListItemNested}>
                            <ListItemText primary="Shops" />
                        </ListItem>
                        <ListItem button className={classes.drawerListItemNested}>
                            <ListItemText primary="Land" />
                        </ListItem>
                    </List>
                </Collapse>

                <ListItem button onClick={toggleEServices}>
                    <ListItemText primary="Environmental Services" />
                    {openEServices ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Divider />
                <Collapse in={openEServices} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItem button className={classes.drawerListItemNested}>
                            <ListItemText primary="Environmental Audit" />
                        </ListItem>
                        <ListItem button className={classes.drawerListItemNested}>
                            <ListItemText primary="Monitoring & Evaluation" />
                        </ListItem>
                        <ListItem button className={classes.drawerListItemNested}>
                            <ListItemText primary="Conservation & Protection" />
                        </ListItem>
                        <ListItem button className={classes.drawerListItemNested}>
                            <ListItemText primary="Waste Disposal & Management" />
                        </ListItem>
                        <ListItem button className={classes.drawerListItemNested}>
                            <ListItemText primary="Environmental Impact Assessment" />
                        </ListItem>
                        <ListItem button className={classes.drawerListItemNested}>
                            <ListItemText primary="Environmental Research" />
                        </ListItem>
                        <ListItem button className={classes.drawerListItemNested}>
                            <ListItemText primary="Water & Forest Resources" />
                        </ListItem>
                        <ListItem button className={classes.drawerListItemNested}>
                            <ListItemText primary="Public Capacity Building" />
                        </ListItem>
                    </List>
                </Collapse>
                <ListItem button >
                    <ListItemText primary="Airbnb"/>
                </ListItem>
                <Divider />
                <ListItem button component={Link} to="/about-us">
                    <ListItemText primary="About"/>
                </ListItem>
                <Divider />
                <ListItem button >
                    <ListItemText primary="Contact Us"/>
                </ListItem>
                <Divider />
                <ListItem button component={Link} to="/auth/login">
                    <ListItemText primary="Login"/>
                </ListItem>
                <Divider />
            </List>
        </>
    )
}
export default Drawer;