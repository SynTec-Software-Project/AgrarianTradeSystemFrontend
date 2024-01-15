import React from 'react'
import { Tooltip, Typography } from "@material-tailwind/react";

export const Hint = (prop) => {
  return (
    <div>
         <Tooltip
      placement="top"
      className="border border-blue-gray-50 bg-white px-4 py-3 shadow-xl shadow-black/10"
      content={
        <div className="w-80">
          <Typography color="blue-gray" className="font-medium">
            {prop.title}
          </Typography>
          <Typography
            variant="small"
            color="blue-gray"
            className="font-normal opacity-80"
          >
            {prop.hint}
          </Typography>
        </div>
      }
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
        className="h-5 w-5 cursor-pointer text-blue-gray-500"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
        />
      </svg>
    </Tooltip>
    </div>
  )
}


export const Title = (prop) => {
  return (
        <h6 class="block mb-3 mx-2 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-blue-gray-900">
                          {prop.title}
        </h6>
   
  )
}
