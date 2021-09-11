import React from "react";
import {
  AppBar,
  Toolbar,
  Box,
  Hidden,
  IconButton,
  Badge,
} from "@material-ui/core";

import NotificationsIcon from "@material-ui/icons/Notifications";
import InputIcon from "@material-ui/icons/Input";
import MenuIcon from "@material-ui/icons/Menu";
import PropTypes from "prop-types";
import Image from "../Components/Image";
import Logo from "../Assets/Logo/Logo.png";
import { NavLink } from "react-router-dom";
const DashboardNavbar = ({ onMobileNavOpen, ...rest }) => {
  return (
    <AppBar
      style={{
        backgroundColor: "#ffffff",
      }}
      elevation={1}
      {...rest}
    >
      <Toolbar>
        <NavLink to="/">
          <Image
            src={Logo}
            style={{ width: "60px", height: "60px", objectFit: "contain" }}
          />
        </NavLink>

        <Box
          style={{
            flexGrow: 1,
          }}
        />
        <Hidden mdDown>
          <IconButton>
            <Badge badgeContent={4}>
              <NotificationsIcon color="primary" />
            </Badge>
          </IconButton>

          <IconButton>
            <InputIcon color="primary" />
          </IconButton>
        </Hidden>

        <Hidden lgUp>
          <IconButton color="inherit" onClick={onMobileNavOpen}>
            <MenuIcon color="primary" />
          </IconButton>
        </Hidden>
      </Toolbar>
    </AppBar>
  );
};

DashboardNavbar.propTypes = {
  onMobileNavOpen: PropTypes.func,
};

export default React.memo(DashboardNavbar);
