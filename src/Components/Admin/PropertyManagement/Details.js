import React from "react";
// import { makeStyles } from "@material-ui/core";
import {
  Box,
  TextField,
  Grid,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@material-ui/core";

import SunnyEditor from "../../SunnyEditor";
import PropertyTypeSelect from "./PropertyTypeSelect";
import PropertySelect from "./PropertySelect";

import { GET_ALL_PROPERTY_TYPES } from "../../../GraphQL/Queries/GetAllPropertyTypes";
import { GET_ALL_PROPERTIES } from "../../../GraphQL/Queries/GetAllProperties";
import { useQuery } from "@apollo/client";

// const useStyles = makeStyles((theme) => ({}));

const PropertyDetails = ({
  titleCallBack,
  countyCallBack,
  priceCallBack,
  townCallBack,
  cityCallBack,
  streetAddressCallBack,
  agentNameCallBack,
  agentPhoneCallBack,
  propertyTypecallBack,
  type,
  town,
  city,
  title,
  price,
  county,
  streetAddress,
  agentPhone,
  agentName,
  rooms,
  bathrooms,
  roomsCallBack,
  bathRoomsCallBack,
  ...rest
}) => {
  // const classes = useStyles();

  const { data, loading, error } = useQuery(GET_ALL_PROPERTY_TYPES);

  return (
    <Box>
      <form noValidate autoComplete="off">
        <TextField
          label="Title"
          variant="filled"
          margin="dense"
          helperText="eg. 2 Bedroom for sale in Ruiru"
          fullWidth
          required
          onChange={titleCallBack}
          value={title}
        />
        <Grid container spacing={1}>
          <Grid item xs={12} sm={12} md={12} lg={4} xl={4}>
            <FormControl variant="filled" fullWidth margin="dense">
              <InputLabel>Property</InputLabel>
              <Select
                label="loading..."
                value={type}
                onChange={propertyTypecallBack}
              >
                {loading ? (
                  <div>loading..</div>
                ) : data ? (
                  data.allPropertyTypes.map((item) => (
                    <MenuItem key={item.id} value={item.id}>
                      {item.type}
                    </MenuItem>
                  ))
                ) : (
                  <div>Error</div>
                )}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={4} xl={4}>
            <PropertySelect {...rest} />
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={4} xl={4}>
            <TextField
              label="Price"
              variant="filled"
              margin="dense"
              helperText="eg. 25000 "
              type="number"
              fullWidth
              required
              onChange={priceCallBack}
              value={price}
            />
          </Grid>

          <Grid item container spacing={1}>
            <Grid item xs={12} sm={12} md={12} lg={3} xl={3}>
              <TextField
                label="Name of County"
                variant="filled"
                margin="dense"
                helperText="eg. Nairobi"
                type="text"
                fullWidth
                required
                onChange={countyCallBack}
                required
                value={county}
              />
            </Grid>

            <Grid item xs={12} sm={12} md={12} lg={3} xl={3}>
              <TextField
                label="Town"
                variant="filled"
                margin="dense"
                helperText="eg. Westlands "
                type="text"
                fullWidth
                required
                onChange={townCallBack}
                value={town}
              />
            </Grid>

            <Grid item xs={12} sm={12} md={12} lg={3} xl={3}>
              <TextField
                label="City"
                variant="filled"
                margin="dense"
                helperText="Optinal "
                type="text"
                fullWidth
                onChange={cityCallBack}
                value={city}
              />
            </Grid>

            <Grid item xs={12} sm={12} md={12} lg={3} xl={3}>
              <TextField
                label="Street Addres"
                variant="filled"
                margin="dense"
                helperText="eg. Along Naivas Supermarket "
                type="address"
                fullWidth
                required
                onChange={streetAddressCallBack}
                value={streetAddress}
              />
            </Grid>
          </Grid>

          <Grid item container spacing={1}>
            <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
              <TextField
                label="Agent Name"
                variant="filled"
                margin="dense"
                helperText="eg. Elias Kiragu "
                type="text"
                fullWidth
                onChange={agentNameCallBack}
                value={agentName}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
              <TextField
                label="Agent Mobile"
                variant="filled"
                margin="dense"
                helperText="eg. +25471234567"
                type="tel"
                fullWidth
                onChange={agentPhoneCallBack}
                value={agentPhone}
              />
            </Grid>
          </Grid>

          <Grid item container spacing={1}>
            <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
              <TextField
                label="No of Rooms"
                variant="filled"
                margin="dense"
                helperText="eg. 2"
                type="number"
                fullWidth
                onChange={roomsCallBack}
                value={rooms}
                required
              />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
              <TextField
                label="No of bathrooms"
                variant="filled"
                margin="dense"
                helperText="eg. 2"
                type="number"
                fullWidth
                onChange={bathRoomsCallBack}
                value={bathrooms}
                required
              />
            </Grid>
          </Grid>
        </Grid>

        <Box py={2}>
          <Typography gutterBottom color="textSecondary">
            Description
          </Typography>
          <SunnyEditor {...rest} />
        </Box>
      </form>
    </Box>
  );
};

export default React.memo(PropertyDetails);
