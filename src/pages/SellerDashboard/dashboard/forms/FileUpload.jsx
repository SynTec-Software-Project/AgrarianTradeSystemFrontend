import React, { useState } from 'react';

function FileUpload({ onUpload }) {
  const [selectedFiles, setSelectedFiles] = useState([]);

  const handleFileInputChange = (event) => {
    const files = event.target.files;
    setSelectedFiles([...selectedFiles, ...files]);
    onUpload([...selectedFiles, ...files]);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };
  const handleRemoveFile = (index) => {
    const newFiles = selectedFiles.filter((_, i) => i !== index);
    setSelectedFiles(newFiles);
  };


  const handleDrop = (event) => {
    event.preventDefault();
    const files = event.dataTransfer.files;
    setSelectedFiles([...selectedFiles, ...files]);
    onUpload([...selectedFiles, ...files]);
  };

  return (
    <div>
      <input
        type="file"
        multiple
        onChange={handleFileInputChange}
        className="hidden"
        id="fileInput"
      />
      <label
        htmlFor="fileInput"
        className="block border border-gray-300 rounded-md py-2 px-4 bg-blue-500 text-white text-center cursor-pointer"
      >
        Click to Upload
      </label>
      <div
        className="border border-gray-300 rounded-md min-h-20 mt-4 py-8 px-4 text-center"
        onDragOver={handleDragOver}
        onDrop={handleDrop}
      >
        Drop Files Here
      </div>
      {selectedFiles.length === 0 ? (
          <p></p>
        ) : (
          <div>
            <h2 className="mt-4">Selected Files:</h2>
            <ul className="list-disc list-inside">
              {selectedFiles.map((file, index) => (
                <div key={index} className="mt-2">
                  <span>{file.name}</span>
                  <button
                    className="ml-2 text-red-600"
                    onClick={() => handleRemoveFile(index)}
                  >
                    Remove
                  </button>
                </div>
              ))}
            </ul>
          </div>
        )}
    </div>
  );
}

export default FileUpload;
