import React, { useRef, useState } from 'react';
import { IoCloudUploadOutline } from "react-icons/io5";
import { MdOutlineErrorOutline } from "react-icons/md";


export default function CreateAccount() {
  const [pwd, setPwd]=useState("");
  const [confmpwd, setConfmpwd]=useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isPhoneNumberValid, setIsPhoneNumberValid] = useState(true);
  const [NIC, setNIC] = useState("");
  const [isnicValid, setIsnicValid] = useState(false);

  const [profileImg, setprofileImg]=useState(null);
  const imgInputRef=useRef(null);

  const validatePhoneNumber = (number) => {
    const phoneNumberRegex = /^[0-9]{10}$/;
    return phoneNumberRegex.test(number);
  };

  const validateNIC = (nic) => {
    const nicRegex = /^[0-9]{12}$/;
    return nicRegex.test(nic);
  };
  

  const handleProfileImg=(e)=>{
    const file=e.target.files[0];
    console.log(file);
    setprofileImg(e.target.files[0]);
  }

  const handleDrag=(e)=>{
    e.preventDefault();
    setIsDragging(true);
  }
  const handleDrop=(e)=>{
    e.preventDefault();
    const file=e.dataTransfer.files[0];
    if (file.type.startsWith('image/')) {
        setprofileImg(e.dataTransfer.files[0]);
        console.log(file);
    } 
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    //const isValid = validatePhoneNumber(phoneNumber);
    //setIsPhoneNumberValid(isValid);
    //const isValidNIC = validateNIC(nic);
    //setIsPhoneNumberValid(isValidNIC);

    if (!isPhoneNumberValid) {
        alert("Please enter valid phone number");
        return;
    }
    if (pwd!=confmpwd) {
        alert("Please make sure your passwords are match");
        return;
    }
    if (profileImg==null) {
        alert("Please upload a phofile photo");
        return;
    }
    if (pwd.length < 8) {
        alert("Password minimum length should be 8 characters");
        return;
    }
    if (!isnicValid) {
        alert("Please enter valid NIC number");
        return;
    }

    // Submission with API

  };

  return (
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
                            <div className="w-full p-3 md:w-1/3">
                                <p className="text-base font-semibold text-gray-700 dark:text-gray-400">
                                    Name
                                </p>
                            </div>
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
                            <div className="w-full p-3 md:w-1/3">
                                <p className="text-base font-semibold text-gray-700 dark:text-gray-400">
                                    User name
                                </p>
                            </div>
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
                            <div className="w-full p-3 md:w-1/3">
                                <p className="text-base font-semibold text-gray-700 dark:text-gray-400">
                                    Email address
                                </p>
                            </div>
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
                            <div className="w-full p-3 md:w-1/3">
                                <p className="text-base font-semibold text-gray-700 dark:text-gray-400">
                                    Password
                                </p>
                            </div>
                            <div className="w-full p-3 md:flex-1">
                                <input
                                    className="w-full px-4 py-2.5 dark:bg-gray-800 dark:border-gray-800 dark:placeholder-gray-500 dark:text-gray-400  text-base text-gray-900 rounded-lg font-normal border border-gray-200"
                                    type="password" placeholder="******" required onChange={(e)=>setPwd(e.target.value)}/>
                                {
                                    pwd && pwd.length<8 &&
                                    <p className="mt-4 flex text-base font-semibold text-red-400 dark:text-gray-400">
                                        <MdOutlineErrorOutline size={20}/> &nbsp;Password minimum length should be 8 characters.
                                    </p>
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <div className="py-6 border-b border-gray-100 dark:border-gray-800">
                    <div className="w-full md:w-9/12">
                        <div className="flex flex-wrap -m-3">
                            <div className="w-full p-3 md:w-1/3">
                                <p className="text-base font-semibold text-gray-700 dark:text-gray-400">
                                    Confirm password
                                </p>
                            </div>
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
                            <div className="w-full p-3 md:w-1/3">
                                <p className="text-base font-semibold text-gray-700 dark:text-gray-400">
                                    NIC number
                                </p>
                            </div>
                            <div className="w-full p-3 md:flex-1">
                                <input
                                    className="w-full px-4 py-2.5 dark:bg-gray-800 dark:border-gray-800 dark:placeholder-gray-500 dark:text-gray-400  text-base text-gray-900 rounded-lg font-normal border border-gray-200"
                                    type="text" placeholder="197419202757" required
                                    onChange={(e) => {
                                        const number = e.target.value;
                                        setNIC(number);
                                        setIsnicValid(validateNIC(number));
                                    }}/>
                                {(NIC!="" && !isnicValid) && 
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
                            <div className="w-full p-3 md:w-1/3">
                                <p className="text-base font-semibold text-gray-700 dark:text-gray-400">
                                    Phone number
                                </p>
                            </div>
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
                            <div className="w-full p-3 md:w-1/3">
                                <p className="text-base font-semibold text-gray-700 dark:text-gray-400">
                                    Address line 1
                                </p>
                            </div>
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
                            <div className="w-full p-3 md:w-1/3">
                                <p className="text-base font-semibold text-gray-700 dark:text-gray-400">
                                    Address line 2
                                </p>
                            </div>
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
                            <div className="w-full p-3 md:w-1/3">
                                <p className="text-base font-semibold text-gray-700 dark:text-gray-400">
                                    Address line 3
                                </p>
                            </div>
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
                            <div className="w-full p-3 md:w-1/3">
                                <p className="text-base font-semibold text-gray-700 dark:text-gray-400">Profile photo</p>
                            </div>
                            <div className="w-full p-3 md:flex-1">
                                <div className="flex items-center justify-center w-full">
                                    <label for="dropzone-file"  onDragOver={handleDrag} onDrop={handleDrop} 
                                        className="flex flex-col items-center justify-center w-full h-64 bg-white border-2 border-gray-200 border-dashed rounded-lg dark:bg-gray-800 dark:hover:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 ">
                                        {!profileImg && 
                                          <div onClick={() => imgInputRef.current.click()} className="flex flex-col items-center justify-center px-4 pt-5 pb-6 cursor-pointer">
                                              <span className="text-primary dark:text-gray-400">
                                                  <IoCloudUploadOutline size={28} />
                                              </span>
                                              <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                                                  <span className="font-semibold text-primary" role='button'>Click to upload</span> or drag
                                                  and drop
                                              </p>
                                              <input type='file' accept='image/*' hidden onChange={handleProfileImg} ref={imgInputRef}/>
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
                <div className="flex pt-6 flex-wrap -m-1.5">
                    <div className="w-full md:w-auto p-1.5">
                        <input type='reset' value="Clear"
                            className="flex flex-wrap justify-center w-full px-4 py-2 text-sm font-medium hover:cursor-pointer text-gray-500 bg-white border border-gray-200 rounded-md hover:border-gray-300 hover:bg-gray-100 active:shadow-xl active:ring-2 active:ring-gray-300" onClick={()=>setprofileImg(null)}>
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
  )
}
