"use client"
import Cookies from 'js-cookie'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'
import AdminNavbar from '@/components/AdminNavbar';
import AdminSidebar from '@/components/AdminSidebar';
//import SuperComponent from '@/components/SuperComponent';
//import CreateOrderForm from '@/components/CreateOrderForm';

import CreateOpportunityForm from '@/components/CreateOpportunityForm';


//import AdminCardComponent from '@/components/AdminCardComponent';

//import VendorCardComponent from '@/components/VendorCardComponent';

import DashboardCardComponent from '@/components/DashboardCardComponent';



import { ToastContainer, toast } from 'react-toastify';
import useSWR from 'swr'

import { useDispatch } from 'react-redux';
//import { setCatLoading, setCategoryData, setOrderData, setProdLoading, setProductData } //from '@/utils/AdminSlice';
//import Loading from '../loading';
import { setNavActive } from '@/utils/AdminNavSlice';

//import { get_all_orders } from '@/Services/Admin/order';





export default function oppurtunity() {
  
 
 // const Router = useRouter();
  //const dispatch = useDispatch();

 


		


  return (
    <div className='w-full h-screen flex  bg-gray-50 overflow-hidden'>
      <AdminSidebar />
      <div className='w-full h-full '>
	 
        <AdminNavbar />
		
        <div className='w-full h-5/6  flex flex-wrap items-start justify-center overflow-y-auto  px-4 py-2'>
		
	  	
		<CreateOpportunityForm/>
		
		  
        </div>
		
		
		
      </div>
      <ToastContainer />
    </div>
  )
}



