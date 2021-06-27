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
    EnvironmentalTab:{
        ...theme.desktopTab
    }
}))

const EnvironmentalTab = ()=>{
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

    const EnvironmentalLinks =[
        {
            name:"Environmental Audit",
            link:"/environmental-services/audit"
        },
        {
            name:"Environmental Monitoring & Evaluation",
            link:"/environmental-services/monitoring-and-evaluation"
        },
        {
            name:"Environmental Monitoring & Evaluation",
            link:"/environmental-services/monitoring-and-evaluation"
        },
    ]

    return(
        <>
            <Tab
                label="Environmental"
                icon={<ExpandMoreIcon/>}
                component={Link}
                to="/environmental"
                className={classes.EnvironmentalTab}
                aria-owns={anchorEl ? "environmental-menu" :undefined}
                aria-haspopup="true"
                onClick={event=>handleMenu(event)}
                onMouseOver={event=>handleMenu(event)}
            />

            <Menu
                id="environmental-menu"
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleCloseMenu}
                MenuListProps={{ onMouseLeave: handleCloseMenu }}
            >
                {EnvironmentalLinks.map((item,index)=>(
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

export default EnvironmentalTab;