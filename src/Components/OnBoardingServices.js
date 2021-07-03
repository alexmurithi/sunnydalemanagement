import React, {useState} from 'react';
import PropTypes from "prop-types"
import {
    Tabs,
    Tab, Box, Typography,Paper,Divider,IconButton,
} from "@material-ui/core";

import {makeStyles} from "@material-ui/styles";
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import {ReactComponent as ApartmentSvg} from "../Assets/Icons/apartment.svg";
import {ReactComponent as OfficeSvg} from "../Assets/Icons/company.svg";
import {ReactComponent as ShopSvg} from "../Assets/Icons/shop.svg";
import {ReactComponent as LandSvg} from "../Assets/Icons/land.svg";
import {ReactComponent as AirbnbSvg} from "../Assets/Icons/bedroom.svg";

const  useStyles =makeStyles((theme)=>({
    tabsOnServ:{
        flexDirection:"row",
        maxWidth:"170px",
        textTransform:"none",
    },
    OnBoardingTabs:{
        backgroundColor:theme.palette.white,
        color:theme.palette.black,
        width:"385px",
        "& .MuiTabs-indicator":{
            color:"red !important"
        }
    },
}))

const TabPanel =(props) =>{
    const {children,value,index,...others} =props

    return(
        <Paper
            role="tabpanel"
            hidden={value !== index}
            id={`tabpanel-${index}`}
            aria-labelledby={`tab-${index}`}
            {...others}
        >
            {value === index && (
                <>
                   {children}
                </>
            )}
        </Paper>
    )
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

const OnBoardingServices =() =>{
    const classes =useStyles();

    const [value,setValue] =useState(0);
    const [valueReal,setRealValue] =useState(0);
    const [valueEnv,setEnvValue] =useState(0);

    const handleChange =(event,newValue) =>{
        setValue(newValue)
    }
    const handleRealChange =(event,newValue) =>{
        setRealValue(newValue)
    }
    const handleEnvChange =(event,newValue) =>{
        setEnvValue(newValue)
    }

return(
    <>
        <Tabs
            value={value}
            onChange={handleChange}
            className={classes.OnBoardingTabs}
            indicatorColor="primary"
        >
            <Tab label="Real Estate"  />

            <Tab label="Environmental Services"  />
        </Tabs>

        <TabPanel value={value} index={0}>
            <Tabs value={valueReal}
                  onChange={handleRealChange}>
                <Tab
                    classes={{wrapper:classes.tabsOnServ}}
                    label="Apartments"
                    icon={<ApartmentSvg width={250} height={50}/>}
                />
                <Divider orientation="vertical" flexItem/>
                <Tab
                    classes={{wrapper:classes.tabsOnServ}}
                    label="Office"
                    icon={<OfficeSvg width={250} height={50}/>}
                />
                <Divider orientation="vertical" flexItem/>
                <Tab
                    classes={{wrapper:classes.tabsOnServ}}
                    label="Shops"
                    icon={<ShopSvg width={250} height={50}/>}
                />
                <Divider orientation="vertical" flexItem/>
                <Tab
                    classes={{wrapper:classes.tabsOnServ}}
                    label="Airbnbs"
                    icon={<AirbnbSvg width={250} height={50}/>}
                />
                <Divider orientation="vertical" flexItem/>
                <Tab
                    classes={{wrapper:classes.tabsOnServ}}
                    label="Lands"
                    icon={<LandSvg width={250} height={50}/>}
                />
                <Divider orientation="vertical" flexItem/>
            </Tabs>

        </TabPanel>

        <TabPanel value={value} index={1}>
            <Tabs value={valueEnv}
                  onChange={handleEnvChange}>
                <Tab
                    classes={{wrapper:classes.tabsOnServ}}
                    label="Environmental Audit"
                />
                <Divider orientation="vertical" flexItem/>
                <Tab
                    classes={{wrapper:classes.tabsOnServ}}
                    label="Monitoring & Protection"
                />
                <Divider orientation="vertical" flexItem/>
                <Tab
                    classes={{wrapper:classes.tabsOnServ}}
                    label="Environmental Impact Assessment"
                />
                <Tab
                    classes={{wrapper:classes.tabsOnServ}}
                    label="Waste Disposal & Management"
                />
                <Divider orientation="vertical" flexItem/>
                <Tab
                    classes={{wrapper:classes.tabsOnServ}}
                    label="Environmental Research"
                />
                <Divider orientation="vertical" flexItem/>
                <IconButton>
                    <Typography>More </Typography>
                    <ArrowRightAltIcon fontSize="large"/>
                </IconButton>
            </Tabs>

        </TabPanel>
    </>
)
}

export default OnBoardingServices;