import React, { useState } from 'react';
import { MdPhotoCamera } from 'react-icons/md';
import { FaVideo } from 'react-icons/fa';

const FileSelect = () => {
    const [selectedFiles, setSelectedFiles] = useState([]);

  const handleFileChange = (event) => {
    const files = event.target.files;
    const newFiles = Array.from(files);

    setSelectedFiles((prevFiles) => [...prevFiles, ...newFiles]);
  };

  const handleRemove = (index) => {
    setSelectedFiles((prevFiles) => prevFiles.filter((file, i) => i !== index));
  };

    return (
        <>
        <div className='flex justify-center gap-10'>
        <label htmlFor='photo' className='bg-[#F7FFF1] items-center rounded-lg cursor-pointer'>
        <MdPhotoCamera className='text-[#44BD32] h-[45px] w-auto relative px-8' />
        Add Photos
        <input
          type='file'
          id='photo'
          className='hidden'
          onChange={handleFileChange}
          accept='image/*'
          multiple
        />
      </label>

            <label htmlFor='video' className='bg-[#F7FFF1] items-center rounded-lg cursor-pointer'>
                <FaVideo className='text-[#44BD32] h-[45px] w-auto relative px-8' />
                Add Video
                <input
                    type='file'
                    id='video'
                    className='hidden'
                    onChange={handleFileChange}
                    accept='video/*' // Allow only video files
                />
            </label>
        </div>
        <div>
        {selectedFiles.map((file, index) => (
          <div key={index} className='flex items-center'>
            <img
              src={URL.createObjectURL(file)}
              alt={`Selected ${index + 1}`}
              className='max-w-full h-auto mr-2'
              style={{ maxWidth: '100px' }}
            />
            <button
              type='button'
              onClick={() => handleRemove(index)}
              className='bg-red-500 text-white px-2 py-1 rounded'
            >
              Remove
            </button>
          </div>
        ))}

        </div>
        </>
    )
}

export default FileSelect