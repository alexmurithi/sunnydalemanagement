import React from "react";
import { Chip } from "@material-ui/core";
import { GET_ALL_PROPERTIES } from "../../GraphQL/Queries/GetAllProperties";
import { useQuery } from "@apollo/client";
import PropertyChipsShimmer from "../../Shimmers/PropertyChips";
import { NavLink } from "react-router-dom";

const PropertiesChips = () => {
  const { data, loading, error } = useQuery(GET_ALL_PROPERTIES);
  if (error) return <div>Error</div>;
  return (
    <>
      {loading ? (
        <PropertyChipsShimmer />
      ) : (
        data.allProperties.map((item) => (
          <NavLink to={`${window.location.pathname}/${item.id}`} key={item.id}>
            <Chip label={item.name} clickable variant="outlined" />
          </NavLink>
        ))
      )}
    </>
  );
};

export default React.memo(PropertiesChips);
