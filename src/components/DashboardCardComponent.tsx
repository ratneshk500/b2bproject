"use client"

import React, { useEffect, useState } from 'react'
import AdminCardComponent from '@/components/AdminCardComponent';

import VendorCardComponent from '@/components/VendorCardComponent';



export default function DashboardCardComponent() {
  
//const user: userData | null = JSON.parse(localStorage.getItem('user') || '{}');
const user = JSON.parse(localStorage.getItem('user') || '{}');

 switch (user.role) {
        case 'admin':
            return <AdminCardComponent /> 
        case 'vendor':
            return <VendorCardComponent />
        
        default:
            return null;
    }
    


}
