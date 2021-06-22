import React, {useState} from 'react';
import {
    Button,

    Tabs,
    Tab,
    Menu,
    MenuItem,
} from '@material-ui/core';
import {Link} from 'react-router-dom';
import {makeStyles} from "@material-ui/core/styles";
import Logo from "../../Assets/Logo/Logo.png";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles =makeStyles(theme=>({
    desktopTabs:{
        marginLeft:"auto",
    },
    desktopTab:{
        textTransform:"none",
        fontSize:"16px",
        color:"#000000",
        minWidth:"120px",


    },
    loginBtn:{
        borderRadius:"0",
        fontWeight:"bold",
        width:"150px",
        height:"40px"
    },
    onSaleMenu:{
        position:"absolute",
        left:"380px !important",
        top:"65px !important",
        borderRadius:"0",
       width:"250px",
        "&::after":{
            content:"",
            width:0,
            height:0,
            borderLeft:"5px solid transparent",
            borderRight:"5px solid transparent",
            borderBottom:"35px solid red"
        }
    },
    onSaleMenuItem:{
      color:"#000000"
    },

    onRentMenu:{
      position:"absolute",
        left:"500px !important",
        top:"65px !important",
        width:"250px"
    },
    onRentMenuItem:{

    },
    onEnvironmentMenu:{
        position:"absolute",
        left:"700px !important",
        top:"65px !important",
        width:"auto"
    },
    onEnvironmentMenuItem:{

    }
}))

const DesktopTabs =() =>{
const classes =useStyles()

    const [onSaleMenu, setOnSaleMenu] =useState(null)
    const [onRentMenu, setOnRentMenu] =useState(null)
    const [onEnvironmentMenu, setEnvironmentMenu] =useState(null)
    const [tabsValue, setTabsValue] =useState(0)

    const handleOnSaleMenu =(event)=>{
       setOnSaleMenu(event.currentTarget)
    }

    const handleOnRentMenu =(event)=>{
     setOnRentMenu(event.currentTarget)
    }

    const handleEnvironmentMenu =(event)=>{
        setEnvironmentMenu(event.currentTarget)
    }

    const handleCloseSaleMenu =()=>{
      setOnSaleMenu(null)
    }

    const handleCloseRentMenu =()=>{
     setOnRentMenu(null)
    }

    const handleCloseEnvironmentMenu =()=>{
        setEnvironmentMenu(null)
    }

    const handleTabs =(event,newValue)=>{
       setTabsValue(newValue)
    }

    const onSaleOptions =[
        {
            name:"Apartments",
            link:"/on-sale/apartments"
        },
        {
            name:"Offices",
            link:"/on-sale/offices"
        },
        {
            name:"Shops",
            link:"/on-sale/shops"
        },
        {
            name:"Land",
            link:"/on-sale/land"
        }
    ]

    const RentOptions =[
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
                    label="On Sale"
                    className={classes.desktopTab}
                    aria-owns={setOnSaleMenu ? "onsale-menu" : undefined }
                    aria-haspopup={setOnSaleMenu ? true : undefined}
                    onClick={event=>handleOnSaleMenu(event)}
                    to="/on-sale"
                    icon={<ExpandMoreIcon />}
                />

                <Tab component={Link}
                     className={classes.desktopTab}
                     aria-owns={setOnRentMenu ? "onrent-menu" : undefined }
                     aria-haspopup={setOnRentMenu ? true : undefined}
                     onClick={event=>handleOnRentMenu(event)}
                     label="For Rent"
                     icon={<ExpandMoreIcon/>}
                     to="/for-rent"
                />

                <Tab component={Link}
                     className={classes.desktopTab}
                     aria-owns={setEnvironmentMenu ? "environment-menu" : undefined }
                     aria-haspopup={setEnvironmentMenu ? true : undefined}
                     onClick={event=>handleEnvironmentMenu(event)}
                     label="Environmental Services"
                     icon={<ExpandMoreIcon />}
                     to="/environmental-services"
                />

                <Tab
                    component={Link}
                    className={classes.desktopTab}
                    label ="About Us"
                    to="/about-us"
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
            >
                Login
            </Button>


            <Menu id="onsale-menu"
                  anchorEl={onSaleMenu}
                  open={Boolean(onSaleMenu)}
                  onClose={handleCloseSaleMenu}
                  MenuListProps={{onClick:handleCloseSaleMenu}}
                  classes={{paper:classes.onSaleMenu}}
                  elevation={2}
            >
                {onSaleOptions.map((saleOption,i)=>(
                    <MenuItem
                        component={Link}
                        key={i}
                        to={saleOption.link}
                    >
                        {saleOption.name}
                    </MenuItem>
                ))}
            </Menu>

            <Menu id="onrent-menu"
                  anchorEl={onRentMenu}
                  open={Boolean(onRentMenu)}
                  onClose={handleCloseRentMenu}
                  MenuListProps={{onClick:handleCloseRentMenu}}
                  classes={{paper:classes.onRentMenu}}
                  elevation={2}
            >
                {RentOptions.map((rentOption,i)=>(
                    <MenuItem
                        component={Link}
                        key={i}
                        to={rentOption.link}
                    >
                        {rentOption.name}
                    </MenuItem>
                ))}
            </Menu>

            <Menu id="environment-menu"
                  anchorEl={onEnvironmentMenu}
                  open={Boolean(onEnvironmentMenu)}
                  onClose={handleCloseEnvironmentMenu}
                  MenuListProps={{onClick:handleCloseEnvironmentMenu}}
                  classes={{paper:classes.onEnvironmentMenu}}
                  elevation={2}
            >
                <MenuItem classes={{root:classes.onEnvironmentMenuItem}}
                >
                    Environmental Audit
                </MenuItem>

                <MenuItem>
                    Environmental Monitoring & Evaluation
                </MenuItem>
                <MenuItem>
                    Environmental Conservation & Protection
                </MenuItem>
                <MenuItem>
                    Waste Disposal & Management
                </MenuItem>
                <MenuItem>
                    Environmental Impact Assessment
                </MenuItem>
                <MenuItem>
                    Environmental Research
                </MenuItem>
                <MenuItem>
                    Water & Forest Resources
                </MenuItem>
                <MenuItem>
                    Public Capacity Building
                </MenuItem>
            </Menu>


        </>
    )
}

export default DesktopTabs;