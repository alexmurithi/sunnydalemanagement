import React, { useState } from "react";
import {
  TextField,
  Grid,
  Box,
  FormControl,
  FormLabel,
  Radio,
  RadioGroup,
  FormControlLabel,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import CustomButton from "../Button";

const useStyles = makeStyles((theme) => ({}));

const ContactForm = () => {
  const classes = useStyles();

  const [firstName, setFirstName] = useState("");

  const [lastName, setLastName] = useState("");

  const [email, setEmail] = useState("");

  const [phone, setPhone] = useState("");

  const [textMessage, setMessage] = useState("");

  const [value, setValue] = useState("environmental");

  const handleValue = (event) => {
    setValue(event.target.value);
  };

  const handleMessage = (event) => {
    setMessage(event.target.value);
  };

  const handlePhone = (event) => {
    setPhone(event.target.value);
  };

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleLastName = (event) => {
    setLastName(event.target.value);
  };

  const handleChangeFirstName = (event) => {
    setFirstName(event.target.value);
  };

  const handleSubmitContact = (e) => {
    e.preventDefault();
    e.stopPropagation();
    alert("clicked");
  };
  console.log(lastName);
  console.log(email);
  console.log(textMessage);
  console.log(value);
  return (
    <>
      <form
        className={classes.root}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmitContact}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
            {" "}
            <TextField
              margin="dense"
              label="FirstName"
              fullWidth
              color="primary"
              type="text"
              value={firstName}
              onChange={handleChangeFirstName}
              required
            />
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
            {" "}
            <TextField
              margin="dense"
              label="LastName"
              fullWidth
              type="text"
              value={lastName}
              onChange={handleLastName}
              required
            />
          </Grid>
          <Grid item container spacing={2}>
            <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
              {" "}
              <TextField
                margin="dense"
                label="Email"
                fullWidth
                type="email"
                required
                value={email}
                onChange={handleEmail}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
              {" "}
              <TextField
                margin="dense"
                label="Phone Number"
                fullWidth
                type="tel"
                required
                value={phone}
                onChange={handlePhone}
              />
            </Grid>
          </Grid>
          <Grid item>
            <FormControl component="fieldset">
              <FormLabel component="legend">Service</FormLabel>
              <RadioGroup
                aria-label="service"
                row
                name="service"
                value={value}
                onChange={handleValue}
              >
                <FormControlLabel
                  control={<Radio color="primary" />}
                  label="Environmental"
                  value="environmental"
                />
                <FormControlLabel
                  control={<Radio color="primary" />}
                  label="Real Estate"
                  value="realEstate"
                />
                <FormControlLabel
                  control={<Radio color="primary" />}
                  label="Land"
                  value="land"
                />
                <FormControlLabel
                  control={<Radio color="primary" />}
                  label="Other"
                  value="other"
                />
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <TextField
              type="text"
              fullWidth
              minRows={4}
              multiline
              label="Message"
              required
              value={textMessage}
              onChange={handleMessage}
            />
          </Grid>
        </Grid>
        <Box display="flex" justifyContent="flex-end">
          <CustomButton
            variant="contained"
            color="primary"
            type="submit"
            disabled={false}
          >
            Send Message
          </CustomButton>
        </Box>
      </form>
    </>
  );
};
export default React.memo(ContactForm);
