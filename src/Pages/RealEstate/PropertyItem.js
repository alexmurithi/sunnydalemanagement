import React from "react";
import { Card, Container, Grid } from "@material-ui/core";
const PropertyItem = () => {
  return (
    <>
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item xs={12} sm={12} md={12} lg={7} xl={7}>
            <Card></Card>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={5} xl={5}></Grid>
        </Grid>
      </Container>
    </>
  );
};

export default React.memo(PropertyItem);
