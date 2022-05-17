import { DataGrid } from '@mui/x-data-grid';
import React, { useEffect, useState } from 'react'
import BasicCard from '../CommonButton/BasicCard/BasicCard';
import GridWrapper from '../CommonButton/GridWrapper/GridWrapper';

const DataTable = () => {
 const [users,setUsers] =useState([])

    
      
      const columns = [
        { field: 'id', headerName: 'User ID', width: 150 },
        { field: 'name', headerName: 'Name', width: 150 },
        { field: 'email', headerName: 'Email', width: 150 },
        { field: 'website', headerName: 'web', width: 150 },
        { field: 'company.name', headerName: 'company', width: 150 },
      ];

useEffect(()=>{
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(json => setUsers(json))
},[])
  return (
   
<GridWrapper>

   
<div style={{ height: 600, width: '60%' }}>
    <DataGrid
    rows={users}
    columns={columns}
    loading={! users.length}
    checkboxSelection
    />
  </div>

</GridWrapper>
 
   
  )
}

export default DataTable