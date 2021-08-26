import React, { useState } from "react";
import {
  Box,
  Container,
  Stepper,
  Step,
  StepLabel,
  StepContent,
  Button,
  Typography,
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

const GetStepContent = (step) => {
  const [title, setTitle] = useState("");

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };

  const [county, setCounty] = useState("");

  const [price, setPrice] = useState(0);

  const [town, setTown] = useState("");

  const [city, setCity] = useState("");

  const [streetAddress, setStreetAddress] = useState("");

  const [agentName, setAgentName] = useState("");

  const [agentPhone, setAgentPhone] = useState("");

  // const [propertyType, setPropertyType] = useState(1)
  

  const handlePrice = (event) => {
    setPrice(event.target.value);
  };

  const handleAgentName = (event) => {
    setAgentName(event.target.value);
  };

  const handleAgentPhone = (event) => {
    setAgentPhone(event.target.value);
  };

  const handleTown = (event) => {
    setTown(event.target.value);
  };

  const handleCity = (event) => {
    setCity(event.target.value);
  };

  const handleStreetAddress = (event) => {
    setStreetAddress(event.target.value);
  };

  const handleCounty = (event) => {
    setCounty(event.target.value);
  };

  const [amenity, setAmenity] = useState({});

  const handleAmenity = (event) => {
    setAmenity({
      ...amenity,
      [event.target.value]: event.target.checked,
    });
  };

  const [external, setExternal] = useState({});

  const handleExternal = (event) => {
    setExternal({
      ...external,
      [event.target.value]: event.target.checked,
    });
  };

  const [propetyFiles, setFiles] = useState([]);

  const handlePropertyFiles = (files) => {
    setFiles(files);
  };

  const [thumbNail, setThumbNail] = useState([]);

  const handleThumbNail = (files) => {
    setThumbNail(files);
  };

  

  // console.log("title :", title);

  // console.log("amenities :", amenity);

  // console.log("externals :", external);
  // console.log("propertyfiles :", propetyFiles);
  // console.log("thumbNail :", thumbNail);
  // console.log("county: ", county);
  // console.log("price :", price);
  // console.log("town :", town);
  // console.log("city :", city);
  // console.log("streetAddress :", streetAddress);
  // console.log("propertyType :", propertyType);

  switch (step) {
    case 0:
      return (
        <PropertyDetails
          titleCallBack={handleTitle}
          
          county={handleCounty}
          price={handlePrice}
          town={handleTown}
          city={handleCity}
          streetAddress={handleStreetAddress}
          agentPhone={handleAgentPhone}
          agentName={handleAgentName}
         
        />
      );
    case 1:
      return <PropertyAmenities amenityCallBack={handleAmenity} />;
    case 2:
      return <PropertyExternals externalCallBack={handleExternal} />;
    case 3:
      return <PropertyFiles filesCallBack={handlePropertyFiles} />;
    case 4:
      return <PropertyThumbNail thumbNailCallBack={handleThumbNail} />;

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
      <Container maxWidth="lg">
        <Box>
          <Stepper orientation="vertical" activeStep={activeStep}>
            {getSteps.map((label, index) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
                <StepContent>
                  {GetStepContent(index)}
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
          {activeStep === getSteps.length && (
            <>
              <Box>
                <Typography>Lets do this</Typography>
              </Box>
            </>
          )}
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
