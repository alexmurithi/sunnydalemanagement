import React from "react";
import { Box, Paper, Container, Button } from "@material-ui/core";

import { Link } from "react-router-dom";

import { makeStyles } from "@material-ui/core";
import PropertyItemsTable from "../PropertyItems/PropertyItemsTable";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(4),
  },
  newProperty: {
    padding: theme.spacing(2),
    marginBottom: theme.spacing(4),
  },
  button: {
    textTransform: "none",
  },
}));

const AddNewButton = () => {
  const classes = useStyles();
  return (
   
      <Paper className={classes.root} elevation={0}>
        <Box
          display="flex"
          justifyContent="flex-end"
          className={classes.newProperty}
        >
          <Button
            color="primary"
            variant="outlined"
            className={classes.button}
            component={Link}
            to="/admin/new-property"
          >
            Add New Property
          </Button>
        </Box>
      </Paper>
    
  );
};

const AdminPropManagement = () => {
  return (
    <>
      <Container maxWidth="lg">
        <AddNewButton />
        <Box style={{ width: "100%" }}>
          <PropertyItemsTable />
        </Box>
      </Container>
    </>
  );
};
export default React.memo(AdminPropManagement);
