import React from "react";
import {
  Drawer,
  Box,
  Avatar,
  Typography,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Hidden,
} from "@material-ui/core";

import BarChartIcon from "@material-ui/icons/BarChart";
import ApartmentIcon from "@material-ui/icons/Apartment";
import AssessmentIcon from "@material-ui/icons/Assessment";
// import {makeStyles} from "@material-ui/core";
import { Link } from "react-router-dom";
// import { useLocation } from 'react-router';
import PropTypes from "prop-types";

// const useStyles =makeStyles(theme=>({

// }))

const User = {
  avatar: "../Assets/Images/simba.jpg",
  jobTitle: "Admin",
  name: "Ambrose Mugambi",
};

const Items = [
  {
    href: "/admin/dashboard",
    icon: <BarChartIcon />,
    title: "Dashboard",
  },
  {
    href: "/admin/property-management",
    icon: <ApartmentIcon />,
    title: "Property Management",
  },
  {
    href: "/admin/monitoring-and-evaluation",
    icon: <AssessmentIcon />,
    title: "Monitoring & Evaluation",
  },
];

const Content = () => {
  //  const classes= useStyles()

  return (
    <Box
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
      }}
    >
      <Box
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
        p={2}
      >
        <Avatar
          src={User.avatar}
          alt="Sunny Dale"
          style={{
            cursor: "pointer",
            width: 64,
            height: 64,
          }}
        />

        <Typography variant="h5" color="textPrimary">
          {User.name}
        </Typography>

        <Typography variant="body2" color="textSecondary">
          {User.jobTitle}
        </Typography>
      </Box>

      <Divider />

      <Box p={2}>
        <List component="nav">
          {Items.map((item, index) => (
            <ListItem key={index} button component={Link} to={item.href}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText secondary={item.title} />
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  );
};

const DashboardSidebar = ({ onMobileClose, openMobile }) => {
  return (
    <>
      <Hidden lgUp>
        <Drawer
          anchor="left"
          open={openMobile}
          onClose={onMobileClose}
          variant="temporary"
          PaperProps={{
            style: {
              width: 256,
            },
          }}
        >
          <Content />
        </Drawer>
      </Hidden>

      <Hidden mdDown>
        <Drawer
          anchor="left"
          open
          variant="persistent"
          PaperProps={{
            style: {
              width: 256,
              top: 65,
              height: `calc(100%-64px)`,
            },
          }}
        >
          <Content />
        </Drawer>
      </Hidden>
    </>
  );
};

DashboardSidebar.propTypes = {
  onMobileClose: PropTypes.func,
  openMobile: PropTypes.bool,
};

DashboardSidebar.defaultProps = {
  onMobileClose: () => {},
  openMobile: false,
};

export default React.memo(DashboardSidebar);
