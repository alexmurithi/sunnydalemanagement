import React from "react";
import { TextField, Grid, Button, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import CustomButton from "../Button";

const useStyles = makeStyles((theme) => ({}));

const ContactForm = () => {
  const classes = useStyles();
  return (
    <>
      <form className={classes.root} noValidate autoComplete="off">
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
            {" "}
            <TextField
              margin="dense"
              label="FirstName"
              fullWidth
              color="primary"
              type="text"
            />
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
            {" "}
            <TextField margin="dense" label="LastName" fullWidth type="text" />
          </Grid>
          <Grid item container spacing={2}>
            <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
              {" "}
              <TextField margin="dense" label="Email" fullWidth type="email" />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
              {" "}
              <TextField
                margin="dense"
                label="Phone Number"
                fullWidth
                type="tel"
              />
            </Grid>
          </Grid>

          <Grid item xs={12}>
            <TextField
              type="text"
              fullWidth
              minRows={4}
              multiline
              label="Message"
            />
          </Grid>
        </Grid>
        <Box display="flex" justifyContent="flex-end">
          <CustomButton variant="contained" color="primary">
            Send Message
          </CustomButton>
        </Box>
      </form>
    </>
  );
};
export default React.memo(ContactForm);
