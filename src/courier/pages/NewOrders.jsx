import React from 'react'
import CourierNewOrdersTab from '../components/CourierNewOrdersTab'
function CourierNewOrders() {
  return (
    <div>
      <div className="mt-12">
        <div className="mb-12 grid gap-y-10 gap-x-6 md:grid-cols-2 xl:grid-cols-4">
        </div>
        <CourierNewOrdersTab />
      </div>
    </div>
  )
}
export default CourierNewOrders
