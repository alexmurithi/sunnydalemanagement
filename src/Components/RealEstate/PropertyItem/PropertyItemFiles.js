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
          perView: fileImages.length > 3 ? 4 : fileImages.length,
          type: "slider",
          startAt: 0,
          rewind: true,
        }}
      >
        {fileImages.map((file) => (
          <div className="glide__slide slide" key={file.id}>
            <Image src={file.path} height={400} />
          </div>
        ))}
      </GlideSlider>
    </>
  );
};

PropertyItemFiles.propTypes = {
  fileImages: PropTypes.array.isRequired,
};
export default React.memo(PropertyItemFiles);
