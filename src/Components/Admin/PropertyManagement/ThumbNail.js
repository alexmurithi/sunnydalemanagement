import React from "react";
import { DropzoneArea } from "material-ui-dropzone";

// class PropertyThumbNail extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       file: [],
//     };
//   }

//   handleChange(file) {
//     this.setState({
//       file: file,
//     });
//   }

//   render() {
//     return (
//       <>
//         {console.log(this.state.file)}
//         <DropzoneArea
//           acceptedFiles={["images/*"]}
//           onChange={this.handleChange.bind(this)}
//           showFileNames
//           filesLimit={1}
//         />
//       </>
//     );
//   }
// }

const PropertyThumbNail = ({ thumbNailCallBack }) => {
  return (
    <DropzoneArea
      acceptedFiles={["image/jpeg", "image/png", "image/bmp", "image/jpg"]}
      onChange={thumbNailCallBack}
      showFileNames
      filesLimit={1}
    />
  );
};

export default React.memo(PropertyThumbNail);
