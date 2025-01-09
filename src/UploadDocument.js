import React, { useState } from "react";
import axios from "axios";
import "./UploadDocument.css";

const UploadDocument = () => {
  const [file, setFile] = useState(null);
  const [status, setStatus] = useState("");

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
    setStatus("");
  };

  const handleUpload = async () => {
    if (!file) {
      alert("Please select a file.");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await axios.post("http://localhost:3001/uploads", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setStatus("File uploaded successfully!");
    } catch (error) {
      setStatus("Failed to upload file.");
    }
  };

  return (
    <div className="upload-box">
      <input type="file" onChange={handleFileChange} className="upload-input" />
      <br></br>
      <button onClick={handleUpload} className="upload-btn">
        Upload
      </button>
      {status && <p className="upload-status">{status}</p>}
    </div>
  );
};

export default UploadDocument;
