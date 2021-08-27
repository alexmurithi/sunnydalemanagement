import React, { useState, useEffect } from "react";
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

  const [propertyType, setPropertyType] = useState(1);

  const [property, setProperty] = useState(1);

  const [description, setDescription] = useState("");

  const handleDescription = (newValue, editor) => {
    setDescription(newValue);
  };

  const handleProperty = (event) => {
    setProperty(event.target.value);
  };

  const handlePropertyType = (event) => {
    setPropertyType(event.target.value);
  };

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

  const [amenity, setAmenity] = useState([]);

  const handleAmenity = (id) => (event) => {
    const allAmenity = [...amenity];
    const selectedAmenities = amenity.indexOf(id);

    if (selectedAmenities > -1) {
      allAmenity.splice(selectedAmenities, 1);
    } else {
      allAmenity.push(id);
    }

    setAmenity(allAmenity);
  };

  const [external, setExternals] = useState([]);

  const handleExternal = (id) => (event) => {
    const all = [...external];
    const selectedExternals = external.indexOf(id);

    if (selectedExternals > -1) {
      all.splice(selectedExternals, 1);
    } else {
      all.push(id);
    }

    setExternals(all);
  };

  const [propetyFiles, setFiles] = useState([]);

  const handlePropertyFiles = (files) => {
    setFiles(files);
  };

  const [thumbNail, setThumbNail] = useState([]);

  const handleThumbNail = (files) => {
    setThumbNail(files);
  };

  // console.log("description", description);
  console.log("externals", external);

  switch (step) {
    case 0:
      return (
        <PropertyDetails
          titleCallBack={handleTitle}
          countyCallBack={handleCounty}
          priceCallBack={handlePrice}
          townCallBack={handleTown}
          cityCallBack={handleCity}
          streetAddressCallBack={handleStreetAddress}
          agentPhoneCallBack={handleAgentPhone}
          agentNameCallBack={handleAgentName}
          propertyTypecallBack={handlePropertyType}
          propertyCallBack={handleProperty}
          descriptionCallBack={handleDescription}
          type={propertyType}
          town={town}
          city={city}
          price={price}
          county={county}
          streetAddress={streetAddress}
          agentName={agentName}
          agentPhone={agentPhone}
          title={title}
          property={property}
          description={description}
        />
      );
    case 1:
      return (
        <PropertyAmenities amenityCallBack={handleAmenity} amenity={amenity} />
      );
    case 2:
      return (
        <PropertyExternals
          externalCallBack={handleExternal}
          external={external}
        />
      );
    case 3:
      return (
        <PropertyFiles
          filesCallBack={handlePropertyFiles}
          propetyFiles={propetyFiles}
        />
      );
    case 4:
      return (
        <PropertyThumbNail
          thumbNailCallBack={handleThumbNail}
          thumbNail={thumbNail}
        />
      );

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
