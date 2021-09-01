import React from "react";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    borderRadius: 0,
    padding: theme.spacing(1),
    textTransform: "none",
    margin: 8,
    width: 200,
  },
}));

const CustomButton = ({ children, ...rest }) => {
  const classes = useStyles();
  return (
    <>
      <Button className={classes.root} {...rest}>
        {children}
      </Button>
    </>
  );
};

export default React.memo(CustomButton);
