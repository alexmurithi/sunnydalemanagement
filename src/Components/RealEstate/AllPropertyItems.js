import React from "react";
import { Box, Card, Typography, Grid, Button, Link } from "@material-ui/core";
import { NavLink, useParams } from "react-router-dom";
import KingBedIcon from "@material-ui/icons/KingBed";
import BathtubIcon from "@material-ui/icons/Bathtub";

import { GET_ALL_PROPERTY_ITEMS } from "../../GraphQL/Queries/GetAllPropertyItems";
import { useQuery } from "@apollo/client";

import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  card: {
    marginBottom: theme.spacing(3),

    width: "100%",
  },
  imageList: {
    width: "100%",
  },
  link: {
    textDecoration: "none",
  },
}));

const AllProperties = () => {
  const classes = useStyles();
  const { all } = useParams();
  console.log("all", all);
  const { loading, data, error } = useQuery(GET_ALL_PROPERTY_ITEMS, {});
  if (loading) return <div>Loading..</div>;
  if (error) return <div>Error</div>;

  return (
    <>
      <Box>
        {data.allPropertyItems.map((item) => (
          <NavLink
            elevation={1}
            key={item.id}
            to={`/real-estate/property-item/${item.id}`}
            className={classes.link}
          >
            <Card className={classes.card}>
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
          </NavLink>
        ))}
      </Box>
    </>
  );
};

export default React.memo(AllProperties);
