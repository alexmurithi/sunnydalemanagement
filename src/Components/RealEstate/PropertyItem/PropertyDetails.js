import React from "react";
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Typography,
  Divider,
  SvgIcon,
  makeStyles,
} from "@material-ui/core";
import PropTypes from "prop-types";
import { ReactComponent as BedIcon } from "../../../Assets/Icons/bed.svg";
import { ReactComponent as BathTubIcon } from "../../../Assets/Icons/bathtub.svg";

const useStyles = makeStyles((theme) => ({
  headings: {
    display: "flex",
  },
  root: {
    width: "100%",
    marginBottom: theme.spacing(2),
  },
  price: {
    marginTop: theme.spacing(2),
  },
  description: {
    marginTop: theme.spacing(2),
  },
}));

const PropertyDetails = ({ details }) => {
  const classes = useStyles();
  return (
    <>
      <Card elevation={0} className={classes.root}>
        <CardHeader
          title={details.property.name}
          subheader={details.propertyType.type}
        />
        <Divider />
        <CardContent>
          <Typography variant="h5">{details?.title}</Typography>

          <Box display="flex" justifyContent="space-between" py={2}>
            <Typography variant="subtitle2" color="textSecondary">
              {details?.county} County
            </Typography>
            <Typography variant="subtitle2" color="textSecondary">
              {details?.town}, {details?.streetAddress}
            </Typography>
          </Box>

          <Box display="flex" py={1}>
            <Box display="flex" alignItems="center">
              <BedIcon height={20} />
              <Typography variant="subtitle2">
                {details?.no_of_rooms}
              </Typography>
            </Box>
            <Box display="flex" alignItems="center">
              <BathTubIcon height={20} />
              <Typography variant="subtitle2">
                {details?.no_of_bathrooms}
              </Typography>
            </Box>
          </Box>

          <Typography variant="h4" gutterBottom className={classes.price}>
            {details?.price}
          </Typography>
          <Typography paragraph gutterBottom className={classes.description}>
            {" "}
            {details.description}
          </Typography>
          {details.externals.length > 0 && (
            <>
              <Divider />

              <Box py={1}>
                <Typography variant="h5" gutterBottom>
                  Externals
                </Typography>

                <Box
                  display="flex"
                  justifyContent="space-between"
                  alignContent="center"
                >
                  {details.externals.map((external) => (
                    <Typography variant="subtitle2" key={external.id}>
                      {external.name}
                    </Typography>
                  ))}
                </Box>
              </Box>
            </>
          )}

          {details.amenities.length > 0 && (
            <>
              <Divider />

              <Box py={1}>
                <Typography variant="h5" gutterBottom>
                  Amenities
                </Typography>
                <Box
                  display="flex"
                  justifyContent="space-between"
                  alignContent="center"
                >
                  {details.amenities.map((amenity) => (
                    <Typography variant="subtitle2" key={amenity.id}>
                      {amenity.name}
                    </Typography>
                  ))}
                </Box>
              </Box>
            </>
          )}
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
