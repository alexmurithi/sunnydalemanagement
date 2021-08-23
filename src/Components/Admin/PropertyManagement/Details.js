import React from "react";
import { makeStyles } from "@material-ui/core";
import { Box, TextField, Grid, Typography } from "@material-ui/core";

import SunnyEditor from "../../SunnyEditor";
import PropertyTypeSelect from "./PropertyTypeSelect";
import PropertySelect from "./PropertySelect";

const useStyles = makeStyles((theme) => ({}));

const PropertyDetails = () => {
  const classes = useStyles();
  return (
    <Box>
      <form noValidate autoComplete="off" className={classes.formdDetails}>
        <TextField
          label="Title"
          variant="outlined"
          margin="dense"
          helperText="eg. 2 Bedroom for sale in Ruiru"
          fullWidth
        />
        <Grid container spacing={1}>
          <Grid item xs={12} sm={12} md={12} lg={4} xl={4}>
            <PropertyTypeSelect />
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={4} xl={4}>
            <PropertySelect />
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={4} xl={4}>
            <TextField
              label="Price"
              variant="outlined"
              margin="dense"
              helperText="eg. 25000 "
              type="number"
              fullWidth
            />
          </Grid>

          <Grid item container spacing={1}>

            <Grid item xs={12} sm={12} md={12} lg={3} xl={3}>
              <TextField
                label="Name of County"
                variant="outlined"
                margin="dense"
                helperText="eg. Nairobi"
                type="text"
                fullWidth
                required
              />
            </Grid>

            <Grid item xs={12} sm={12} md={12} lg={3} xl={3}>
              <TextField
                label="Town"
                variant="outlined"
                margin="dense"
                helperText="eg. Westlands "
                type="text"
                fullWidth
                required
              />
            </Grid>

            <Grid item xs={12} sm={12} md={12} lg={3} xl={3}>
              <TextField
                label="City"
                variant="outlined"
                margin="dense"
                helperText="Optinal "
                type="text"
                fullWidth
              />
            </Grid>

            <Grid item xs={12} sm={12} md={12} lg={3} xl={3}>
              <TextField
                label="Street Addres"
                variant="outlined"
                margin="dense"
                helperText="eg. Along Naivas Supermarket "
                type="address"
                fullWidth
                required
              />
            </Grid>
            
          </Grid>

          <Grid item container spacing={1}>
            <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
              <TextField
                label="Agent Name"
                variant="outlined"
                margin="dense"
                helperText="eg. Elias Kiragu "
                type="text"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
              <TextField
                label="Agent Mobile"
                variant="outlined"
                margin="dense"
                helperText="eg. +25471234567"
                type="tel"
                fullWidth
              />
            </Grid>
          </Grid>
        </Grid>

        <Box py={2}>
          <Typography gutterBottom color="textSecondary">
            Description
          </Typography>
          <SunnyEditor />
        </Box>
      </form>
    </Box>
  );
};

export default React.memo(PropertyDetails);
