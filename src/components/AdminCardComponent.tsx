"use client"

import React, { useEffect, useState } from 'react'



export default function AdminCardComponent() {
  


  return (
    
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
  {/* Users Card */}
  <div className="bg-white p-6 rounded-2xl shadow flex items-center justify-between">
    <div>
      <h2 className="text-sm font-medium text-gray-500">Total Buyer</h2>
      <p className="text-3xl font-bold text-gray-800">1,234</p>
      <span className="text-green-600 text-sm font-medium">▲ 9% this month</span>
    </div>
    <div className="p-3 bg-blue-100 rounded-full">
      <span className="text-blue-600 text-2xl">👥</span>
    </div>
  </div>

 
   
       
<div className="bg-white p-6 rounded-2xl shadow flex items-center justify-between">
    <div>
      <h2 className="text-sm font-medium text-gray-500">Total Vendor</h2>
      <p className="text-3xl font-bold text-gray-800">234</p>
      <span className="text-green-600 text-sm font-medium">▲ 8% this month</span>
    </div>
    <div className="p-3 bg-blue-100 rounded-full">
      <span className="text-blue-600 text-2xl">👥</span>
    </div>
  </div>



  {/* Revenue Card */}
  <div className="bg-white p-6 rounded-2xl shadow flex items-center justify-between">
    <div>
      <h2 className="text-sm font-medium text-gray-500">Revenue</h2>
      <p className="text-3xl font-bold text-gray-800">$12,45</p>
      <span className="text-green-600 text-sm font-medium">▲ 8% this month</span>
    </div>
    <div className="p-3 bg-green-100 rounded-full">
      <span className="text-green-600 text-2xl">💰</span>
    </div>
  </div>

  {/* Orders Card */}
  <div className="bg-white p-6 rounded-2xl shadow flex items-center justify-between">
    <div>
      <h2 className="text-sm font-medium text-gray-500">Orders</h2>
      <p className="text-3xl font-bold text-gray-800">543</p>
      <span className="text-red-600 text-sm font-medium">▼ 5% this month</span>
    </div>
    <div className="p-3 bg-purple-100 rounded-full">
      <span className="text-purple-600 text-2xl">📦</span>
    </div>
  </div>
  
  
  <div className="bg-white p-6 rounded-2xl shadow flex items-center justify-between">
    <div>
      <h2 className="text-sm font-medium text-gray-500">Category</h2>
      <p className="text-3xl font-bold text-gray-800">22</p>
      <span className="text-red-600 text-sm font-medium">&nbsp;</span>
    </div>
    <div className="p-3 bg-purple-100 rounded-full">
      <span className="text-purple-600 text-2xl">📦</span>
    </div>
  </div>
  
  
  
  
</div>


	
	
	
	
  )
}
