import React, { useState } from "react";
import {
  Box,
  Container,
  Stepper,
  Step,
  StepLabel,
  StepContent,
  Button,
} from "@material-ui/core";

import { makeStyles } from "@material-ui/core";
import PropertyAmenities from "./Amenities";
import PropertyExternals from "./Externals";
import PropertyDetails from "./Details";
import PropertyFiles from "./Files";
import PropertyThumbNail from "./ThumbNail";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(4),
  },
  formdDetails: {
    "& .MuiTextField-root": {
      //   margin: theme.spacing(1),
      //   maxWidth:'100%',
      // //   width:'30ch'
    },
  },
}));

const getSteps = [
  "Property Details",
  "Amenities",
  "Externals",
  "Files",
  "ThumbNail Image",
];

const getStepContent = (step) => {
  switch (step) {
    case 0:
      return <PropertyDetails />;
    case 1:
      return <PropertyAmenities />;
    case 2:
      return <PropertyExternals />;
    case 3:
      return <PropertyFiles />;
    case 4:
      return <PropertyThumbNail />;

    default:
      return <div>Invalid!</div>;
  }
};

const PropertyStepper = () => {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <>
      {/* {console.log("checked amenities", checkedAmenities)} */}

      <Container maxWidth="lg">
        <Box>
          <Stepper orientation="vertical" activeStep={activeStep}>
            {getSteps.map((label, index) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
                <StepContent>
                  {getStepContent(index)}
                  <Box py={2} display="flex" justifyContent="space-between">
                    <Button
                      variant="outlined"
                      color="secondary"
                      onClick={handleBack}
                      disabled={activeStep === 0}
                    >
                      Back
                    </Button>
                    <Button
                      variant="outlined"
                      color="primary"
                      onClick={handleNext}
                    >
                      {activeStep === getSteps.length - 1 ? "Finish" : "Next"}
                    </Button>
                  </Box>
                </StepContent>
              </Step>
            ))}
          </Stepper>
          {activeStep === getSteps.length && <></>}
        </Box>
      </Container>
    </>
  );
};

const NewProperty = () => {
  const classes = useStyles();
  return (
    <>
      <Box className={classes.root}>
        <PropertyStepper />
      </Box>
    </>
  );
};

export default React.memo(NewProperty);
