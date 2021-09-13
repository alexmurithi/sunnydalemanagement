import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardActions,
  Divider,
  Typography,
  Box,
  IconButton,
  TextField,
  makeStyles,
} from "@material-ui/core";
import CustomButton from "../../Button";
import EmailIcon from "@material-ui/icons/Email";
import PhoneIcon from "@material-ui/icons/Phone";
const useStyles = makeStyles((theme) => ({
  form: {
    "& ~ .MuiTextField-root": { border: `1pk solid red` },
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
              <Typography variant="h6" gutterBottom>
                Contact the agent for this property
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
                minRows={5}
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

          <Divider />

          <CardActions>
            <Typography variant="h6" gutterBottom>
              Or Make an enquiry with us
            </Typography>

            <IconButton>
              <EmailIcon fontSize="large" color="secondary" />
            </IconButton>
            <IconButton>
              <PhoneIcon fontSize="large" color="secondary" />
            </IconButton>
          </CardActions>
        </CardContent>
      </Card>
    </>
  );
};
export default React.memo(PropertyContactForm);
