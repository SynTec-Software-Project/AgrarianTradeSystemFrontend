import React from 'react'
import MainNav from '../components/MainNav'
import { useState } from 'react'
import { Title } from '@/pages/SellerDashboard/dashboard/forms/Hint'
import { Radio, Typography } from "@material-tailwind/react"

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
          checked={checked}
          onChange={handleCheckboxChange}
          className="w-4 h-4 text-primary bg-gray-100 border-gray-300 rounded focus:ring-primary dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        />
        <label htmlFor={id} className="ms-2 text-lg font-medium text-gray-800 dark:text-gray-300">
          {label}
        </label>
      </div>
    );
  };
  
  
const ProductList = () => {
    let [plan, setPlan] = useState('startup')
  return (
    <div>
        <MainNav/>

        <div className='grid grid-cols-4'>
            <div className='px-8 border-r border-gray-200 h-[100px] bg-fixed'>
                {/* filter form */}
                <form >
                <div>
                <Checkbox id="vegitable" label="Vegitable" />
                <Checkbox id="fruit" label="Fruit" />
                </div>
                </form>
            </div>
            <div className='col-span-3 bg-secondary overflow-y-auto h-screen'>
                {/* products */}
                <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic ipsam minus reiciendis odio magnam tempora molestiae quidem officia, 
                    rchitecto reprehenderit explicabo provident molestias debitis eveniet beatae et voluptate harum esse.
                </p>
            </div>
        </div>
    </div>
  )
}

export default ProductList