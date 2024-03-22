import React,{useState} from 'react'
import TabAndTables from '../components/TabAndTables'

const MyOrders = () => {
  const [defaultTab, setDefaultTab] = useState('All');

  return (
    <div className="mt-12">
      <div className="mb-12 grid gap-y-10 gap-x-6 md:grid-cols-2 xl:grid-cols-4">
      </div>
      <TabAndTables defaultTab={defaultTab}/>
    </div>
  )
}

export default MyOrders