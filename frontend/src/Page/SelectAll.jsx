import React, { useState, useEffect, useMemo } from 'react';
import axios from 'axios';
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
} from '@tanstack/react-table';

export default function UserTable() {
  // 1. Local state to store database rows fetched from Node.js
  const [users, setUsers] = useState([]);

  // 2. Fetch database data when component mounts
 useEffect(() => {
  const token = localStorage.getItem('token');

  axios.get('http://localhost:4400/api/getall', {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
  .then((res) => {
   
     console.log("res.data =", res.data);
  console.log("res.data.users =", res.dat);
  console.log("res.data.data =", res.data.data);
  console.log("is array =", Array.isArray(res.data));

  setUsers(res.data.data)
  })
  .catch((err) => {
    
  const message = err.response?.data?.message || "Access denied";
    alert(message); // Outputs: "Access denied"
  });
}, []);

  // 3. Define column mapping using useMemo to avoid re-creating on re-renders
  const columns = useMemo(
    () => [
      {
        accessorKey: 'userid', // Key matching your database object
        header: 'User ID',
      },
      {
        accessorKey: 'username',
        header: 'Username',
      },
      {
        accessorKey: 'email',
        header: 'Email',
      },
      {
        accessorKey: 'role',
        header: 'Role',
      }
    ],
    []
  );

  // 4. Initialize TanStack Table (v8) instance
  const table = useReactTable({
    data: users,
    columns: columns,
    getCoreRowModel: getCoreRowModel(), // Required row model engine
  });

  // 5. Render HTML using TanStack helper functions
  return (
    <div style={{ padding: '20px' }}>
      <h2>user length:{users.length}</h2>
      <table border="1" cellPadding="10" style={{ borderCollapse: 'collapse', width: '100%' }}>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id} style={{ backgroundColor: '#f2f2f2' }}>
              {headerGroup.headers.map((header) => (
                <th key={header.id} style={{ textAlign: 'left' }}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id}>
                  {flexRender(
                    cell.column.columnDef.cell,
                    cell.getContext()
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}