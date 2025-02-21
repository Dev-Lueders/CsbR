import React, { useState } from "react";
import PropTypes from "prop-types";
import { Form, Button } from "react-bootstrap";
import axios from "axios";

const Up_Loading = ({ onUpload, allowedFormats, children }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [error, setError] = useState("");

  const handleFileChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      const fileType = file.type.split("/")[0];
      if (!["image", "video", "audio"].includes(fileType)) {
        setError("Invalid file type. Only images, videos, and audio files are allowed.");
        setSelectedFile(null);
      } else {
        setError("");
        setSelectedFile(file);
      }
    }
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      setError("Please select a file first.");
      return;
    }

    const formData = new FormData();
    formData.append("file", selectedFile);

    try {
      const response = await axios.post("/upload", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      onUpload(response.data);
      setSelectedFile(null);
    } catch (error) {
      console.error("Upload failed:", error);
      setError("File upload failed. Please try again.");
    }
  };

  return (
    <div className="file-upload">
      <Form.Group>
        <Form.Label>Select a Media File</Form.Label>
        <Form.Control type="file" accept={allowedFormats.join(", ")} onChange={handleFileChange} />
        {error && <p className="text-danger">{error}</p>}
      </Form.Group>

      <Button variant="primary" onClick={handleUpload} disabled={!selectedFile}>
        Upload
      </Button>

      {children}
    </div>
  );
};

Up_Loading.propTypes = {
  onUpload: PropTypes.func.isRequired,
  allowedFormats: PropTypes.arrayOf(PropTypes.string),
  children: PropTypes.node,
};

Up_Loading.defaultProps = {
  allowedFormats: ["image/*", "video/*", "audio/*"],
};

export default Up_Loading;
