import React from "react";
import { Skeleton } from "@material-ui/lab";
import { Box } from "@material-ui/core";
const PropertyChipsShimmer = () => {
  return (
    <>
      <Box display="flex">
        {[...Array(4)].map((item) => (
          <Skeleton
            variant="rect"
            width={120}
            height={20}
            animation="wave"
            style={{ marginLeft: 8 }}
            key={item}
          />
        ))}
      </Box>
    </>
  );
};
export default PropertyChipsShimmer;
