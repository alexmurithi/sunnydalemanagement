import React from "react";
import {
  Box,
  Container,
  Typography,
  Card,
  Avatar,
  Grid,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import HRImage from "../../Assets/Images/collins.jpg";
import AccountantImage from "../../Assets/Images/sora.jpg";
import CEOImage from "../../Assets/Images/ceo.jpg";

const TeamStyles = makeStyles((theme) => ({
  card: {
    display: "flex",
    flexDirection: "column",
    borderRadius: 0,
    padding: theme.spacing(3),
  },
  details: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  personalDetails: {
    display: "flex",
    flexDirection: "column",
  },
  avatar: {
    width: theme.spacing(9),
    height: theme.spacing(9),
  },
}));

const Team = () => {
  const classes = TeamStyles();
  const members = [
    {
      name: "Ambrose Mugambi",
      avatar: CEOImage,
      position: "CEO & Founder",
      message: `
        Your time is limited, so don't waste it 
        living someone else's life. Don't be trapped 
        by dogma – which is living with the results of 
        other people's thinking.
        `,
    },

    {
      name: "Stanely Mugambi",
      avatar: HRImage,
      position: "Senior HR",
      message: `If you look at what you have in 
        life, you'll always have more. If you look 
        at what you don't have in life, you'll 
        never have enough. `,
    },
    {
      name: "Alice Muthomi",
      avatar: AccountantImage,
      position: "Accountant",
      message: `If you set your goals ridiculously 
        high and it's a failure, you will fail 
        above everyone else's success.`,
    },
  ];
  return (
    <Box py={4}>
      <Container maxWidth="lg">
        <Typography variant="h4" color="secondary" align="center">
          Our Team
        </Typography>

        <Box py={4}>
          <Grid container spacing={4}>
            {members.map((member, index) => (
              <Grid item lg={4} key={index}>
                <Card elevation={0} className={classes.card}>
                  <Box className={classes.details}>
                    <Box className={classes.personalDetails}>
                      <Typography variant="h5" gutterBottom>
                        {member.name}
                      </Typography>
                      <Typography
                        variant="h6"
                        color="textSecondary"
                        gutterBottom
                      >
                        {member.position}
                      </Typography>
                    </Box>

                    <Avatar
                      className={classes.avatar}
                      src={member.avatar}
                      alt={member.name}
                    />
                  </Box>
                  <Box py={3}>
                    <Typography variant="body2" color="textSecondary">
                      {member.message}
                    </Typography>
                  </Box>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default React.memo(Team);
