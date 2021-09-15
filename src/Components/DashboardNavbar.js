import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Box,
  Hidden,
  IconButton,
  Badge,
  Menu,
  Card,
  CardHeader,
} from "@material-ui/core";
import { withStyles } from "@material-ui/styles";

import NotificationsIcon from "@material-ui/icons/Notifications";
import InputIcon from "@material-ui/icons/Input";
import MenuIcon from "@material-ui/icons/Menu";
import PropTypes from "prop-types";
import Image from "../Components/Image";
import Logo from "../Assets/Logo/Logo.png";
import { NavLink } from "react-router-dom";
const DashboardNavbar = ({ onMobileNavOpen, ...rest }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleNotifications = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseNotification = () => {
    setAnchorEl(null);
  };

  const StyledBadge = withStyles((theme) => ({
    badge: {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: "0 4px",
    },
  }))(Badge);

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
          <IconButton onClick={handleNotifications}>
            <StyledBadge badgeContent={4} color="primary">
              <NotificationsIcon />
            </StyledBadge>
          </IconButton>
          <Menu
            open={Boolean(anchorEl)}
            anchorEl={anchorEl}
            onClose={handleCloseNotification}
            keepMounted
          >
            <Card elevation={0}>
              <CardHeader title="jkhjjnjjhkk fgrgrsgsgsfsf"></CardHeader>
            </Card>
          </Menu>

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
