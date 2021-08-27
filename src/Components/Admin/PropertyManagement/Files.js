import React, { useState } from "react";
import { DropzoneArea } from "material-ui-dropzone";

const PropertyFiles = ({ filesCallBack, propetyFiles }) => {
  return (
    <DropzoneArea
      acceptedFiles={["image/jpeg", "image/png", "image/bmp", "image/jpg"]}
      onChange={filesCallBack}
      showFileNames
      filesLimit={5}
      initialFiles={propetyFiles}
    />
  );
};

export default React.memo(PropertyFiles);
