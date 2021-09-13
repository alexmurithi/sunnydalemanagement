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
import BusinessIcon from "@material-ui/icons/Business";
import { red, blue } from "@material-ui/core/colors";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import { green } from "@material-ui/core/colors";
import SellIcon from "@material-ui/icons/Sell";

const Offices = () => {
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
              OFFICES
            </Typography>

            <Typography color="textPrimary" variant="h3">
              100
            </Typography>
          </Grid>

          <Grid item>
            <Avatar
              style={{
                height: 64,
                width: 64,
                backgroundColor: blue[600],
              }}
            >
              <BusinessIcon />
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
          <ArrowDownwardIcon
            style={{
              color: red[900],
            }}
          />
          <Typography
            variant="body2"
            style={{
              color: red[900],
              marginRight: 10,
            }}
          >
            12%
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

export default Offices;
