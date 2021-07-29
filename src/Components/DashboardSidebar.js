import React from 'react';
import {
    Drawer,Box,Avatar,Typography,Divider,List,ListItem,ListItemIcon,ListItemText,Hidden
} from '@material-ui/core';

import BarChartIcon from '@material-ui/icons/BarChart';
import PersonIcon from '@material-ui/icons/Person';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
// import { useLocation } from 'react-router';
import PropTypes from 'prop-types';

const User ={
    avatar:'../Assets/Images/simba.jpg',
    jobTitle:'Admin',
    name: "Ambrose Mugambi"
}

const Items =[
    {
        href:'/app/dashboard',
        icon:<BarChartIcon/>,
        title:'Dashboard'
    },
    {
        href:'/app/customers',
        icon:<PersonIcon/>,
        title:'Apartments'
    },
    {
        href:'/app/products',
        icon:<ShoppingBasketIcon/>,
        title:'Offices'
    }
]

const Content =(
    <Box 
        style={{
            display:"flex",
            flexDirection:"column",
            height:"100%"
        }} 
    >
        <Box 
            style={{
                display:"flex",
                flexDirection:"column",
                alignItems:"center"
            }}
            p={2} 
        >
            <Avatar 
                src={User.avatar}
                alt="Sunny Dale"
                style={{
                    cursor:"pointer",
                    width:64,
                    height:64
                }} 
            />

            <Typography variant="h5">
                {User.name}
            </Typography>

            <Typography variant="body2">
                {User.jobTitle}
            </Typography>
        </Box>

        <Divider/>

        <Box style={{}} p={2}>
            <List component="nav">
                {Items.map((item,index)=>(
                    <ListItem key={index} button>
                        <ListItemIcon>
                            {item.icon}
                        </ListItemIcon>
                        <ListItemText primary={item.title} />
                    </ListItem>
                ))}
            </List>
        </Box>

    </Box>
)

const DashboardSidebar =({onMobileClose, openMobile})=>{

    // const location =useLocation();

    // useEffect(() => {
    //     if (openMobile && onMobileClose) {
    //       onMobileClose();
    //     }
    //   }, [location.pathname]);

    // const [openRealEstate, setOpenRealEstate] =useState(false)
    

    return(
        <>
           <Hidden lgUp>
               <Drawer 
               anchor="left" 
               open={openMobile}
               onClose={onMobileClose}
               variant="temporary" 
               PaperProps={{
                   style:{
                       width:256
                   }
               }} 
               >
                   {Content}
               </Drawer>
           </Hidden>

            <Hidden mdDown>
                <Drawer 
                anchor="left" 
                open 
                variant="persistent" 
                PaperProps={{
                    style:{
                        width:256,
                        top:64,
                        height:`calc(100%-64px)`
                    }
                }}
            >
                {Content}
            </Drawer>
            </Hidden>
        </>
        
        
    )
}

DashboardSidebar.propTypes ={
    onMobileClose:PropTypes.func,
    openMobile:PropTypes.bool
}

DashboardSidebar.defaultProps={
    onMobileClose:()=>{},
    openMobile:false
}

export default DashboardSidebar;