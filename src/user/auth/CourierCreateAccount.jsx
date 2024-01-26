import React, { useRef, useState } from 'react';
import { MdOutlineErrorOutline } from "react-icons/md";
import { IoCloudUploadOutline } from "react-icons/io5";
import FormLabel from '../components/FormLabel';
import CourierBanner from '../components/CourierBanner';

export default function CourierCreateAccount() {
    const [pwd, setPwd]=useState("");
    const [confmpwd, setConfmpwd]=useState("");
    const [NIC, setNIC] = useState("");
    const [isNICValid, setIsNICValid] = useState(true);
    const [phoneNumber, setPhoneNumber] = useState("");
    const [isPhoneNumberValid, setIsPhoneNumberValid] = useState(true);
    const [profileImg, setprofileImg]=useState(null);
    const [frontNIC, setfrontNIC] = useState(null);
    const [backNIC, setbackNIC] = useState(null);
    const [GSCertificate, setGSCertificate] = useState(null);
    const profileInputRef=useRef(null);
    const forntNICInputRef=useRef(null);
    const backNICInputRef=useRef(null);
    const GSCInputRef=useRef(null);
  
    const handleProfileImage=(e)=>{
      const file=e.target.files[0];
      console.log(file);
      setprofileImg(e.target.files[0]);
    }
    const handleNICFront=(e)=>{
      const file=e.target.files[0];
      console.log(file);
      setfrontNIC(e.target.files[0]);
    }
    const handleNICBack=(e)=>{
      const file=e.target.files[0];
      console.log(file);
      setbackNIC(e.target.files[0]);
    }
    const handleGSCertificate=(e)=>{
      const file=e.target.files[0];
      console.log(file);
      setGSCertificate(e.target.files[0]);
    }
  
    const handleDrag=(e)=>{
      e.preventDefault();
    }
    const handleDropProfile=(e)=>{
      e.preventDefault();
      const file=e.dataTransfer.files[0];
      if (file.type.startsWith('image/')) {
          setprofileImg(e.dataTransfer.files[0]);
          console.log(file);
      } 
    }
    const handleDropFrontNIC=(e)=>{
      e.preventDefault();
      const file=e.dataTransfer.files[0];
      if (file.type.startsWith('image/')) {
          setfrontNIC(e.dataTransfer.files[0]);
          console.log(file);
      } 
    }
    const handleDropBackNIC=(e)=>{
      e.preventDefault();
      const file=e.dataTransfer.files[0];
      if (file.type.startsWith('image/')) {
          setbackNIC(e.dataTransfer.files[0]);
          console.log(file);
      } 
    }
    const handleDropGSCertificate=(e)=>{
      e.preventDefault();
      const file=e.dataTransfer.files[0];
      if (file.type.startsWith('image/')) {
          setGSCertificate(e.dataTransfer.files[0]);
          console.log(file);
      } 
    }
    const validatePhoneNumber = (number) => {
      const phoneNumberRegex = /^[0-9]{10}$/;
      return phoneNumberRegex.test(number);
    };
  
    const validateNIC = (number) => {
      const nicRegex = /^[0-9]{12}$/;
      return nicRegex.test(number);
    };
    
    const handleSubmit = (e) => {
      e.preventDefault();
  
      if (pwd.length<8) {
          alert("Password must be at least 8 characters long");
          return;
      }
      if (pwd!=confmpwd) {
          alert("Please make sure your passwords are match");
          return;
      }
      if (!isNICValid) {
          alert("Please enter valid NIC number");
          return;
      }
      if (!isPhoneNumberValid) {
          alert("Please enter valid phone number");
          return;
      }
      if (profileImg==null) {
          alert("Please upload a phofile photo");
          return;
      }
      if (frontNIC==null) {
          alert("Please upload a front image of National Identity Card");
          return;
      }
      if (backNIC==null) {
          alert("Please upload a back image of National Identity Card");
          return;
      }
      if (GSCertificate==null) {
          alert("Please upload a Grama Sewa NIladari Certificate");
          return;
      }
      
  
      // Submission with API
  
    };
  
    return (
      <>
          <CourierBanner/>
          <div>
          <form className="py-16 bg-gray-100 dark:bg-gray-800" onSubmit={handleSubmit}>
              <div className="max-w-6xl px-4 mx-auto">
                  <div className="p-6 bg-white border border-gray-100 rounded-lg shadow dark:bg-gray-900 dark:border-gray-900">
                      <div className="pb-6 border-b border-gray-100 dark:border-gray-700 ">
                          <h2 className="text-xl font-bold text-gray-800 md:text-3xl dark:text-gray-300">
                              Sign Up
                          </h2>
                          <p className="text-xs font-medium text-gray-500">
                              Enter your details below
                          </p>
                      </div>
                      <div className="py-6 border-b border-gray-100 dark:border-gray-800">
                          <div className="w-full md:w-9/12">
                              <div className="flex flex-wrap -m-3">
                                  <FormLabel>Name</FormLabel>
                                  <div className="w-full p-3 md:w-1/3">
                                      <input
                                          className="w-full dark:bg-gray-800 dark:border-gray-800 px-4 dark:placeholder-gray-500 dark:text-gray-400 py-2.5 text-base text-gray-900 rounded-lg font-normal border border-gray-200"
                                          type="text" placeholder="First name" required/>
                                  </div>
                                  <div className="w-full p-3 md:w-1/3">
                                      <input
                                          className="w-full px-4 py-2.5 dark:bg-gray-800 dark:border-gray-800 dark:placeholder-gray-500 dark:text-gray-400  text-base text-gray-900 rounded-lg font-normal border border-gray-200"
                                          type="text" placeholder="Last name" required/>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className="py-6 border-b border-gray-100 dark:border-gray-800">
                          <div className="w-full md:w-9/12">
                              <div className="flex flex-wrap -m-3">
                                  <FormLabel>User name</FormLabel>
                                  <div className="w-full p-3 md:flex-1">
                                      <input
                                          className="w-full px-4 py-2.5 dark:bg-gray-800 dark:border-gray-800 dark:placeholder-gray-500 dark:text-gray-400  text-base text-gray-900 rounded-lg font-normal border border-gray-200"
                                          type="text" placeholder="username" required/>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className="py-6 border-b border-gray-100 dark:border-gray-800">
                          <div className="w-full md:w-9/12">
                              <div className="flex flex-wrap -m-3">
                                  <FormLabel>Email address</FormLabel>
                                  <div className="w-full p-3 md:flex-1">
                                      <input
                                          className="w-full px-4 py-2.5 dark:bg-gray-800 dark:border-gray-800 dark:placeholder-gray-500 dark:text-gray-400  text-base text-gray-900 rounded-lg font-normal border border-gray-200"
                                          type="email" placeholder="name@gmail.com" required/>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className="py-6 border-b border-gray-100 dark:border-gray-800">
                          <div className="w-full md:w-9/12">
                              <div className="flex flex-wrap -m-3">
                                  <FormLabel>Password</FormLabel>
                                  <div className="w-full p-3 md:flex-1">
                                      <input
                                          className="w-full px-4 py-2.5 dark:bg-gray-800 dark:border-gray-800 dark:placeholder-gray-500 dark:text-gray-400  text-base text-gray-900 rounded-lg font-normal border border-gray-200"
                                          type="password" placeholder="******" required onChange={(e)=>setPwd(e.target.value)}/>
                                      {pwd && pwd.length < 8 && (
                                          <p className="mt-4 flex text-base font-semibold text-red-400 dark:text-gray-400">
                                              <MdOutlineErrorOutline size={20}/> &nbsp; Password must be at least 8 characters long.
                                          </p>
                                      )}
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className="py-6 border-b border-gray-100 dark:border-gray-800">
                          <div className="w-full md:w-9/12">
                              <div className="flex flex-wrap -m-3">
                                  <FormLabel>Confirm password</FormLabel>
                                  <div className="w-full p-3 md:flex-1">
                                      <input
                                          className="w-full px-4 py-2.5 dark:bg-gray-800 dark:border-gray-800 dark:placeholder-gray-500 dark:text-gray-400  text-base text-gray-900 rounded-lg font-normal border border-gray-200"
                                          type="password" placeholder="******" required onChange={(e)=>setConfmpwd(e.target.value)}/>
                                          {
                                              pwd!=confmpwd && 
                                              <p className="mt-4 flex text-base font-semibold text-red-400 dark:text-gray-400">
                                              <MdOutlineErrorOutline size={20}/> &nbsp;Please make sure your passwords match.
                                          </p>
                                          }
                                  </div>
                              </div>
                          </div>
                      </div>
                      
                      <div className="py-6 border-b border-gray-100 dark:border-gray-800">
                          <div className="w-full md:w-9/12">
                              <div className="flex flex-wrap -m-3">
                                  <FormLabel>NIC number</FormLabel>
                                  <div className="w-full p-3 md:flex-1">
                                      <input
                                          className="w-full px-4 py-2.5 dark:bg-gray-800 dark:border-gray-800 dark:placeholder-gray-500 dark:text-gray-400  text-base text-gray-900 rounded-lg font-normal border border-gray-200"
                                          type="text" placeholder="197419202757" required
                                          onChange={(e) => {
                                              const number = e.target.value;
                                              setNIC(number);
                                              setIsNICValid(validateNIC(number));
                                          }}
                                          />
                                      {(NIC!="" && !isNICValid) && 
                                          <p className="mt-4 flex text-base font-semibold text-red-400 dark:text-gray-400">
                                              <MdOutlineErrorOutline size={20}/> &nbsp;Please enter a valid NIC number.
                                          </p>
                                      }
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className="py-6 border-b border-gray-100 dark:border-gray-800">
                          <div className="w-full md:w-9/12">
                              <div className="flex flex-wrap -m-3">
                                  <FormLabel>Phone number</FormLabel>
                                  <div className="w-full p-3 md:flex-1">
                                      <input
                                          className="w-full px-4 py-2.5 dark:bg-gray-800 dark:border-gray-800 dark:placeholder-gray-500 dark:text-gray-400  text-base text-gray-900 rounded-lg font-normal border border-gray-200"
                                          type="text" placeholder="07XXXXXXXX" required
                                          onChange={(e) => {
                                              const number = e.target.value;
                                              setPhoneNumber(number);
                                              setIsPhoneNumberValid(validatePhoneNumber(number));
                                          }}/>
                                      {(phoneNumber!="" && !isPhoneNumberValid) && 
                                          <p className="mt-4 flex text-base font-semibold text-red-400 dark:text-gray-400">
                                              <MdOutlineErrorOutline size={20}/> &nbsp;Please enter a valid phone number.
                                          </p>
                                      }
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className="py-6 border-b border-gray-100 dark:border-gray-800">
                          <div className="w-full md:w-9/12">
                              <div className="flex flex-wrap -m-3">
                                  <FormLabel>Address line 1</FormLabel>
                                  <div className="w-full p-3 md:flex-1">
                                      <input
                                          className="w-full px-4 py-2.5 dark:bg-gray-800 dark:border-gray-800 dark:placeholder-gray-500 dark:text-gray-400  text-base text-gray-900 rounded-lg font-normal border border-gray-200"
                                          type="text" placeholder="No. 100" required/>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className="py-6 border-b border-gray-100 dark:border-gray-800">
                          <div className="w-full md:w-9/12">
                              <div className="flex flex-wrap -m-3">
                                  <FormLabel>Address line 2</FormLabel>
                                  <div className="w-full p-3 md:flex-1">
                                      <input
                                          className="w-full px-4 py-2.5 dark:bg-gray-800 dark:border-gray-800 dark:placeholder-gray-500 dark:text-gray-400  text-base text-gray-900 rounded-lg font-normal border border-gray-200"
                                          type="text" placeholder="Main road" required/>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className="py-6 border-b border-gray-100 dark:border-gray-800">
                          <div className="w-full md:w-9/12">
                              <div className="flex flex-wrap -m-3">
                                  <FormLabel>Address line 3</FormLabel>
                                  <div className="w-full p-3 md:flex-1">
                                      <input
                                          className="w-full px-4 py-2.5 dark:bg-gray-800 dark:border-gray-800 dark:placeholder-gray-500 dark:text-gray-400  text-base text-gray-900 rounded-lg font-normal border border-gray-200"
                                          type="text" placeholder="Colombo" required/>
                                  </div>
                              </div>
                          </div>
                      </div>
                      
                      <div className="py-6 border-b border-gray-100 dark:border-gray-800">
                          <div className="w-full md:w-9/12">
                              <div className="flex flex-wrap -m-3">
                                  <FormLabel>Vehicle registration number</FormLabel>
                                  <div className="w-full p-3 md:flex-1">
                                      <input
                                          className="w-full px-4 py-2.5 dark:bg-gray-800 dark:border-gray-800 dark:placeholder-gray-500 dark:text-gray-400  text-base text-gray-900 rounded-lg font-normal border border-gray-200"
                                          type="text" placeholder="ABC-XXXX" required/>
                                  </div>
                              </div>
                          </div>
                      </div>
  
                      <div className="py-6 border-b border-gray-100 dark:border-gray-800">
                          <div className="w-full md:w-9/12">
                              <div className="flex flex-wrap -m-3">
                                  <FormLabel>Profile photo</FormLabel>
                                  <div className="w-full p-3 md:flex-1">
                                      <div className="flex items-center justify-center w-full">
                                          <label for="dropzone-file"  onDragOver={handleDrag} onDrop={handleDropProfile} 
                                              className="flex flex-col items-center justify-center w-full h-64 bg-white border-2 border-gray-200 border-dashed rounded-lg dark:bg-gray-800 dark:hover:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 ">
                                              {!profileImg && 
                                                  <div onClick={() => profileInputRef.current.click()} className="flex flex-col items-center justify-center px-4 pt-5 pb-6 cursor-pointer">
                                                      <span className="text-primary dark:text-gray-400">
                                                          <IoCloudUploadOutline size={28} />
                                                      </span>
                                                      <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                                                          <span className="font-semibold text-primary" role='button'>Click to upload</span> or drag
                                                                  and drop
                                                      </p>
                                                      <input type='file' accept='image/*' hidden onChange={handleProfileImage} ref={profileInputRef}/>
                                                      <p className="text-sm text-gray-500 dark:text-gray-400">
                                                                  any type of image
                                                      </p>
                                                  </div>
                                              }
                                              {
                                                  profileImg &&
                                                  <div className='w-32 absolute'>
                                                      <span role='button' onClick={()=>setprofileImg(null)} className='absolute top-0 right-0 text-5xl text-red-500 -mt-6 -mr-3 drop-shadow-lg'>&times;</span>
                                                      <img className='w-auto h-auto' src={(URL.createObjectURL(profileImg))}/>
                                                  
                                                  </div>
                                              }
                                          </label>
                                      
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
  
                      <div className="py-6 border-b border-gray-100 dark:border-gray-800">
                          <div className="w-full md:w-9/12">
                              <div className="flex flex-wrap -m-3">
                                  <FormLabel>Vehicle photo</FormLabel>
                                  <div className="w-full p-3 md:flex-1">
                                      <div className="flex items-center justify-center w-full">
                                          <label for="dropzone-file"  onDragOver={handleDrag} onDrop={handleDropFrontNIC} 
                                              className="flex flex-col items-center justify-center w-full h-64 bg-white border-2 border-gray-200 border-dashed rounded-lg dark:bg-gray-800 dark:hover:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 ">
                                              {!frontNIC && 
                                                  <div onClick={() => forntNICInputRef.current.click()} className="flex flex-col items-center justify-center px-4 pt-5 pb-6 cursor-pointer">
                                                      <span className="text-primary dark:text-gray-400">
                                                          <IoCloudUploadOutline size={28} />
                                                      </span>
                                                      <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                                                          <span className="font-semibold text-primary" role='button'>Click to upload</span> or drag
                                                                  and drop
                                                      </p>
                                                      <input type='file' accept='image/*' hidden onChange={handleNICFront} ref={forntNICInputRef}/>
                                                      <p className="text-sm text-gray-500 dark:text-gray-400">
                                                                  any type of image
                                                      </p>
                                                  </div>
                                              }
                                              {
                                                  frontNIC &&
                                                  <div className='w-32 absolute'>
                                                      <span role='button' onClick={()=>setfrontNIC(null)} className='absolute top-0 right-0 text-5xl text-red-500 -mt-6 -mr-3 drop-shadow-lg'>&times;</span>
                                                      <img className='w-auto h-auto' src={(URL.createObjectURL(frontNIC))}/>
                                                  
                                                  </div>
                                              }
                                          </label>
                                      
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
  
                      <div className="py-6 border-b border-gray-100 dark:border-gray-800">
                          <div className="w-full md:w-9/12">
                              <div className="flex flex-wrap -m-3">
                                  <FormLabel>Driving license photo</FormLabel>
                                  <div className="w-full p-3 md:flex-1">
                                      <div className="flex items-center justify-center w-full">
                                          <label for="dropzone-file"  onDragOver={handleDrag} onDrop={handleDropBackNIC} 
                                              className="flex flex-col items-center justify-center w-full h-64 bg-white border-2 border-gray-200 border-dashed rounded-lg dark:bg-gray-800 dark:hover:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 ">
                                              {!backNIC && 
                                                  <div onClick={() => backNICInputRef.current.click()} className="flex flex-col items-center justify-center px-4 pt-5 pb-6 cursor-pointer">
                                                      <span className="text-primary dark:text-gray-400">
                                                          <IoCloudUploadOutline size={28} />
                                                      </span>
                                                      <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                                                          <span className="font-semibold text-primary" role='button'>Click to upload</span> or drag
                                                                  and drop
                                                      </p>
                                                      <input type='file' accept='image/*' hidden onChange={handleNICBack} ref={backNICInputRef}/>
                                                      <p className="text-sm text-gray-500 dark:text-gray-400">
                                                                  any type of image
                                                      </p>
                                                  </div>
                                              }
                                              {
                                                  backNIC &&
                                                  <div className='w-32 absolute'>
                                                      <span role='button' onClick={()=>setbackNIC(null)} className='absolute top-0 right-0 text-5xl text-red-500 -mt-6 -mr-3 drop-shadow-lg'>&times;</span>
                                                      <img className='w-auto h-auto' src={(URL.createObjectURL(backNIC))}/>
                                                  
                                                  </div>
                                              }
                                          </label>
                                      
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
  
                      
  
                      <div className="flex pt-6 flex-wrap -m-1.5">
                          <div className="w-full md:w-auto p-1.5">
                              <input type='reset' value="Clear"
                                  className="flex flex-wrap justify-center w-full px-4 py-2 text-sm font-medium hover:cursor-pointer text-gray-500 bg-white border border-gray-200 rounded-md hover:border-gray-300 hover:bg-gray-100 active:shadow-xl active:ring-2 active:ring-gray-300" onClick={()=>{setprofileImg(null); setfrontNIC(null); setbackNIC(null); setGSCertificate(null)}}>
                              </input>
                          </div>
                          <div className="w-full md:w-auto p-1.5">
                              <input type='submit' value="Sign In"
                                  className="flex flex-wrap justify-center w-full px-4 py-2 text-sm font-medium text-white bg-primary border border-primary rounded-md hover:bg-green-800 active:ring-2 active:ring-green-800 active:shadow-xl">
                              </input>
                          </div>
                      </div>
                  </div>
              </div>
          </form>
          </div>
      </>
    )
}
