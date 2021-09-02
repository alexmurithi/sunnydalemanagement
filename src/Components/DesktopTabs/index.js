import React, { useState } from "react";
import { Button, Tabs, Tab } from "@material-ui/core";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Logo from "../../Assets/Logo/Logo.png";
import CustomButton from "../Button";
import { isLoggedInVar } from "../../Apollo/ReactVariables";
import { useApolloClient } from "@apollo/client";
import { IS_LOGGED_IN } from "../../GraphQL/Queries/IsLoggedIn";
import { useQuery } from "@apollo/client";

const useStyles = makeStyles((theme) => ({
  desktopTabs: {
    marginLeft: "auto",
  },
  desktopTab: {
    ...theme.desktopTab,
  },
}));

const DesktopTabs = () => {
  const classes = useStyles();
  const client = useApolloClient();
   const { data } = useQuery(IS_LOGGED_IN);

  const [tabsValue, setTabsValue] = useState(0);

  const handleTabs = (event, newValue) => {
    setTabsValue(newValue);
  };

  return (
    <>
      <Button disableRipple component={Link} to="/">
        <img edge="start" src={Logo} width={60} height={60} alt="Sunnydale" />
      </Button>

      <Tabs
        className={classes.desktopTabs}
        indicatorColor="primary"
        value={tabsValue}
        onChange={handleTabs}
      >
        <Tab
          label="Home"
          component={Link}
          className={classes.desktopTab}
          to="/"
        />

        <Tab
          label="Real Estate Management"
          component={Link}
          className={classes.desktopTab}
          to="/real-estate-and-property-management"
        />

        {/* <OnSaleTab />
                <OnRentTab /> */}
        <Tab
          label="Monitoring & Evaluation"
          component={Link}
          className={classes.desktopTab}
          to="/monitoring-and-evaluation"
        />

        <Tab
          component={Link}
          className={classes.desktopTab}
          label="About Us"
          to="/about"
        />

        <Tab
          component={Link}
          className={classes.desktopTab}
          label="Contact"
          to="/contact"
        />
      </Tabs>
     
      {data.isLoggedIn ? (
        <CustomButton
          variant="outlined"
          color="primary"
          onClick={() => {
            client.cache.evict({ fieldName: "me" });
            client.cache.gc();
            localStorage.removeItem("token");
            isLoggedInVar(false);
          }}
        >
          Sign Out
        </CustomButton>
      ) : (
        <CustomButton
          variant="outlined"
          color="primary"
          component={Link}
          to="/auth/login"
        >
          Login In
        </CustomButton>
      )}
    </>
  );
};

export default DesktopTabs;
