"use client"; // needed in Next.js 13+ (App Router)

import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Box } from "@mui/material";
//import { delete_a_category,get_all_categories } from '@/Services/Admin/category';
import { useEffect, useState } from "react";
import axios from "axios";

export default function OrderDataTable() {
  // Sample rows
  const [rows, setRows] = useState<any[]>([]);
  
   useEffect(() => {
    axios.get("/api/orders").then((res) => setRows(res.data));
  }, []);
  
  
  /*
  useEffect(() => {
	   const res =  delete_a_category();
	 console.log(res); 
    setRows(res)
  }, [])
*/
  //console.log(rows);
  
  
  
  
  //const prayertime=[];
	const prayertime: { id:any;product: string; customerName: string;email:any;status:any; }[] = [];


 rows.forEach((nav1:any) => {
	console.log(nav1.userDetails.email);
	prayertime.push({'id':nav1._id,'product':nav1.productDetails[0].productName,'customerName':nav1.customerName,'email':nav1.userDetails.email,'status':nav1.status})

  });

  //const rows = apiData.map((row) => ({ id: row._id, ...row }));
  
  
  
  
  /*
  const rows = [
    { id: 1, name: "Alice", email: "alice@example.com", createdAt: "2025-09-18T10:20:30Z" },
    { id: 2, name: "Bob", email: "bob@example.com", createdAt: "2025-09-17T14:05:00Z" },
    { id: 3, name: "Charlie", email: "charlie@example.com", createdAt: "2025-09-16T09:15:45Z" },
  ];
*/
  // Column definitions
  const columns = [
    { field: "id", headerName: "ID", width: 200 },
    { field: "product", headerName: "Product", width: 250},
    { field: "customerName", headerName: "Customer Name", width: 250 },
	{ field: "email", headerName: "Email", width: 250 },
	{ field: "status", headerName: "Status", width: 250 },
    
  ];

  return (
   
	<Box sx={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={prayertime}
        columns={columns}
        pageSizeOptions={[5]}

       
        checkboxSelection
      />
    </Box>
  );
}
