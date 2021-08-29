import React from "react";
import {
  Avatar,
  Card,
  CardContent,
  Grid,
  Typography,
  Box,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@material-ui/core";
import ApartmentIcon from "@material-ui/icons/Apartment";
import { red, green } from "@material-ui/core/colors";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import SellIcon from "@material-ui/icons/Sell";

const Apartments = () => {
  return (
    <Card>
      <CardContent>
        <Grid
          container
          spacing={3}
          style={{
            justifyContent: "space-between",
          }}
        >
          <Grid item>
            <Typography color="textSecondary" gutterBottom variant="h6">
              APARTMENTS
            </Typography>

            <Typography color="textPrimary" variant="h3">
              3,000
            </Typography>
          </Grid>

          <Grid item>
            <Avatar
              style={{
                height: 64,
                width: 64,
                backgroundColor: red[600],
              }}
            >
              <ApartmentIcon />
            </Avatar>
          </Grid>
        </Grid>

        <Box
          style={{
            display: "flex",
            alignItems: "center",
            pt: 2,
          }}
        >
          <ArrowUpwardIcon
            style={{
              color: green[900],
            }}
          />
          <Typography
            variant="body2"
            style={{
              color: green[900],
              marginRight: 10,
            }}
          >
            16%
          </Typography>

          <Typography variant="caption" color="textSecondary">
            Since last month
          </Typography>
        </Box>

        <Grid
          container
          style={{
            justifyContent: "space-between",
            paddingTop: "16px",
          }}
        >
          <Grid item>
            <Typography variant="h6" color="textSecondary">
              For Rent
            </Typography>

            <List dense={true}>
              <ListItem>
                <ListItemAvatar>
                  <Avatar style={{ backgroundColor: green[600] }}>
                    <SellIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary="200" />
              </ListItem>
            </List>
          </Grid>
          <Divider orientation="vertical" flexItem />

          <Grid item>
            <Typography variant="h6" color="textSecondary">
              On Sale
            </Typography>

            <List dense={true}>
              <ListItem>
                <ListItemAvatar>
                  <Avatar style={{ backgroundColor: green[900] }}>
                    <SellIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary="800" />
              </ListItem>
            </List>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default Apartments;
