import React, { useState } from "react";
import Dropzone from "react-dropzone";
import { Icon } from "antd";
import Axios from "axios";
function FileUpload(props) {
  const [Images, setImages] = useState([]);
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
          setImages([...Images, response.data.image]);
          props.refreshFunction([...Images, response.data.image]);
        } else {
          alert("Failed to save the Image in Server");
        }
      }
    );
  };
  const onDelete = (image) => {
    const currentIndex = Images.indexOf(image);

    let newImages = [...Images];
    newImages.splice(currentIndex, 1);

    setImages(newImages);
    props.refreshFunction(newImages);
  };
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <Dropzone onDrop={onDrop} multiple={false} maxSize={700000000000}>
        {({ getRootProps, getInputProps }) => (
          <div
            style={{
              width: "340px",
              height: "340px",
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
      <br />
      <br />
      <div
        style={{
          display: "flex",
          width: "340px",
          height: "340px",
          overflowX: "scroll",
          overflowY: "scroll",
        }}
      >
        {Images.map((image, index) => (
          <div>
            <br></br>
            <h3 onClick={() => onDelete(image)}>X</h3>
            <img
              style={{ minWidth: "300px", width: "300px", height: "240px" }}
              src={`process.env.PORT/${image}`}
              alt={`productImg-${index}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default FileUpload;
