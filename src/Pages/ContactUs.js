import React from "react";
import {
  Box,
  Typography,
  Container,
  Card,
  CardContent,
  Grid,
  makeStyles,
} from "@material-ui/core";

import { Helmet } from "react-helmet";
import ContactInformation from "../Components/ContactUs/ContactInformation";
import ContactForm from "../Components/ContactUs/ContactForm";
const useStyles = makeStyles((theme) => ({
  wrapper: {
    marginTop: theme.spacing(4),
  },
  card: {
    marginTop: theme.spacing(4),
  },
  contactInfo: {
    background: theme.palette.primary.main,
    color: theme.palette.white,
    padding: theme.spacing(2),
  },
  form: {
    padding: theme.spacing(2),
  },
}));

const ContactUs = () => {
  const classes = useStyles();
  return (
    <>
      <Helmet>
        <title>Sunnydale | Contact Us</title>
      </Helmet>
      <div className={classes.wrapper}>
        <Container maxWidth="md">
          <Box align="center">
            <Typography variant={"h3"} gutterBottom>
              Contact Us
            </Typography>
            <Typography variant={"body1"} color={"textSecondary"}>
              Any question or remarks? Just write us a message!
            </Typography>
          </Box>
          <Card elevation={0} className={classes.card}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12} md={12} lg={5} xl={5}>
                <Box className={classes.contactInfo}>
                  <ContactInformation />
                </Box>
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={7} xl={7}>
                <Box className={classes.form}>
                  <ContactForm />
                </Box>
              </Grid>
            </Grid>
          </Card>
        </Container>
      </div>
    </>
  );
};
export default React.memo(ContactUs);
