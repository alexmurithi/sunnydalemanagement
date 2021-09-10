import React from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  makeStyles,
} from "@material-ui/core";
import PropTypes from "prop-types";

const useStyles = makeStyles((theme) => ({
  headings: {
    display: "flex",
  },
  root: {
    width: "100%",
  },
}));

const PropertyDetails = ({ details }) => {
  const classes = useStyles();
  return (
    <>
      <Card elevation={0} className={classes.root}>
        <CardContent>
          <Typography variant="h5">{details.title}</Typography>
          <Box className={classes.headings}>
            <Typography variant="h5">
              {details.county}, {details.town}
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </>
  );
};
PropertyDetails.propTypes = {
  details: PropTypes.shape({
    title: PropTypes.string.isRequired,
    town: PropTypes.string.isRequired,
    county: PropTypes.string.isRequired,
  }),
};

export default React.memo(PropertyDetails);
