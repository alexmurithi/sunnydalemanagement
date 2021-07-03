import React, {useState} from 'react';

import {
  AppBar,
  Toolbar,
  Container,

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
import DesktopTabs from "../../Components/DesktopTabs";

const useStyles =makeStyles(theme=>({
  root:{
     top:"10px",
      backgroundColor:theme.palette.white,
      color:theme.palette.black.main
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
                elevation={0}
                position="static"
        >
          <Container>
              <Toolbar>
                {
                  isMobileTablet ?
                     <DrawerMd/>
                      :
                     <DesktopTabs />
                }
              </Toolbar>
          </Container>
      </AppBar>
      
      
    )
}


export default Header;