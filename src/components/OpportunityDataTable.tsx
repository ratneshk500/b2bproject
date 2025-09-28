"use client"; // needed in Next.js 13+ (App Router)

import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Box } from "@mui/material";
import { Button } from '@mui/material';

import Link from 'next/link';

import { useEffect, useState } from "react";
import axios from "axios";

export default function OrderDataTable() {

  // Sample rows
  const [rows, setRows] = useState<any[]>([]);
  
   useEffect(() => {
    axios.get("/api/opportunity").then((res) => setRows(res.data));
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
	
const prayertime: { id:any;title: string; name: string;categoryName:any;budgetrange:any;duration:any;startdate:any }[] = [];

 rows.forEach((nav1:any) => {
	//console.log(nav1.userDetails.email);
	prayertime.push({'id':nav1._id,
	'title':nav1.title,
	name:nav1.userDetails.name,
	'categoryName':nav1.categoryDetails.categoryName,
	'budgetrange':nav1.budgetrange,
	'duration':nav1.duration,
	'startdate':nav1.startdate,
	})

  });

  //const rows = apiData.map((row) => ({ id: row._id, ...row }));
  
  
  
  
  /*
  const rows = [
    { id: 1, name: "Alice", email: "alice@example.com", createdAt: "2025-09-18T10:20:30Z" },
    { id: 2, name: "Bob", email: "bob@example.com", createdAt: "2025-09-17T14:05:00Z" },
    { id: 3, name: "Charlie", email: "charlie@example.com", createdAt: "2025-09-16T09:15:45Z" },
  ];
*/
  // Column definitions opportunity
  const columns = [
    { field: "id", headerName: "ID", width: 50 },
    { field: "title", headerName: "Title", width: 150},
    { field: "name", headerName: "Name", width: 150 },
	{ field: "categoryName", headerName: "Category", width: 150 },
	{ field: "budgetrange", headerName: "Budget", width: 150 },
	
	
	{ field: "duration", headerName: "Duration", width: 150 },
	{ field: "startdate", headerName: "Startdate", width: 150 },
	
	  {
      field: 'actions',
      headerName: 'Actions',
      width: 150,
      renderCell: (params: any) => (
        <Link href={`/opportunity/${params.id}`} passHref>
          <Button variant="contained" color="primary">
            View
          </Button>
        </Link>
      ),
    },
	
    
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
