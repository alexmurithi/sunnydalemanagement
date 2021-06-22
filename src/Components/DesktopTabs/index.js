import React, {useState} from 'react';
import {
    Button,
    ButtonBase,
    Tabs,
    Tab,
    Menu,
    MenuItem, Divider
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

    return(
        <>
            <Button disableRipple component={Link} to="/"
            >
                <img edge="start"
                     src={Logo} width={60}
                     height={60} alt="Sunnydale"
                />
            </Button>
            <Tabs className={classes.desktopTabs}  >

                <Button component={Link} className={classes.desktopTab}>
                    Home

                </Button>

                <Button component={Link}
                        className={classes.desktopTab}
                        aria-owns={setOnSaleMenu ? "onsale-menu" : undefined }
                        aria-haspopup={setOnSaleMenu ? true : undefined}
                        onClick={event=>handleOnSaleMenu(event)}
                >
                    On Sale
                    <ExpandMoreIcon />
                </Button>

                <Button component={Link}
                        className={classes.desktopTab}
                        aria-owns={setOnRentMenu ? "onrent-menu" : undefined }
                        aria-haspopup={setOnRentMenu ? true : undefined}
                        onClick={event=>handleOnRentMenu(event)}
                >
                    For Rent
                    <ExpandMoreIcon />
                </Button>

                <Button component={Link}
                        className={classes.desktopTab}
                        aria-owns={setEnvironmentMenu ? "environment-menu" : undefined }
                        aria-haspopup={setEnvironmentMenu ? true : undefined}
                        onClick={event=>handleEnvironmentMenu(event)}
                >
                    Environmental Services
                    <ExpandMoreIcon />
                </Button>
                <Button component={Link} className={classes.desktopTab}>
                    About Us
                </Button>

                <Button component={Link} className={classes.desktopTab}>
                    Contact
                </Button>

                <Button
                    variant="contained"
                    color="primary"
                    className={classes.loginBtn}
                >
                    Login
                </Button>
            </Tabs>

            <Menu id="onsale-menu"
                  onSaleMenu={onSaleMenu}
                  open={Boolean(onSaleMenu)}
                  onClose={handleCloseSaleMenu}
                  MenuListProps={{onClick:handleCloseSaleMenu}}
                  classes={{paper:classes.onSaleMenu}}
                  elevation={2}
            >
              <MenuItem classes={{root:classes.onSaleMenuItem}}>
                  Apartments
              </MenuItem>

                <MenuItem>Offices</MenuItem>
                <MenuItem>Shops</MenuItem>
                <MenuItem>Lands</MenuItem>
            </Menu>

            <Menu id="onrent-menu"
                  onRentMenu={onRentMenu}
                  open={Boolean(onRentMenu)}
                  onClose={handleCloseRentMenu}
                  MenuListProps={{onClick:handleCloseRentMenu}}
                  classes={{paper:classes.onRentMenu}}
                  elevation={2}
            >
                <MenuItem classes={{root:classes.onRentMenuItem}}>Apartments</MenuItem>

                <MenuItem>Offices</MenuItem>
                <MenuItem>Shops</MenuItem>
                <MenuItem>Lands</MenuItem>
            </Menu>

            <Menu id="environment-menu"
                  onEnvironmentMenu={onEnvironmentMenu}
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