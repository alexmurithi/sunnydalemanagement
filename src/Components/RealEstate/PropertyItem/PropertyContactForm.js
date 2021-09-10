import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  Divider,
  Typography,
  Box,
  TextField,
  makeStyles,
} from "@material-ui/core";
import CustomButton from "../../Button";

const useStyles = makeStyles((theme) => ({
  form: {
    "& > .MuiTextField-root": { border: `1pk solid red` },
  },
}));

const PropertyContactForm = ({ details }) => {
  const classes = useStyles();
  return (
    <>
      <Card elevation={0}>
        <CardHeader
          title={
            <>
              <Typography variant="h6">
                You are almost there, contact the agent or make an Enquiry with
                us !
              </Typography>
            </>
          }
        />
        <Divider />
        <CardContent>
          <Box>
            <form noValidate className={classes.form}>
              <Typography variant="h5" gutterBottom color="textSecondary">
                Your details
              </Typography>
              <TextField
                label="Full Name"
                type="text"
                margin="dense"
                variant="outlined"
                fullWidth
                placeholder="Please enter your full name"
              />
              <TextField
                label="Email"
                type="email"
                margin="dense"
                variant="outlined"
                fullWidth
                placeholder="example@email.com"
              />
              <TextField
                label="Phone Number"
                type="tel"
                margin="dense"
                variant="outlined"
                fullWidth
                placeholder="e.g +254712345678"
              />
              <TextField
                label="Message"
                type="text"
                margin="dense"
                variant="outlined"
                fullWidth
                multiline
                rows={5}
                maxRows={5}
              />

              <CustomButton
                color="primary"
                variant="contained"
                width={300}
                style={{ textTransform: "uppercase" }}
              >
                Contact Agent
              </CustomButton>
            </form>
          </Box>
        </CardContent>
      </Card>
    </>
  );
};
export default React.memo(PropertyContactForm);
