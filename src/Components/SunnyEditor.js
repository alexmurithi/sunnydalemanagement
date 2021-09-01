import React from "react";
import { Editor } from "@tinymce/tinymce-react";

const SunnyEditor = ({ descriptionCallBack, description }) => {
  return (
    <Editor
      apiKey="xocojcyru08ix1f5gzp3uea1wrs1ezzxpnf9xj1ep04qq2ae"
      init={{
        height: 200,
        width: "100%",
        menubar: false,
        skin: "fabric",
        plugins: [
          "advlist autolink lists link image",
          "charmap print preview anchor help",
          "searchreplace visualblocks code",
          "insertdatetime media table paste wordcount",
        ],
        toolbar:
          "undo redo | formatselect | bold italic | \n" +
          "alignleft aligncenter alignright | \n" +
          "bullist numlist outdent indent | help",
      }}
      value={description}
      onEditorChange={descriptionCallBack}
    />
  );
};

export default React.memo(SunnyEditor);
