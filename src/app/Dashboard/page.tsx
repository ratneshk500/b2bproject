"use client"
import Cookies from 'js-cookie'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'
import AdminNavbar from '@/components/AdminNavbar';
import AdminSidebar from '@/components/AdminSidebar';
//import SuperComponent from '@/components/SuperComponent';
//import AdminCardComponent from '@/components/AdminCardComponent';
//import VendorCardComponent from '@/components/VendorCardComponent';
import DashboardCardComponent from '@/components/DashboardCardComponent';



import { ToastContainer, toast } from 'react-toastify';
import useSWR from 'swr'
import { get_all_categories } from '@/Services/Admin/category';
import { useDispatch } from 'react-redux';
import { setCatLoading, setCategoryData, setOrderData, setProdLoading, setProductData } from '@/utils/AdminSlice';
import Loading from '../loading';
import { setNavActive } from '@/utils/AdminNavSlice';
import { get_all_products } from '@/Services/Admin/product';
import { get_all_orders } from '@/Services/Admin/order';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: "Jan", users: 400, revenue: 2400 },
  { name: "Feb", users: 300, revenue: 2210 },
  { name: "Mar", users: 500, revenue: 2290 },
  { name: "Apr", users: 278, revenue: 2000 },
  { name: "May", users: 189, revenue: 2181 },
  { name: "Jun", users: 239, revenue: 2500 },
  { name: "Jul", users: 349, revenue: 2100 },
];

interface userData {
  email: String,
  role: String,
  _id: String,
  name: String
}



export default function Dashboard() {
  
 
  const Router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    const user: userData | null = JSON.parse(localStorage.getItem('user') || '{}');
   
	//if (!Cookies.get('token') || user?.role !== '' ) {
     //Router.push('/')
    //}
    dispatch(setNavActive('Base'))
  }, [dispatch, Cookies, Router])


		
/*
  const { data: categoryData, isLoading: categoryLoading } = useSWR('/gettingAllCategoriesFOrAdmin', get_all_categories)
  if (categoryData?.success !== true) toast.error(categoryData?.message)
  const { data: productData, isLoading: productLoading } = useSWR('/gettingAllProductsFOrAdmin', get_all_products)
  if (productData?.success !== true) toast.error(productData?.message)
  const {data : orderData, isLoading : orderLoading} = useSWR('/gettingAllOrdersForAdmin', get_all_orders)
  if (orderData?.success !== true) toast.error(orderData?.message)

  console.log(orderData?.data)
  useEffect(() => {
    dispatch(setCategoryData(categoryData?.data))
    dispatch(setCatLoading(categoryLoading))
    dispatch(setProductData(productData?.data))
    dispatch(setProdLoading(productLoading))
    dispatch(setOrderData(orderData?.data))
    dispatch(setCatLoading(orderLoading))
  }, [categoryData, dispatch, categoryLoading, productData, productLoading , orderData , orderLoading])
*/


  return (
    <div className='w-full h-screen flex  bg-gray-50 overflow-hidden'>
      <AdminSidebar />
      <div className='w-full h-full '>
	 
        <AdminNavbar />
		
        <div className='w-full h-5/6  flex flex-wrap items-start justify-center overflow-y-auto  px-4 py-2'>
		
	<div className='w-full' >    	
		
		{/* Cards Section */}

 

 < DashboardCardComponent />
  
  
  



	{/* eND Cards Section */}	
		
		
          
		  
		
		{/* Graph Section */}   
		   
		    <div className="bg-white p-6 rounded shadow mb-6">
          <h2 className="text-lg font-semibold mb-4">User Growth & Revenue</h2>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="users" stroke="#8884d8" strokeWidth={2} />
                <Line type="monotone" dataKey="revenue" stroke="#82ca9d" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
		   
		{/* End Graph Section */}      
		   
		 
	{/* Table  Section */}      	 
		<div className="bg-white p-4 rounded shadow">
          <h2 className="text-lg font-semibold mb-4">Recent Orders</h2>
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="p-2 border">Order ID</th>
                <th className="p-2 border">Customer</th>
                <th className="p-2 border">Amount</th>
                <th className="p-2 border">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-2 border">#1001</td>
                <td className="p-2 border">John Doe</td>
                <td className="p-2 border">$250</td>
                <td className="p-2 border text-green-600">Completed</td>
              </tr>
              <tr>
                <td className="p-2 border">#1002</td>
                <td className="p-2 border">Jane Smith</td>
                <td className="p-2 border">$180</td>
                <td className="p-2 border text-yellow-600">Pending</td>
              </tr>
              <tr>
                <td className="p-2 border">#1003</td>
                <td className="p-2 border">Michael Lee</td>
                <td className="p-2 border">$320</td>
                <td className="p-2 border text-red-600">Cancelled</td>
              </tr>
            </tbody>
          </table>
        </div>
		</div>
		{/* end Table  Section */}      	 
		   
		  
		  
        </div>
		
		
		
      </div>
      <ToastContainer />
    </div>
  )
}



