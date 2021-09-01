import React, { useState } from "react";

import {
  Grid,
  Accordion,
  Typography,
  AccordionSummary,
  AccordionDetails,
  TextField,
} from "@material-ui/core";

import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import PropertySelect from "./PropertySelect";
import PropertyTypeSelect from "./PropertyTypeSelect";
import SunnyEditor from "../../SunnyEditor";
import PropertyAmenity from "./Amenities";
import PropertyExternals from "./Externals";
import PropertyFiles from "./Files";
import PropertyThumbNail from "./ThumbNail";

const PropertyDetails = ({
  title,
  titleCallBack,
  county,
  countyCallBack,
  city,
  cityCallBack,
  town,
  rooms,
  price,
  priceCallBack,
  bathrooms,
  agentName,
  agentPhone,
  agentNameCallBack,
  agentPhoneCallBack,
  bathroomsCallBack,
  roomsCallBack,
  townCallBack,
  streetAddress,
  streetAddressCallBack,
  classes,
  ...rest
}) => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h5" color="textSecondary">
            Property Details
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              <TextField
                label="Title"
                type="text"
                variant="filled"
                required
                value={title}
                onChange={titleCallBack}
                helperText="eg. 2 Bedroom for sale in Ruiru"
                fullWidth
                margin="dense"
              />
            </Grid>
            <Grid item container spacing={2}>
              <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
                <PropertySelect {...rest} />
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
                <PropertyTypeSelect {...rest} />
              </Grid>
            </Grid>

            <Grid item container spacing={1}>
              <Grid item xs={12} sm={12} md={12} lg={3} xl={3}>
                <TextField
                  label="County"
                  type="text"
                  variant="filled"
                  required
                  value={county}
                  onChange={countyCallBack}
                  helperText="eg. Kiambu"
                  fullWidth
                  margin="dense"
                />
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={3} xl={3}>
                <TextField
                  label="Town"
                  type="text"
                  variant="filled"
                  required
                  value={town}
                  onChange={townCallBack}
                  helperText="eg. Ruiru"
                  fullWidth
                  margin="dense"
                />
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={3} xl={3}>
                <TextField
                  label="City"
                  type="text"
                  variant="filled"
                  value={city}
                  onChange={cityCallBack}
                  helperText="eg. 2 Muthuga"
                  fullWidth
                  margin="dense"
                />
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={3} xl={3}>
                <TextField
                  label="Steet Address"
                  type="address"
                  variant="filled"
                  required
                  value={streetAddress}
                  onChange={streetAddressCallBack}
                  helperText="eg. Opposite Naivas Supermarket"
                  fullWidth
                  margin="dense"
                />
              </Grid>
            </Grid>
            <Grid item container spacing={1}>
              <Grid item xs={12} sm={12} md={12} lg={4} xl={4}>
                <TextField
                  label="Price"
                  type="number"
                  variant="filled"
                  value={price}
                  onChange={priceCallBack}
                  helperText="eg. 25000 "
                  fullWidth
                  margin="dense"
                />
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={4} xl={4}>
                <TextField
                  label="No of Rooms"
                  type="number"
                  variant="filled"
                  value={rooms}
                  onChange={roomsCallBack}
                  helperText="eg. 2 "
                  fullWidth
                  margin="dense"
                />
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={4} xl={4}>
                <TextField
                  label="No of Bath Rooms"
                  type="number"
                  variant="filled"
                  value={bathrooms}
                  onChange={bathroomsCallBack}
                  helperText="eg. 1"
                  fullWidth
                  margin="dense"
                />
              </Grid>
            </Grid>
            <Grid item container spacing={1}>
              <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
                <TextField
                  label="Agent Name"
                  type="text"
                  variant="filled"
                  value={agentName}
                  onChange={agentNameCallBack}
                  helperText="eg. Elias Kiragu"
                  fullWidth
                  margin="dense"
                />
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
                <TextField
                  label="Agent Phone"
                  type="tel"
                  variant="filled"
                  value={agentPhone}
                  onChange={agentPhoneCallBack}
                  helperText="eg. +254712345678"
                  fullWidth
                  margin="dense"
                />
              </Grid>
            </Grid>
          </Grid>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h5" color="textSecondary">
            Description
          </Typography>
        </AccordionSummary>

        <AccordionDetails>
          <SunnyEditor {...rest} />
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h5" color="textSecondary">
            Amenities available for this Property
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <PropertyAmenity {...rest} />
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h5" color="textSecondary">
            Externals available for this Property
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <PropertyExternals {...rest} />
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === "panel5"}
        onChange={handleChange("panel5")}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h5" color="textSecondary">
            Upload Images
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <PropertyFiles {...rest} />
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === "panel6"}
        onChange={handleChange("panel6")}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h5" color="textSecondary">
            Upload ThumbNail
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <PropertyThumbNail {...rest} />
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default React.memo(PropertyDetails);
