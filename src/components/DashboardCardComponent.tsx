"use client"

import React, { useEffect, useState } from 'react'
import AdminCardComponent from '@/components/AdminCardComponent';

import VendorCardComponent from '@/components/VendorCardComponent';
import Cookies from 'js-cookie';
import { setUserData } from '@/utils/UserDataSlice'
import { useDispatch } from 'react-redux';

export default function DashboardCardComponent() {
  
//const user: userData | null = JSON.parse(localStorage.getItem('user') || '{}');
//const user = JSON.parse(localStorage.getItem('user') || '{}');




//const userData = Cookies.get('userdata');

//console.log(userData);

        const userrole = Cookies.get('role');




//alert(userrole)

//const user='admin';
 switch (userrole?.slice(1, -1)) {
        case 'admin':
            return <AdminCardComponent /> 
        case 'vendor':
           return <VendorCardComponent />
        
        default:
            return <VendorCardComponent />
    }
    


}
