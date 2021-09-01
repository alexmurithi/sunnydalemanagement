import React from "react";

import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText,
} from "@material-ui/core";

import { GET_ALL_PROPERTIES } from "../../../GraphQL/Queries/GetAllProperties";
import { useQuery } from "@apollo/client";

const PropertySelect = ({ propertyIdCallBack, property }) => {
  const { loading, data, error } = useQuery(GET_ALL_PROPERTIES);
  if (loading)
    return (
      <FormControl variant="outlined" fullWidth margin="dense">
        <InputLabel>Property</InputLabel>
        <Select value="Apartment" label="Property">
          <MenuItem key="Apartment" value="Apartment">
            Apartment
          </MenuItem>
        </Select>
      </FormControl>
    );
  if (error)
    return (
      <FormControl variant="outlined" fullWidth margin="dense">
        <InputLabel>Property</InputLabel>
        <Select value="Error" label="Error">
          <MenuItem key="Error" value="Error">
            Error; Data cannot be displayed
          </MenuItem>
        </Select>
      </FormControl>
    );

  return (
    <FormControl variant="filled" fullWidth margin="dense" required>
      <InputLabel>Property</InputLabel>
      <Select value={property} onChange={propertyIdCallBack} label="Services">
        {data.allProperties.map((item) => (
          <MenuItem key={item.id} value={item.id}>
            {item.name}
          </MenuItem>
        ))}
      </Select>
      <FormHelperText>Select Property</FormHelperText>
    </FormControl>
  );
};

export default React.memo(PropertySelect);
