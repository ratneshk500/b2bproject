"use client"; // needed in Next.js 13+ (App Router)

import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Box } from "@mui/material";
import { delete_a_category,get_all_categories } from '@/Services/Admin/category';
import { useEffect, useState } from "react";
import axios from "axios";

export default function UsersTable() {
  // Sample rows
  const [rows, setRows] = useState<any[]>([]);
  
   useEffect(() => {
    axios.get("/api/common/category/getCategory").then((res) => setRows(res.data.data));
  }, []);
  
  
  /*
  useEffect(() => {
	   const res =  delete_a_category();
	 console.log(res); 
    setRows(res)
  }, [])
*/
  console.log(rows);
  
  
  
  
  //const prayertime=[];

 const prayertime: {id:any; name: any; description: string }[] = [];

 rows.forEach((nav1, index) => {
    
	prayertime.push({'id':nav1._id,'name':nav1.categoryName,'description':nav1.categoryDescription})

	
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
    { field: "id", headerName: "ID", width: 90 },
    { field: "name", headerName: "Name", width: 150 },
    { field: "description", headerName: "Description", width: 200 },
    
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
