import React from "react";
import { DropzoneArea } from "material-ui-dropzone";

const PropertyFiles = ({
  propertyFilesCallBack,
  propertyFiles,
  deletePropertyFiles,
}) => {
  return (
    <DropzoneArea
      acceptedFiles={["image/jpeg", "image/png", "image/bmp", "image/jpg"]}
      onChange={propertyFilesCallBack}
      onDelete={deletePropertyFiles}
      showFileNames
      filesLimit={5}
      // initialFiles={propertyFiles}
    />
  );
};

export default React.memo(PropertyFiles);
