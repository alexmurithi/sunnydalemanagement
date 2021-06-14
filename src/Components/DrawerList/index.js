import React, {useState} from 'react';
import {
    Collapse,
    Divider,
    List,
    ListItem,
    ListItemText,

} from '@material-ui/core'
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import {makeStyles} from '@material-ui/core/styles';


const useStyles =makeStyles(theme=>({
    drawerListItemNested:{
        paddingLeft:theme.spacing(4)
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
                    <ListItemText primary="Home"/>
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
                <ListItem button >
                    <ListItemText primary="About"/>
                </ListItem>
                <Divider />
                <ListItem button >
                    <ListItemText primary="Contact Us"/>
                </ListItem>
                <Divider />
                <ListItem button >
                    <ListItemText primary="Login"/>
                </ListItem>
                <Divider />
            </List>
        </>
    )
}
export default Drawer;