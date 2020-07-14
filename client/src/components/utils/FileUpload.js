import React, { useState } from "react";
import Dropzone from "react-dropzone";
import { Icon } from "antd";
import Axios from "axios";
function FileUpload() {
  const [Images, setImages] = useState("");
  const onDrop = (files) => {
    let formData = new FormData();
    const config = {
      header: { "content-type": "multiple/form-data" },
    };
    formData.append("file", files[0]);
    // Saving the image inside the Node server
    Axios.post("/api/product/uploadImage", formData, config).then(
      (response) => {
        if (response.data.success) {
        } else {
          alert("Failed to save the Image in Server");
        }
      }
    );
  };
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <Dropzone onDrop={onDrop} multiple maxSize>
        {({ getRootProps, getInputProps }) => (
          <div
            style={{
              width: "300px",
              height: "240px",
              border: "1px solid lightgray",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            {...getRootProps()}
          >
            {console.log("getRootProps", { ...getRootProps() })}
            {console.log("getInputProps", { ...getInputProps() })}
            <input {...getInputProps()} />
            <Icon type="plus" style={{ fontSize: "3rem" }} />
          </div>
        )}
      </Dropzone>
    </div>
  );
}

export default FileUpload;
