import React from "react";
import { DropzoneArea } from "material-ui-dropzone";

const PropertyThumbNail = ({ thumbNailCallBack,thumbNail }) => {
  return (
    <DropzoneArea
      acceptedFiles={["image/jpeg", "image/png", "image/bmp", "image/jpg"]}
      onChange={thumbNailCallBack}
      showFileNames
      filesLimit={1}
      initialFiles={thumbNail}
    />
  );
};

export default React.memo(PropertyThumbNail);
