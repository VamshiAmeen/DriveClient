// src/UploadDocument.js

import React, { useState } from "react";
import axios from "axios";

const UploadDocument = ({ setDocumentContent }) => {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) {
      alert("Please upload a file.");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await axios.post("http://localhost:3000/upload", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setDocumentContent(response.data.documentContent); // Set extracted content to parent state
    } catch (error) {
      console.error("Error uploading document:", error);
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload Document</button>
    </div>
  );
};

export default UploadDocument;
