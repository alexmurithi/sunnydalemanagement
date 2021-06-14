import React, {useState} from 'react';

import {
  AppBar,
  Toolbar,
  Container,
  Tabs,
  Tab,
  Button,
  IconButton,
  useMediaQuery,
} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import Logo from '../../Assets/Logo/Logo.png';
import {Link} from 'react-router-dom';
import {useTheme} from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import DrawerList from '../../Components/DrawerList';

import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import CloseIcon from '@material-ui/icons/Close';
const useStyles =makeStyles(theme=>({
  root:{
     top:"10px",
  },
    desktopTabs:{
      marginLeft:"auto",
    },
  desktopTab:{
    textTransform:"none",
    fontSize:"18px",
    fontWeight:"bold",
    color:"#000000",
    minWidth:"120px"
      },
  loginBtn:{
    borderRadius:"0",
    fontWeight:"bold",
    width:"150px",
    height:"40px"
  },
  drawerToggle:{
    marginLeft:"auto",
    "&:hover":{
      backgroundColor:"transparent"
    }
  },
  drawerToggleIcon:{
    color:"#000000",
    height:"40px",
    width:"40px",

  },
  swipeableDrawer:{
    width:"280px",
    overflow:"auto"
  },
 drawerTabsList:{
    marginLeft:"auto"
 }

  
}));

const Header =()=>{
  const classes =useStyles();
  const theme =useTheme();
  const isMobileTablet =useMediaQuery(theme.breakpoints.down('md'));
  const [drawerStatus, setDrawerStatus] = useState(false)


  const DrawerMd =()=>(
      <>
        <SwipeableDrawer
            open={drawerStatus}
            onClose={()=>setDrawerStatus(false)}
            onOpen={()=>setDrawerStatus(true)}
            classes={{paper:classes.swipeableDrawer}}
        >
         <DrawerList />

        </SwipeableDrawer>

          <Button disableRipple component={Link} to="/"
          >
            <img edge="start"
                 src={Logo} width={60}
                 height={60} alt="Sunnydale"
            />
          </Button>


        <IconButton className={classes.drawerToggle} onClick={()=>setDrawerStatus(!drawerStatus)}>
          {
            !drawerStatus ?
                <MenuIcon fontSize="large" className={classes.drawerToggleIcon}/>
              :
                <CloseIcon  fontSize="large" className={classes.drawerToggleIcon} />
          }
        </IconButton>

      </>
  )
    return(
        <AppBar className={classes.root}
                elevation={2}
                color="navbar"
                position="static"
        >
          <Container>
              <Toolbar>
                {
                  isMobileTablet ?
                     <DrawerMd/>
                      :
                      (
                          <>
                            <Button disableRipple component={Link} to="/"
                            >
                              <img edge="start"
                                   src={Logo} width={60}
                                   height={60} alt="Sunnydale"
                              />
                            </Button>
                            <Tabs className={classes.desktopTabs}  >
                              <Tab label="Home"
                                   className={classes.desktopTab}
                                   component={Link}
                                   to="/"
                              />

                              <Tab label="On Sale"
                                   className={classes.desktopTab}
                                   component={Link}
                                   to="/on-sale"
                              />

                              <Tab label="For Rent"
                                   className={classes.desktopTab}
                                   component={Link}
                              />

                              <Tab label="Environmental Services"
                                   className={classes.desktopTab}
                                   component={Link}
                              />

                              <Tab label="About"
                                   className={classes.desktopTab}
                                   component={Link}
                              />

                              <Tab label="Contact Us"
                                   className={classes.desktopTab}
                                   component={Link}
                              />
                              <Button
                                  variant="contained"
                                  color="primary"
                                  className={classes.loginBtn}
                              >
                                Login
                              </Button>
                            </Tabs>
                          </>
                      )
                }
              </Toolbar>
          </Container>
      </AppBar>
      
      
    )
}


export default Header;