import React from "react";
import { Box, Card, Typography, Grid, Button } from "@material-ui/core";

import KingBedIcon from "@material-ui/icons/KingBed";
import BathtubIcon from "@material-ui/icons/Bathtub";

import { GET_ALL_PROPERTY_ITEMS } from "../../GraphQL/Queries/GetAllPropertyItems";
import { useQuery } from "@apollo/client";

import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginBottom: theme.spacing(3),
  },
  imageList: {
    width: "100%",
  },
}));

const AllProperties = () => {
  const classes = useStyles();

  const { loading, data, error } = useQuery(GET_ALL_PROPERTY_ITEMS, {});
  if (loading) return <div>Loading..</div>;
  if (error) return <div>Error</div>;
  console.log("propertyitems :", data);
  return (
    <>
      <Box>
        {data.allPropertyItems.map((item) => (
          <Card elevation={1} className={classes.paper} key={item.id}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12} md={12} lg={5} xl={5}>
                <img
                  src={item.thumbNail.path}
                  alt={item.title}
                  height={200}
                  width="100%"
                  style={{ objectFit: "cover" }}
                />
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={7} xl={7}>
                <Box style={{ padding: "8px 4px" }}>
                  <Typography gutterBottom variant="h4" color="secondary">
                    {item.price}
                  </Typography>
                  <Typography variant="body1" gutterBottom>
                    {item.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    gutterBottom
                    color="textSecondary"
                  >
                    {item?.county} , {item?.town}, {item?.streetAddress}
                  </Typography>

                  <Box style={{ display: "flex" }}>
                    <Button
                      variant="text"
                      startIcon={<KingBedIcon color="primary" />}
                    >
                      {item.no_of_rooms}
                    </Button>
                    <Button
                      variant="text"
                      startIcon={<BathtubIcon color="primary" />}
                    >
                      {item.no_of_bathrooms}
                    </Button>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Card>
        ))}
      </Box>
    </>
  );
};

export default React.memo(AllProperties);
