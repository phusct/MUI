import React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'name', headerName: 'Tên', width: 130 },
  { field: 'age', headerName: 'Tuổi', width: 90 },
  { field: 'email', headerName: 'Email', width: 160 },
];

const rows = [
  { id: 1, name: 'Nguyễn Văn A', age: 35, email: 'a@gmail.com' },
  { id: 2, name: 'Trần Thị B', age: 42, email: 'b@gmail.com' },
  { id: 3, name: 'Lê Văn C', age: 28, email: 'c@gmail.com' },
];

const DataTable = () => {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid rows={rows} columns={columns} pageSize={5} />
    </div>
  );
}

export default DataTable;
