import React, {useState} from 'react';
import {
    Button,
    Tabs,
    Tab,
} from '@material-ui/core';
import {Link} from 'react-router-dom';
import {makeStyles} from "@material-ui/core/styles";
import Logo from "../../Assets/Logo/Logo.png";
// import OnSaleTab from "./OnSaleTab";
// import OnRentTab from "./onRentTab";

const useStyles =makeStyles(theme=>({
    desktopTabs:{
        marginLeft:"auto",
    },
    desktopTab:{
        ...theme.desktopTab

    },
    loginBtn:{
        borderRadius:"0",
        fontWeight:"bold",
        width:"150px",
        height:"40px"
    },

}))

const DesktopTabs =() =>{
const classes =useStyles()

       const [tabsValue, setTabsValue] =useState(0)

       const handleTabs =(event,newValue)=>{
       setTabsValue(newValue)
    }

    return(
        <>
            <Button disableRipple component={Link} to="/"
            >
                <img edge="start"
                     src={Logo} width={60}
                     height={60} alt="Sunnydale"
                />
            </Button>

            <Tabs
                className={classes.desktopTabs}
                indicatorColor="primary"
                value ={tabsValue}
                onChange={handleTabs}
            >
                <Tab
                    label="Home"
                    component={Link} className={classes.desktopTab}
                    to="/"
                />

                <Tab
                    label="Real Estate Management"
                    component={Link} className={classes.desktopTab}
                    to="/"
                />

                {/* <OnSaleTab />
                <OnRentTab /> */}
                <Tab
                    label="Monitoring & Evaluation"
                    component={Link} className={classes.desktopTab}
                    to="/monitoring-and-evaluation"
                />
               

                <Tab
                    component={Link}
                    className={classes.desktopTab}
                    label ="About Us"
                    to="/about"
                />

                <Tab
                    component={Link}
                    className={classes.desktopTab}
                    label="Contact"
                    to="/contact"
                />

            </Tabs>

            <Button
                variant="contained"
                color="primary"
                className={classes.loginBtn}
                component={Link}
                to="/auth/login"
            >
                Login
            </Button>

        </>
    )
}

export default DesktopTabs;