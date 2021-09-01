import React from "react";

import { FormControl, InputLabel, Select, MenuItem, FormHelperText } from "@material-ui/core";

import { GET_ALL_PROPERTY_TYPES } from "../../../GraphQL/Queries/GetAllPropertyTypes";
import { useQuery } from "@apollo/client";

const PropertyTypeSelect = ({ propertyType, propertyTypeIdCallBack }) => {
  const { loading, data, error } = useQuery(GET_ALL_PROPERTY_TYPES);
  if (loading)
    return (
      <FormControl variant="outlined" fullWidth margin="dense">
        <InputLabel>Property</InputLabel>
        <Select value="loading..." label="loading...">
          <MenuItem key="loading..." value="loading...">
            loading ...
          </MenuItem>
        </Select>
      </FormControl>
    );
  if (error)
    return (
      <FormControl variant="filled" fullWidth margin="dense">
        <InputLabel>Property</InputLabel>
        <Select value="Error" label="Error">
          <MenuItem key="Error" value="Error">
            Error; Data cannot be displayed
          </MenuItem>
        </Select>
      </FormControl>
    );

  return (
    <>
      <FormControl variant="filled" fullWidth margin="dense" required>
        <InputLabel>Property Type</InputLabel>
        <Select
          onChange={propertyTypeIdCallBack}
          label="Services"
          value={propertyType}
        >
          {data.allPropertyTypes.map((item) => (
            <MenuItem key={item.id} value={item.id}>
              {item.type}
            </MenuItem>
          ))}
        </Select>
        <FormHelperText>Select Type</FormHelperText>
      </FormControl>
    </>
  );
};

export default React.memo(PropertyTypeSelect);
