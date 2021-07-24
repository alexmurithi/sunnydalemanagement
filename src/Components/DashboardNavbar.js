import React from 'react';
import {
    AppBar,Toolbar,Box,Hidden,IconButton,Badge
} from '@material-ui/core';
import {Link} from 'react-router-dom';
import Logo from '../Components/Logo';
import NotificationsIcon from '@material-ui/icons/Notifications';
import InputIcon from '@material-ui/icons/Input';
import MenuIcon from '@material-ui/icons/Menu';
import PropTypes from 'prop-types';

const DashboardNavbar =({onMobileNavOpen, ...rest})=>{
    return(
        <AppBar 
            color="primary" 
            elevation={0}
            {...rest} 
        >
            <Toolbar>
                <Link to="/">
                  <Logo width={40}/>
                </Link>

                <Box 
                    style={{
                       flexGrow:1
                    }} 
                />
                    <Hidden mdDown>
                        <IconButton color="inherit">
                            <Badge badgeContent={4} >
                                <NotificationsIcon/>
                            </Badge>
                        </IconButton>

                        <IconButton color="inherit">
                           <InputIcon/>
                        </IconButton>
                    </Hidden>

                    <Hidden lgUp>
                        <IconButton color="inherit" onClick={onMobileNavOpen}>
                            <MenuIcon/>
                        </IconButton>
                    </Hidden>

            </Toolbar>
        </AppBar>
    )
}

DashboardNavbar.propTypes={
    onMobileNavOpen:PropTypes.func
}

export default DashboardNavbar