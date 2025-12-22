import { useState, useEffect, useRef, useMemo } from "react";
import Button from "@mui/material/Button";
import Navbar from "./Navbar.jsx";
import "./upload.css";
import { fetchFiles } from "../api/upload.js";

function Upload() {
  const [files, setFiles] = useState([]);
  const fileInputRef = useRef(null);

  
  useEffect(() => {
    fetchFiles()
      .then((data) => {
       
        const formatted = data.map((item) => ({
          name: item.title,
          url: null,          
          source: "api",
        }));
        setFiles(formatted);
      })
      .catch((err) => console.log("API Error:", err));
  }, []);

  
  const handleUpload = (e) => {
    const selectedFiles = Array.from(e.target.files);

    const formatted = selectedFiles.map((file) => ({
      name: file.name,
      url: URL.createObjectURL(file), 
      source: "local",
    }));

    setFiles((prev) => [...prev, ...formatted]);
    e.target.value = null;
  };

  
  const handleDelete = (index) => {
    const fileToDelete = files[index];

    if (fileToDelete?.url) {
      URL.revokeObjectURL(fileToDelete.url);
    }

    setFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const fileCount = useMemo(() => files.length, [files]);

  return (
    <>
      
      <Navbar />

      <div className="page">
        <div className="folder-wrapper">
          <div className="tabs">
            <div className="tab"></div>
            <div className="tab active"></div>
          </div>

          <div className="folder">
            <h1 className="title">
              MY <br /> FILES
            </h1>

            <input
              type="file"
              multiple
              ref={fileInputRef}
              hidden
              onChange={handleUpload}
            />

            <Button
              variant="contained"
              className="upload-btn"
              onClick={() => fileInputRef.current?.click()}
            >
              Upload Files
            </Button>

            <p className="count">Total Files: {fileCount}</p>

            <div className="files-area">
              {files.length === 0 ? (
                <p className="empty">No files uploaded</p>
              ) : (
                files.map((file, index) => (
                  <div className="file-item" key={`${file.name}-${index}`}>
                    {file.url ? (
                      <a href={file.url} target="_blank" rel="noreferrer">
                        {file.name}
                      </a>
                    ) : (
                      <span>{file.name}</span>
                    )}

                    <button onClick={() => handleDelete(index)}>✖</button>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Upload;
