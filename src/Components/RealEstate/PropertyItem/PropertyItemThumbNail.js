import React from "react";
import Image from "../../Image";
import PropTypes from "prop-types";

const PropertyItemThumbNail = ({ thumbNail }) => {
  return (
    <>
      <Image src={thumbNail.path} height={300} />
    </>
  );
};
PropertyItemThumbNail.propTypes = {
  thumbNail: PropTypes.object.isRequired,
};
export default React.memo(PropertyItemThumbNail);
