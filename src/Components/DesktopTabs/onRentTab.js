import React, {useState} from 'react';
import {
    Tab,
    Menu,
    MenuItem
} from "@material-ui/core";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {Link} from 'react-router-dom';
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(theme=>({
    onRentTab:{
        ...theme.desktopTab
    }
}))

const OnRentTab =()=>{
    const classes =useStyles()

    const[anchorEl,setAnchorEl] =useState(null)

    const handleMenu=(event)=>{
        if(anchorEl!==event.currentTarget){
            setAnchorEl(event.currentTarget)
        }
    }

    const handleCloseMenu =()=>{
        setAnchorEl(null)
    }

    const RentLinks =[
        {
            name:"Apartments",
            link:"/rent/apartments"
        },
        {
            name:"Offices",
            link:"/rent/offices"
        },
        {
            name:"Shops",
            link:"/rent/shops"
        },
        {
            name:"Land",
            link:"/rent/land"
        }
    ]

    return(
        <>
            <Tab
                label="For Rent"
                icon={<ExpandMoreIcon/>}
                component={Link}
                to ="/rents"
                className={classes.onRentTab}
                aria-owns={anchorEl ? "forrent-menu" :undefined}
                aria-haspopup="true"
                onClick={event=>handleMenu(event)}
                onMouseOver={event=>handleMenu(event)}
            />

            <Menu
                id="forrent-menu"
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleCloseMenu}
                MenuListProps={{ onMouseLeave: handleCloseMenu }}
            >
                {RentLinks.map((item,index)=>(
                    <MenuItem
                        component={Link}
                        to={item.link}
                        key={index}
                    >
                        {item.name}
                    </MenuItem>
                ))}
            </Menu>
        </>
    )
}

export default OnRentTab;