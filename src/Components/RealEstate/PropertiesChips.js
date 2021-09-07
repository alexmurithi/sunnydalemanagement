import React from "react";
import { Chip } from "@material-ui/core";
import { GET_ALL_PROPERTIES } from "../../GraphQL/Queries/GetAllProperties";
import { useQuery } from "@apollo/client";
import PropertyChipsShimmer from "../../Shimmers/PropertyChips";

const PropertiesChips = () => {
  const { data, loading, error } = useQuery(GET_ALL_PROPERTIES);
  if (error) return <div>Error</div>;
  return (
    <>
      {loading ? (
        <PropertyChipsShimmer />
      ) : (
        data.allProperties.map((item) => (
          <Chip
            label={item.name}
            color="primary"
            clickable
            variant="outlined"
            key={item.id}
          />
        ))
      )}
    </>
  );
};

export default React.memo(PropertiesChips);
