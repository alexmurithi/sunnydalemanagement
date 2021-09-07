import React from "react";
import { Box, Container, Grid, Typography, Card } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import Image from "../Image";
import PropertyBanner from "../../Assets/Images/Banner/houses.webp";
import ME_Banner from "../../Assets/Images/Banner/ME.png";

const useStyles = makeStyles((theme) => ({
  root: {
    //    width:"100%",
    height: "100%",
    width: "100%",
    marginTop: theme.spacing(4),
  },
  brandSunny: {
    color: theme.palette.secondary.main,
  },
  brandDale: {
    color: theme.palette.primary.main,
  },
  banner: {
    padding: theme.spacing(2),
  },
  card: {
    borderRadius: 0,
    padding: theme.spacing(2),
    marginBottom: theme.spacing(3),
  },
  image: {
    width: "60%",
  },
}));

const OnBoardingSection = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Container maxWidth="lg">
        <Card className={classes.card} elevation={1}>
          <Grid
            container
            alignItems="center"
            justifyContent="space-between"
            spacing={2}
          >
            <Grid item sm={12} md={12} lg={7} xl={7}>
              <Typography variant="h4" gutterBottom>
                Sunnydale Environmental Services
              </Typography>
              <Typography variant="body1" color="textSecondary">
                We provide professional support in environmental and business
                research to help you know what you do not know.
              </Typography>
            </Grid>
            <Grid item sm={12} md={12} lg={5} xl={5}>
              <Image src={ME_Banner} className={classes.image} />
            </Grid>
          </Grid>
        </Card>
        <Card className={classes.card} elevation={1}>
          <Grid
            container
            alignItems="center"
            justifyContent="space-between"
            spacing={2}
          >
            <Grid item sm={12} md={12} lg={5} xl={5}>
              <Image src={PropertyBanner} />
            </Grid>
            <Grid item sm={12} md={12} lg={7} xl={7}>
              <Typography variant="h4" gutterBottom>
                Sunnydale Real Estate & Property Management
              </Typography>
              <Typography color="textSecondary" variant="body1">
                we are reliable and trusted property managers for houses and
                land
              </Typography>
            </Grid>
          </Grid>
        </Card>
      </Container>
    </Box>
  );
};

export default React.memo(OnBoardingSection);
