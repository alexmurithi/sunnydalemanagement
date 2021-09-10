import React from "react";
import GlideSlider from "../../GlideSlider";

import PropTypes from "prop-types";
import Image from "../../Image";

const PropertyItemFiles = ({ fileImages }) => {
  return (
    <>
      <GlideSlider
        settings={{
          gap: 10,
          perView: fileImages.length,
          type: "carousel",
          startAt: 0,
          rewind: true,
        }}
      >
        {fileImages.map((file) => (
          <>
            <div className="glide__slide slide">
              <Image src={file.path} />
            </div>
          </>
        ))}
      </GlideSlider>
    </>
  );
};

PropertyItemFiles.propTypes = {
  fileImages: PropTypes.array.isRequired,
};
export default React.memo(PropertyItemFiles);
