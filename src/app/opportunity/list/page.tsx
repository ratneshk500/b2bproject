"use client"
import Cookies from 'js-cookie'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'
import AdminNavbar from '@/components/AdminNavbar';
import AdminSidebar from '@/components/AdminSidebar';

import OpportunityDataTable from '@/components/OpportunityDataTable';

//import AdminCardComponent from '@/components/AdminCardComponent';

//import VendorCardComponent from '@/components/VendorCardComponent';

//import DashboardCardComponent from '@/components/DashboardCardComponent';



import { ToastContainer, toast } from 'react-toastify';
import useSWR from 'swr'

import { useDispatch } from 'react-redux';








export default function orderpage() {
 
  
  return (
    <div className='w-full h-screen flex  bg-gray-50 overflow-hidden'>
      <AdminSidebar />
      <div className='w-full h-full '>
	 
        <AdminNavbar />
		
        <div className='w-full h-5/6  flex flex-wrap items-start justify-center overflow-y-auto  px-4 py-2'>
		 <h1>Opportunity List</h1> 
	  	
		<OpportunityDataTable/>
		
		  
        </div>
		
		
		
      </div>
      <ToastContainer />
    </div>
  )
}



