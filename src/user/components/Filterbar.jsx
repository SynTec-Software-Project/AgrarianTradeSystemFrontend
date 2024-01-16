import React from 'react'
import { useState } from 'react'
import { Radio, Typography } from "@material-tailwind/react"
import { Title } from '@/pages/SellerDashboard/dashboard/forms/Hint';
import { Select, Option } from "@material-tailwind/react";

const Checkbox = ({ id, label }) => {
  
    const [checked, setChecked] = useState(false);
  
    const handleCheckboxChange = () => {
      setChecked(!checked);
    };
  
    return (
      
      <div className="flex items-center mb-4">
        <input
          id={id}
          type="checkbox"
          value=""
          color='green'
          checked={checked}
          onChange={handleCheckboxChange}
          className="w-4 h-4 text-primary bg-gray-100 border-gray-300 rounded focus:ring-primary dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        />
        <label htmlFor={id} className="ms-2 text-sm font-medium text-gray-600 dark:text-gray-300">
          {label}
        </label>
      </div>
    );
  };
  

const Filterbar = () => {
    let [plan, setPlan] = useState('startup');
    const districts = [
      "Colombo",
      "Gampaha",
      "Kalutara",
      "Kandy",
      "Matale",
      "Nuwara Eliya",
      "Galle",
      "Matara",
      "Hambantota",
      "Jaffna",
      "Kilinochchi",
      "Mannar",
      "Vavuniya",
      "Mullaitivu",
      "Batticaloa",
      "Ampara",
      "Trincomalee",
      "Kurunegala",
      "Puttalam",
      "Anuradhapura",
      "Polonnaruwa",
      "Badulla",
      "Monaragala",
      "Ratnapura",
      "Kegalle"
    ];

    const vegetableOptions = [
      "Artichoke",
      "Asparagus",
      "Bell Pepper",
      "Broccoli",
      "Brussels Sprouts",
      "Cabbage",
      "Carrot",
      "Cauliflower",
      "Celery",
      "Cucumber",
      "Eggplant",
      "Kale",
      "Leek",
      "Potato",
      "Radish",
      "Spinach",
      "Sweet Potato",
      "Tomato",
      "Zucchini",
      "Green Beans"
    ];
  return (
    <div>
        <div className='px-8 border-r border-gray-200'>
                {/* filter form */}
          <form >
                <div className='mb-8'>
                    <Title title="Category"/>
                    <div className=' ml-4'>
                    <Checkbox id="vegitable" label="Vegitable" />
                    <Checkbox id="fruit" label="Fruit" />
                    </div>
                </div>

                <div className='mb-8'>
                  <div className="w-full">
                  <Title title="Type"/>
                      <Select label="Select Type">
                          {vegetableOptions.map((vegitable, index) => (
                            <Option key={index}>{vegitable}</Option>
                          ))}
                                          
                      </Select> 
                  </div> 
                </div>

                <div className='mb-8'>
                  <div className="w-full">
                  <Title title="Location"/>
                      <Select label="Select Type">
                        {districts.map((district, index) => (
                          <Option key={index}>{district}</Option>
                        ))}
                                      
                      </Select> 
                  </div> 
                </div>

                <div className='mb-8'>
                    <Title title="Quantity"/>
                    <div className=' ml-4'>
                    <Checkbox id="vegitable" label="0 - 20" />
                    <Checkbox id="fruit" label="20 - 50" />
                    <Checkbox id="vegitable" label="Above 50" />
                    
                    </div>
                </div>
          </form>
        </div>
    </div>
  )
}

export default Filterbar