import React, { useState, useRef, useMemo } from "react";
import Button from "@mui/material/Button";
import "./FileUpload.css";

const FileUploadScreen = () => {
  const [files, setFiles] = useState([]);
  const fileInputRef = useRef();

  const handleUpload = (event) => {
    const selectedFiles = Array.from(event.target.files);
    setFiles((prev) => [...prev, ...selectedFiles]);
  };

  const handleDelete = (index) => {
    setFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const fileCount = useMemo(() => files.length, [files]);

  return (
    <div className="page">
      <div className="folder-wrapper">

        {/* Tabs (optional – like the image) */}
        <div className="tabs">
          <div className="tab">LESSONS</div>
          <div className="tab active">WINS</div>
        </div>

        {/* Folder */}
        <div className="folder">
          <h1 className="title">
            MY <br /> FILES
          </h1>

          {/* Hidden input */}
          <input
            type="file"
            multiple
            ref={fileInputRef}
            style={{ display: "none" }}
            onChange={handleUpload}
          />

          <Button
            variant="contained"
            className="upload-btn"
            onClick={() => fileInputRef.current.click()}
          >
            Upload Files
          </Button>

          <p className="count">Total Files: {fileCount}</p>

          <div className="files-area">
            {files.length === 0 ? (
              <p className="empty">No files uploaded</p>
            ) : (
              files.map((file, index) => (
                <div className="file-item" key={index}>
                  <span>{file.name}</span>
                  <button onClick={() => handleDelete(index)}>✖</button>
                </div>
              ))
            )}
          </div>
        </div>

      </div>
    </div>
  );
};

export default FileUploadScreen;
