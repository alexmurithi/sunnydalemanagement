import React from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Grid,
  Chip,
} from "@material-ui/core";
import { NavLink, useParams } from "react-router-dom";
import { ReactComponent as BedIcon } from "../../Assets/Icons/bed.svg";
import { ReactComponent as BathTubIcon } from "../../Assets/Icons/bathtub.svg";
import { GET_ALL_PROPERTY_ITEMS } from "../../GraphQL/Queries/GetAllPropertyItems";
import { Helmet } from "react-helmet";
import { useQuery } from "@apollo/client";

import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  card: {
    marginBottom: theme.spacing(3),

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
      <Helmet>
        <title>Sunnydale Management | Properties</title>
      </Helmet>
      <Box py={1}>
        {data.allPropertyItems.map((item) => (
          <NavLink
            key={item.id}
            to={`/real-estate/property-item/${item.id}`}
            className={classes.link}
          >
            <Card className={classes.card} elevation={0}>
              <CardContent>
                <Grid
                  container
                  spacing={2}
                  alignItems={"center"}
                  justifyContent={"center"}
                >
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
                    <Box display={"flex"} justifyContent={"space-between"}>
                      <Chip
                        label={item.property.name}
                        color={"primary"}
                        variant="outlined"
                      />
                      <Chip
                        label={item.propertyType.type}
                        color={"secondary"}
                        variant="outlined"
                      />
                    </Box>

                    <Box style={{ padding: "8px 4px" }}>
                      <Typography gutterBottom variant="h4">
                        {item.price}
                      </Typography>
                      <Typography variant="body1" gutterBottom>
                        {item.title}
                      </Typography>
                      <Box display="flex" justifyContent="space-between" py={2}>
                        <Typography variant="subtitle2" color="textSecondary">
                          {item?.county} County
                        </Typography>
                        <Typography variant="subtitle2" color="textSecondary">
                          {item?.town}, {item?.streetAddress}
                        </Typography>
                      </Box>

                      <Box display="flex" py={1}>
                        <Box display="flex" alignItems="center">
                          <BedIcon height={20} />
                          <Typography variant="subtitle2">
                            {item?.no_of_rooms}
                          </Typography>
                        </Box>
                        <Box display="flex" alignItems="center">
                          <BathTubIcon height={20} />
                          <Typography variant="subtitle2">
                            {item?.no_of_bathrooms}
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </NavLink>
        ))}
      </Box>
    </>
  );
};

export default React.memo(AllProperties);
