import React from 'react';
import { IoCloudUploadOutline } from "react-icons/io5";

export default function CreateAccount() {
  return (
    <div>
      <form class="py-16 bg-gray-100 dark:bg-gray-800">
        <div class="max-w-6xl px-4 mx-auto">
            <div class="p-6 bg-white border border-gray-100 rounded-lg shadow dark:bg-gray-900 dark:border-gray-900">
                <div class="pb-6 border-b border-gray-100 dark:border-gray-700 ">
                    <h2 class="text-xl font-bold text-gray-800 md:text-3xl dark:text-gray-300">
                        Sign Up
                    </h2>
                    <p class="text-xs font-medium text-gray-500">
                        Enter your details below
                    </p>
                </div>
                <div class="py-6 border-b border-gray-100 dark:border-gray-800">
                    <div class="w-full md:w-9/12">
                        <div class="flex flex-wrap -m-3">
                            <div class="w-full p-3 md:w-1/3">
                                <p class="text-base font-semibold text-gray-700 dark:text-gray-400">
                                    Name
                                </p>
                            </div>
                            <div class="w-full p-3 md:w-1/3">
                                <input
                                    class="w-full dark:bg-gray-800 dark:border-gray-800 px-4 dark:placeholder-gray-500 dark:text-gray-400 py-2.5 text-base text-gray-900 rounded-lg font-normal border border-gray-200"
                                    type="text" placeholder="First name"/>
                            </div>
                            <div class="w-full p-3 md:w-1/3">
                                <input
                                    class="w-full px-4 py-2.5 dark:bg-gray-800 dark:border-gray-800 dark:placeholder-gray-500 dark:text-gray-400  text-base text-gray-900 rounded-lg font-normal border border-gray-200"
                                    type="text" placeholder="Last name"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="py-6 border-b border-gray-100 dark:border-gray-800">
                    <div class="w-full md:w-9/12">
                        <div class="flex flex-wrap -m-3">
                            <div class="w-full p-3 md:w-1/3">
                                <p class="text-base font-semibold text-gray-700 dark:text-gray-400">
                                    User name
                                </p>
                            </div>
                            <div class="w-full p-3 md:flex-1">
                                <input
                                    class="w-full px-4 py-2.5 dark:bg-gray-800 dark:border-gray-800 dark:placeholder-gray-500 dark:text-gray-400  text-base text-gray-900 rounded-lg font-normal border border-gray-200"
                                    type="email" placeholder="username"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="py-6 border-b border-gray-100 dark:border-gray-800">
                    <div class="w-full md:w-9/12">
                        <div class="flex flex-wrap -m-3">
                            <div class="w-full p-3 md:w-1/3">
                                <p class="text-base font-semibold text-gray-700 dark:text-gray-400">
                                    Email address
                                </p>
                            </div>
                            <div class="w-full p-3 md:flex-1">
                                <input
                                    class="w-full px-4 py-2.5 dark:bg-gray-800 dark:border-gray-800 dark:placeholder-gray-500 dark:text-gray-400  text-base text-gray-900 rounded-lg font-normal border border-gray-200"
                                    type="email" placeholder="name@gmail.com"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="py-6 border-b border-gray-100 dark:border-gray-800">
                    <div class="w-full md:w-9/12">
                        <div class="flex flex-wrap -m-3">
                            <div class="w-full p-3 md:w-1/3">
                                <p class="text-base font-semibold text-gray-700 dark:text-gray-400">
                                    Password
                                </p>
                            </div>
                            <div class="w-full p-3 md:flex-1">
                                <input
                                    class="w-full px-4 py-2.5 dark:bg-gray-800 dark:border-gray-800 dark:placeholder-gray-500 dark:text-gray-400  text-base text-gray-900 rounded-lg font-normal border border-gray-200"
                                    type="email" placeholder="******"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="py-6 border-b border-gray-100 dark:border-gray-800">
                    <div class="w-full md:w-9/12">
                        <div class="flex flex-wrap -m-3">
                            <div class="w-full p-3 md:w-1/3">
                                <p class="text-base font-semibold text-gray-700 dark:text-gray-400">
                                    Confirm password
                                </p>
                            </div>
                            <div class="w-full p-3 md:flex-1">
                                <input
                                    class="w-full px-4 py-2.5 dark:bg-gray-800 dark:border-gray-800 dark:placeholder-gray-500 dark:text-gray-400  text-base text-gray-900 rounded-lg font-normal border border-gray-200"
                                    type="email" placeholder="******"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="py-6 border-b border-gray-100 dark:border-gray-800">
                    <div class="w-full md:w-9/12">
                        <div class="flex flex-wrap -m-3">
                            <div class="w-full p-3 md:w-1/3">
                                <p class="text-base font-semibold text-gray-700 dark:text-gray-400">
                                    NIC number
                                </p>
                            </div>
                            <div class="w-full p-3 md:flex-1">
                                <input
                                    class="w-full px-4 py-2.5 dark:bg-gray-800 dark:border-gray-800 dark:placeholder-gray-500 dark:text-gray-400  text-base text-gray-900 rounded-lg font-normal border border-gray-200"
                                    type="email" placeholder="197419202757"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="py-6 border-b border-gray-100 dark:border-gray-800">
                    <div class="w-full md:w-9/12">
                        <div class="flex flex-wrap -m-3">
                            <div class="w-full p-3 md:w-1/3">
                                <p class="text-base font-semibold text-gray-700 dark:text-gray-400">
                                    Phone number
                                </p>
                            </div>
                            <div class="w-full p-3 md:flex-1">
                                <input
                                    class="w-full px-4 py-2.5 dark:bg-gray-800 dark:border-gray-800 dark:placeholder-gray-500 dark:text-gray-400  text-base text-gray-900 rounded-lg font-normal border border-gray-200"
                                    type="email" placeholder="07XXXXXXXX"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="py-6 border-b border-gray-100 dark:border-gray-800">
                    <div class="w-full md:w-9/12">
                        <div class="flex flex-wrap -m-3">
                            <div class="w-full p-3 md:w-1/3">
                                <p class="text-base font-semibold text-gray-700 dark:text-gray-400">
                                    Address line 1
                                </p>
                            </div>
                            <div class="w-full p-3 md:flex-1">
                                <input
                                    class="w-full px-4 py-2.5 dark:bg-gray-800 dark:border-gray-800 dark:placeholder-gray-500 dark:text-gray-400  text-base text-gray-900 rounded-lg font-normal border border-gray-200"
                                    type="email" placeholder="No. 100"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="py-6 border-b border-gray-100 dark:border-gray-800">
                    <div class="w-full md:w-9/12">
                        <div class="flex flex-wrap -m-3">
                            <div class="w-full p-3 md:w-1/3">
                                <p class="text-base font-semibold text-gray-700 dark:text-gray-400">
                                    Address line 2
                                </p>
                            </div>
                            <div class="w-full p-3 md:flex-1">
                                <input
                                    class="w-full px-4 py-2.5 dark:bg-gray-800 dark:border-gray-800 dark:placeholder-gray-500 dark:text-gray-400  text-base text-gray-900 rounded-lg font-normal border border-gray-200"
                                    type="email" placeholder="Main road"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="py-6 border-b border-gray-100 dark:border-gray-800">
                    <div class="w-full md:w-9/12">
                        <div class="flex flex-wrap -m-3">
                            <div class="w-full p-3 md:w-1/3">
                                <p class="text-base font-semibold text-gray-700 dark:text-gray-400">
                                    Address line 3
                                </p>
                            </div>
                            <div class="w-full p-3 md:flex-1">
                                <input
                                    class="w-full px-4 py-2.5 dark:bg-gray-800 dark:border-gray-800 dark:placeholder-gray-500 dark:text-gray-400  text-base text-gray-900 rounded-lg font-normal border border-gray-200"
                                    type="email" placeholder="Colombo"/>
                            </div>
                        </div>
                    </div>
                </div>
                
                
                
                
                <div class="py-6 border-b border-gray-100 dark:border-gray-800">
                    <div class="w-full md:w-9/12">
                        <div class="flex flex-wrap -m-3">
                            <div class="w-full p-3 md:w-1/3">
                                <p class="text-sm font-semibold text-gray-800 dark:text-gray-400">Profile photo</p>
                            </div>
                            <div class="w-full p-3 md:flex-1">
                                <div class="flex items-center justify-center w-full">
                                    <label for="dropzone-file"
                                        class="flex flex-col items-center justify-center w-full h-64 bg-white border-2 border-gray-200 border-dashed rounded-lg cursor-pointer dark:bg-gray-800 dark:hover:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 ">
                                        <div class="flex flex-col items-center justify-center px-4 pt-5 pb-6">
                                            <span class="text-primary dark:text-gray-400">
                                                <IoCloudUploadOutline size={28} />
                                            </span>
                                            <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
                                                <span class="font-semibold text-primary">Click to upload</span> or drag
                                                and drop
                                            </p>
                                            <p class="text-xs text-gray-500 dark:text-gray-400">
                                                SVG, PNG, JPG or
                                                GIF (upto 10MB)
                                            </p>
                                        </div>
                                        <input type="file" class="hidden"/>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="flex pt-6 flex-wrap -m-1.5">
                    <div class="w-full md:w-auto p-1.5">
                        <input type='reset' value="Clear"
                            class="flex flex-wrap justify-center w-full px-4 py-2 text-sm font-medium hover:cursor-pointer text-gray-500 bg-white border border-gray-200 rounded-md hover:border-gray-300 hover:bg-gray-100">
                        </input>
                    </div>
                    <div class="w-full md:w-auto p-1.5">
                        <input type='submit' value="Sign In"
                            class="flex flex-wrap justify-center w-full px-4 py-2 text-sm font-medium text-white bg-primary border border-primary rounded-md hover:bg-green-800 ">
                        </input>
                    </div>
                </div>
            </div>
        </div>
      </form>
    </div>
  )
}
