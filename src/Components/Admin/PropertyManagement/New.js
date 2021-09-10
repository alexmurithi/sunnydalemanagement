import React, { useState } from "react";
import {
  Box,
  Container,
  Backdrop,
  CircularProgress,
  Typography,
  Snackbar,
} from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";
import { makeStyles } from "@material-ui/core";
import CustomButton from "../../Button/index.js";
import PropertyDetails from "./Details";

import { UPLOAD_PROPERTY_ITEM } from "../../../GraphQL/Mutations/UploadPropertyItem";
import { useMutation } from "@apollo/client";
import Axios from "axios";
import { GET_ALL_PROPERTY_ITEMS } from "../../../GraphQL/Queries/GetAllPropertyItems";

require("dotenv").config();

const useStyles = makeStyles((theme) => ({
  newPropertyWrapper: {
    marginTop: theme.spacing(4),
    width: "100%",
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
  },
  uploadBtn: {
    marginTop: theme.spacing(3),
  },
}));

const NewProperty = () => {
  const classes = useStyles();

  const token = JSON.parse(localStorage.getItem("token"));

  const UserId = Number(token.user.id);

  const [openSnackbar, setSnackbar] = useState(false);

  const [uploadItem, { loading, data, error }] = useMutation(
    UPLOAD_PROPERTY_ITEM,
    {
      onCompleted({ uploadPropertyItem }) {
        if (uploadPropertyItem) {
          handleCloseBackdrop();
          setSnackbar(true);
          setTitle("");
          setDescription("");
          setProperty(1);
          setPropertyType(1);
          setCounty("");
          setTown("");
          setCity("");
          setStreetAddress("");
          setPrice(10000);
          setRooms(1);
          setBathRooms(1);
          setAgentName("");
          setAgentPhone("");
          setAmenity([]);
          setExternals([]);
          setFiles([]);
          setThumbNail("");
        }
      },
      update: (cache, { data }) => {
        const newData = data?.uploadPropertyItem.propertyItem;
        console.log(newData);
        const existingData = cache.readQuery({ query: GET_ALL_PROPERTY_ITEMS });
        console.log("existing Data ", existingData);
        cache.writeQuery({
          query: GET_ALL_PROPERTY_ITEMS,
          data: {
            allPropertyItems: [...existingData?.allPropertyItems, newData],
          },
        });
      },
      onError(error) {
        setErrorSnackBar(true);
      },
    }
  );

  const uploadPropertyItem = (event) => {
    event.preventDefault();
    uploadItem({
      variables: {
        title: title,
        description: description,
        propertyTypeId: Number(propertyType),
        propertyId: Number(property),
        price: price,
        county: county,
        town: town,
        city: city,
        streetAddress: streetAddress,
        thumbNail: thumbNail.toString(),
        agentName: agentName,
        agentPhone: agentPhone,
        no_of_rooms: Number(rooms),
        no_of_bathrooms: Number(bathrooms),
        createdBy: UserId,
        propertyAmenity: amenity.map((i) => Number(i)),
        propertyExternal: external.map((i) => Number(i)),
        file: propertyFiles,
      },
    });
  };

  const [openBackdrop, setOpenBackdrop] = useState(false);

  const handleCloseBackdrop = () => {
    setOpenBackdrop(false);
  };

  const handleSnackbarClose = () => {
    setSnackbar(false);
  };

  const [errorSnackBar, setErrorSnackBar] = useState(false);

  const [price, setPrice] = useState(10000);

  const handlePrice = (event) => {
    setPrice(parseInt(event.target.value));
  };

  const [title, setTitle] = useState("");

  const [property, setProperty] = useState(1);

  const [propertyType, setPropertyType] = useState(1);

  const [county, setCounty] = useState("");

  const [town, setTown] = useState("");

  const [city, setCity] = useState("");

  const [streetAddress, setStreetAddress] = useState("");

  const [rooms, setRooms] = useState(1);

  const [bathrooms, setBathRooms] = useState(1);

  const [agentName, setAgentName] = useState("");

  const [agentPhone, setAgentPhone] = useState("");

  const [description, setDescription] = useState("");

  const [amenity, setAmenity] = useState([]);

  const [external, setExternals] = useState([]);

  const [propertyFiles, setFiles] = useState([]);

  const [thumbNail, setThumbNail] = useState("");

  const handleThumbNail = (files) => {
    const formData = new FormData();

    formData.append("file", files[0]);
    formData.append(
      "upload_preset",
      `${
        process.env.NODE_ENV === "development"
          ? "koxpsqt5"
          : "sunnydalemanagement"
      }`
    );

    return Axios.post(
      `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUD_NAME}/upload`,
      formData,
      {
        headers: { "X-Requested-With": "XMLHttpRequest" },
      }
    )
      .then((res) => {
        setThumbNail(res.data.secure_url);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const handleDeleteThumbNail = (files) => {
    setThumbNail([...thumbNail].slice(files, 1));
  };

  const handlePropertyFiles = (files) => {
    const fileUrlArray = [];
    files.forEach((file) => {
      const formData = new FormData();
      formData.append("file", file);

      formData.append(
        "upload_preset",
        `${
          process.env.NODE_ENV === "development"
            ? "koxpsqt5"
            : "sunnydalemanagement"
        }`
      );

      return Axios.post(
        `https://api.cloudinary.com/v1_1/${
          process.env.NODE_ENV === "development"
            ? process.env.REACT_APP_CLOUD_NAME
            : process.env.REACT_APP_PROD_CLOUDNAME
        }/upload`,
        formData,
        {
          headers: { "X-Requested-With": "XMLHttpRequest" },
        }
      )
        .then((res) => {
          const fileUrls = res.data.secure_url;
          fileUrlArray.push(fileUrls);
        })
        .catch((err) => {
          console.log(err.message);
        });
    });
    setFiles(fileUrlArray);
  };

  const handlePropertyFilesDelete = (files) => {
    setFiles([...propertyFiles].slice(files, 1));
  };

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

  const handleDescription = (newValue, editor) => {
    setDescription(newValue);
  };

  const handleRoom = (event) => {
    setRooms(event.target.value);
  };

  const handleBathRoom = (event) => {
    setBathRooms(event.target.value);
  };

  const handleAgentName = (event) => {
    setAgentName(event.target.value);
  };

  const handleAgentPhone = (event) => {
    setAgentPhone(event.target.value);
  };

  const handleTown = (e) => {
    setTown(e.target.value);
  };

  const handleCounty = (e) => {
    setCounty(e.target.value);
  };

  const handleCity = (e) => {
    setCity(e.target.value);
  };

  const handleStreetAddress = (e) => {
    setStreetAddress(e.target.value);
  };

  const handlePropertyTypeId = (event) => {
    setPropertyType(event.target.value);
  };

  const handlePropertyId = (event) => {
    setProperty(event.target.value);
  };

  const handleTitle = (event) => {
    setTitle(event.target.value);
  };

  return (
    <>
      <Container maxWidth="lg">
        <Box className={classes.newPropertyWrapper}>
          <form onSubmit={uploadPropertyItem}>
            <PropertyDetails
              title={title}
              titleCallBack={handleTitle}
              property={property}
              propertyIdCallBack={handlePropertyId}
              classes={classes}
              propertyType={propertyType}
              propertyTypeIdCallBack={handlePropertyTypeId}
              town={town}
              townCallBack={handleTown}
              city={city}
              cityCallBack={handleCity}
              county={county}
              countyCallBack={handleCounty}
              streetAddress={streetAddress}
              streetAddressCallBack={handleStreetAddress}
              rooms={rooms}
              roomsCallBack={handleRoom}
              bathrooms={bathrooms}
              bathroomsCallBack={handleBathRoom}
              agentName={agentName}
              agentNameCallBack={handleAgentName}
              agentPhone={agentPhone}
              agentPhoneCallBack={handleAgentPhone}
              description={description}
              descriptionCallBack={handleDescription}
              amenity={amenity}
              amenityCallBack={handleAmenity}
              external={external}
              externalsCallBack={handleExternal}
              propertyFiles={propertyFiles}
              propertyFilesCallBack={handlePropertyFiles}
              // thumbNail={thumbNail}
              thumbNailCallBack={handleThumbNail}
              price={price}
              priceCallBack={handlePrice}
              deletePropertyFiles={handlePropertyFilesDelete}
              deleteThumbNail={handleDeleteThumbNail}
            />
            <Box className={classes.uploadBtn}>
              <CustomButton
                color="primary"
                variant="contained"
                type="submit"
                disabled={title.trim() === ""}
                // onClick={uploadPropertyItem}
              >
                Upload Property
              </CustomButton>
            </Box>
          </form>
        </Box>
        <Backdrop
          className={classes.backdrop}
          open={loading ? loading : openBackdrop}
        >
          <Box
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <CircularProgress color="inherit" />
            <Typography variant="h6" style={{ marginLeft: 4 }}>
              Uploading ...
            </Typography>
          </Box>
        </Backdrop>
        {data && (
          <Snackbar
            open={openSnackbar}
            autoHideDuration={6000}
            onClose={handleSnackbarClose}
            anchorOrigin={{ vertical: "top", horizontal: "right" }}
          >
            <MuiAlert
              severity="success"
              onClose={handleSnackbarClose}
              variant="filled"
            >
              {data.uploadPropertyItem.message}
            </MuiAlert>
          </Snackbar>
        )}

        {error && (
          <Snackbar
            open={errorSnackBar}
            autoHideDuration={6000}
            onClose={() => setErrorSnackBar(false)}
            anchorOrigin={{ vertical: "top", horizontal: "right" }}
          >
            <MuiAlert
              severity="error"
              onClose={() => setErrorSnackBar(false)}
              variant="filled"
            >
              {error.message}
            </MuiAlert>
          </Snackbar>
        )}
      </Container>
    </>
  );
};

export default React.memo(NewProperty);
