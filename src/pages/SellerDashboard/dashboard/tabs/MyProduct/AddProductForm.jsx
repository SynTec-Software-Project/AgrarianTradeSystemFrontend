import React from 'react'
import { Select, Option } from "@material-tailwind/react";
import { Radio, Typography } from "@material-tailwind/react";
import { Hint, Title } from '../../forms/Hint';
import { Button } from "@material-tailwind/react";
const AddProductForm = () => {
  return (
    <div>
      <div class="relative my-4 py-10 flex flex-col text-gray-700 bg-white shadow-none rounded-xl bg-clip-border ">
      <form class="max-w-screen-lg mt-8 ml-8 mb-2 w-80 sm:w-96">     
            <div class="flex flex-col gap-6 mb-1"> 

       {/* title*/}
       <div>
                    <div className=' flex'>
                          <Title title='Product Title'/>
                      </div> 
                      <input type="text" id="number-input" aria-describedby="helper-text-explanation"
                       class="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent !border-t-blue-gray-200 bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:!border-t-gray-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50" 
                        placeholder="Title" required>            
                     </input>
                </div>

        {/* description*/}
              <div class="w-96">
              <h6
                    class="block mb-3 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-blue-gray-900">
                    Description
                  </h6>
              <div class="relative w-full min-w-[200px]">
                <textarea
                  class="peer h-full min-h-[100px] w-full resize-none rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:resize-none disabled:border-0 disabled:bg-blue-gray-50"
                  placeholder=" "></textarea>
                <label
                  class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                  Description
                </label>
              </div>
            </div>
                
        {/* Category selection */}
               <Title title="Select Category"></Title>
                <div className="flex gap-10 -mt-3">
                      <Radio name="type"  label={
                        <Typography
                          color="blue-gray"
                          className="font-normal text-blue-gray-700"
                        >
                          Vegitable
                        </Typography>
                      }
                      defaultChecked
                      />
                    <Radio name="type"  label={
                        <Typography
                          color="blue-gray"
                          className="font-normal text-blue-gray-700"
                        >
                          Fruit
                        </Typography>
                      }
                      />
                   </div>

                  <div>
                    <div className="w-full">
                      <Select label="Select Type">
                      <Option>Artichoke</Option>
                      <Option>Asparagus</Option>
                      <Option>Bell Pepper</Option>
                      <Option>Broccoli</Option>
                      <Option>Brussels Sprouts</Option>
                      <Option>Cabbage</Option>
                      <Option>Carrot</Option>
                      <Option>Cauliflower</Option>
                      <Option>Celery</Option>
                      <Option>Cucumber</Option>
                      <Option>Eggplant</Option>
                      <Option>Kale</Option>
                      <Option>Leek</Option>
                      <Option>Potato</Option>
                      <Option>Radish</Option>
                      <Option>Spinach</Option>
                      <Option>Sweet Potato</Option>
                      <Option>Tomato</Option>
                      <Option>Zucchini</Option>
                      <Option>Green Beans</Option>
                        
                      </Select> 
                  </div>      
                </div>
          
        {/* upload product image */}
                <Title title='Upload Product Image'/>
                <div class="flex items-center justify-center w-full">
                      <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                          <div class="flex flex-col items-center justify-center pt-5 pb-6">
                              <svg class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                              </svg>
                              <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> or drag and drop</p>
                              <p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                          </div>
                          <input id="dropzone-file" type="file" class="hidden" />
                 </label>
                 </div> 
         {/* select quantity */}  
                <div>
                    <div className=' flex'>
                          <Title title='Select Quantity'/>
                          <Hint  title='Hint !' hint='Enter the amount of available stock you have in kg'/>
                      </div> 
                      <input type="number" id="number-input" aria-describedby="helper-text-explanation"
                       class="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent !border-t-blue-gray-200 bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:!border-t-gray-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50" 
                        placeholder="Available Stock" required>            
                     </input>
                </div>

           {/* select minimum order */}  
           <div>
                  <div className=' flex'>
                      <Title title='Minimum Order Quantity'/>
                      <Hint  title='Hint !' hint='Enter the minimum quantity that customer can purchase'/>
                  </div> 

                      <input type="number" id="number-input" aria-describedby="helper-text-explanation"
                       class="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent !border-t-blue-gray-200 bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:!border-t-gray-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50" 
                        placeholder="Minimum Order Quantity" required>            
                     </input>
                </div>

            {/* select price */}  
           <div>
                  <div className=' flex'>
                      <Title title='Select Price'/>
                      <Hint  title='Hint !' hint='Price should be per 1kg'/>
                  </div> 

                       <input type="number" id="number-input" aria-describedby="helper-text-explanation"
                       class="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent !border-t-blue-gray-200 bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:!border-t-gray-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50" 
                        placeholder="Unit Price" required>            
                     </input>
                </div>

             {/* submit button */}
            <div className="flex gap-4 justify-end" >
              < Button color="green" variant='gradient'> Post </Button>
              <Button color="green" variant="outlined">Cancel</Button>
            </div>        
          </div>
      </form>
   </div>  
  </div>
  );
}

export default AddProductForm