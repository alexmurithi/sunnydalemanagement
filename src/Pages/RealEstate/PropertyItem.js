import React from "react";
import { useParams } from "react-router-dom";
import { Container, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import { Box } from "@material-ui/core";
import PropertyItemThumbNail from "../../Components/RealEstate/PropertyItem/PropertyItemThumbNail";
import PropertyItemFiles from "../../Components/RealEstate/PropertyItem/PropertyItemFiles";
import PropertyDetails from "../../Components/RealEstate/PropertyItem/PropertyDetails";
import PropertyContactForm from "../../Components/RealEstate/PropertyItem/PropertyContactForm";
import { PROPERTY_ITEM } from "../../GraphQL/Queries/PropertyItem";
import { useQuery } from "@apollo/client";

const useStyles = makeStyles((theme) => ({
  card: {
    marginTop: theme.spacing(2),
  },
}));
const PropertyItem = () => {
  const classes = useStyles();
  const { id } = useParams();
  const { loading, data, error } = useQuery(PROPERTY_ITEM, {
    variables: { id: id },
  });
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error</div>;
  return (
    <>
      <Container maxWidth="lg">
        <Box py={3}>
          <Box py={1}>
            <PropertyItemThumbNail thumbNail={data.propertyItem.thumbNail} />
          </Box>

          {data.propertyItem.files.length > 0 && (
            <Box className={classes.imagesWrapper}>
              <Typography variant="h5" gutterBottom>
                More Pictures
              </Typography>
              <PropertyItemFiles fileImages={data.propertyItem.files} />
            </Box>
          )}
        </Box>
        <Grid container spacing={1}>
          <Grid item xs={12} sm={12} md={12} lg={7} xl={7}>
            <Box>
              <PropertyDetails details={data.propertyItem} />
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={5} xl={5}>
            <Box>
              <PropertyContactForm />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default React.memo(PropertyItem);
