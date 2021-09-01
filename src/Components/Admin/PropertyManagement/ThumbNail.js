import React from "react";
import { DropzoneArea } from "material-ui-dropzone";

const PropertyThumbNail = ({ thumbNailCallBack, deleteThumbNail }) => {
  return (
    <DropzoneArea
      acceptedFiles={["image/jpeg", "image/png", "image/bmp", "image/jpg"]}
      onChange={thumbNailCallBack}
      onDelete={deleteThumbNail}
      showFileNames
      filesLimit={1}
      maxFileSize={3000000}
    />
  );
};

export default React.memo(PropertyThumbNail);
