import React from "react";
import { Outlet } from "react-router-dom";
import MainNavbar from "../Containers/Header";
import { Box, Container, Typography, Grid, Hidden } from "@material-ui/core";
import PropertiesChips from "../Components/RealEstate/PropertiesChips";

import PropertyNavTabs from "../Components/RealEstate/PropertyNavTabs";
import MobilePropertyNavTabs from "../Components/RealEstate/MobilePropertyNavTabs";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  chips: {
    display: "flex",
    justifyContent: "flex-start",
    "& > *": {
      marginRight: theme.spacing(2),
    },
  },
}));

const RealEstateContent = (props) => {
  return (
    <Box>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={12} md={12} lg={8} xl={8}>
          <Outlet />
        </Grid>
        <Hidden mdDown>
          <Grid item lg={4} xl={4}>
            <PropertyNavTabs />
          </Grid>
        </Hidden>
      </Grid>
    </Box>
  );
};

const RealEstateLayout = () => {
  const classes = useStyles();
  return (
    <>
      <MainNavbar />

      <Container maxWidth="xl">
        <Hidden mdDown>
          <Box className={classes.chips} py={2}>
            <PropertiesChips />
          </Box>
        </Hidden>

        <MobilePropertyNavTabs />
        <RealEstateContent />
      </Container>
    </>
  );
};

export default React.memo(RealEstateLayout);
