import React,{useState} from 'react'
import Tab from './components/Tab';

export function MyOrders() {
  const [defaultTab, setDefaultTab] = useState('All');
  
  return (
    <div className="mt-12">
      <div className="mb-12 grid gap-y-10 gap-x-6 md:grid-cols-2 xl:grid-cols-4">
      </div>
      <Tab defaultTab={defaultTab}/>
    </div>
           
  );
}

export default MyOrders;