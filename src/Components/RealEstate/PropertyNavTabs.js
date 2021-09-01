import React, { useState } from "react";
import {
  Box,
  Tab,
  Tabs,
  AppBar,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
  RadioGroup,
  FormControlLabel,
  Button,
  Radio,
  Paper,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import PropTypes from "prop-types";

import { GET_ALL_PROPERTIES } from "../../GraphQL/Queries/GetAllProperties";
import { useQuery } from "@apollo/client";

const TabPanel = (props) => {
  const { children, ...others } = props;

  return (
    <Box
      {...others}
      role="tabpanel"
      id={`simple-tabpanel`}
      aria-labelledby={`simple-tab-`}
    >
      <Box py={2} style={{ padding: "8px 16px" }}>
        {children}
      </Box>
    </Box>
  );
};

TabPanel.propTypes = {
  children: PropTypes.node,
};

const AccordingSection = () => {
  const [roomsValue, setRoomsValue] = useState("1");
  const handleRoomsChange = (e) => {
    setRoomsValue(e.target.value);
  };
  const [bathValue, setBathValue] = useState("1");
  const handleBathChange = (e) => {
    setBathValue(e.target.value);
  };
  return (
    <Box py={1}>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>Rooms</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <RadioGroup row value={roomsValue} onChange={handleRoomsChange}>
            <FormControlLabel
              control={<Radio color="primary" />}
              label={1}
              value="1"
            />
            <FormControlLabel
              control={<Radio color="primary" />}
              label={2}
              value="2"
            />
            <FormControlLabel
              control={<Radio color="primary" />}
              label={3}
              value="3"
            />
            <FormControlLabel
              control={<Radio color="primary" />}
              label="4+"
              value="4+"
            />
          </RadioGroup>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>Bath Rooms</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <RadioGroup row value={bathValue} onChange={handleBathChange}>
            <FormControlLabel
              control={<Radio color="primary" />}
              label={1}
              value="1"
            />
            <FormControlLabel
              control={<Radio color="primary" />}
              label={2}
              value="2"
            />
            <FormControlLabel
              control={<Radio color="primary" />}
              label={3}
              value="3"
            />
            <FormControlLabel
              control={<Radio color="primary" />}
              label="4+"
              value="4+"
            />
          </RadioGroup>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

const PropertyNavTabs = () => {
  const [value, setTabsValue] = useState(0);
  const handleChange = (event, newValue) => {
    setTabsValue(newValue);
  };

  const [propertyId, setPropertyId] = useState(null);
  const handleProperty = (event) => {
    setPropertyId(event.target.value);
  };

  const { loading, data, error } = useQuery(GET_ALL_PROPERTIES);
  if (loading) return <div>Loading..</div>;
  if (error) return <div>Error</div>;
  console.log(data);

  return (
    <>
      <Paper square elevation={0}>
        <AppBar
          position="static"
          elevation={0}
          style={{ backgroundColor: "#ffffff" }}
        >
          <Tabs
            variant="fullWidth"
            value={value}
            onChange={handleChange}
            textColor="inherit"
            style={{
              color: "#0093dd",
            }}
            indicatorColor="primary"
          >
            <Tab label="For Rent" />
            <Tab label="On Sale" />
          </Tabs>
        </AppBar>

        <TabPanel>
          <form>
            <FormControl variant="outlined" fullWidth margin="dense">
              <InputLabel>Property</InputLabel>
              <Select
                value={propertyId}
                onChange={handleProperty}
                label="Property"
              >
                {data.allProperties.map((item) => (
                  <MenuItem key={item.id} value={item.id}>
                    {item.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <TextField
              label="Town or City"
              margin="dense"
              variant="outlined"
              fullWidth
              type="text"
            />
            <div>
              <TextField
                label="Min Price"
                margin="dense"
                variant="outlined"
                type="number"
                style={{
                  width: "40%",
                }}
              />
              <TextField
                label="Max Price"
                margin="dense"
                variant="outlined"
                type="number"
                style={{
                  width: "40%",
                  marginLeft: 40,
                }}
              />
            </div>

            <AccordingSection />
            <Button color="primary" variant="outlined" size="large">
              Search
            </Button>
          </form>
        </TabPanel>
      </Paper>
    </>
  );
};

export default React.memo(PropertyNavTabs);
