import React from "react";
import { Skeleton } from "@material-ui/lab";
import { Box } from "@material-ui/core";
const PropertyChipsShimmer = () => {
  const renderChips = () => {
    const total = 4;
    const chips = [];
    for (let i = 0; i < total; i += 1) {
      chips.push(
        <Skeleton
          variant="rect"
          width={120}
          height={20}
          animation="wave"
          style={{ marginLeft: 8 }}
          key={i}
        />
      );
    }
    return chips;
  };
  return (
    <>
      <Box display="flex">{renderChips()}</Box>
    </>
  );
};
export default PropertyChipsShimmer;
