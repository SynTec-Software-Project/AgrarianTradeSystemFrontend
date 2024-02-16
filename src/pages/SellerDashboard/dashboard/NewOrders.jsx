import React from 'react'
import NewOrdersTab from './components/NewOrdersTab';
// import SelectCourier from './components/SelectCourier';


export function NewOrders() {
  return (
    <div className="mt-12">
      <div className="mb-12 grid gap-y-10 gap-x-6 md:grid-cols-2 xl:grid-cols-4">
      </div>
      <NewOrdersTab/>
      {/* <SelectCourier/> */}
    </div>
  );
}

export default NewOrders;