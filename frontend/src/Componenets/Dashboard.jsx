import React from 'react'
import {Link,Outlet} from 'react-router-dom'
import './dashboard.css';
function Dashboard() {
  return (
    <div className='dashboard'>
      
       <aside className='sidebar'>
           <h2>Dashboard</h2>
       <nav className="sidebar-menu">
         <Link to="/dashboard/select-all">Select All</Link>
         <Link to="/dashboard/user-filter">User Filter</Link>
          <Link to="/dashboard/delete">Delete User</Link>
         <Link to="/dashboard/update">Update</Link>
         <Link to="/dashboard/user-by-id">User BY Id</Link>
         <Link to="/dashboard/sentcomment">SentComment</Link>
         <Link to="/dashboard/readcomment">ReadComment</Link>
       </nav> 
       </aside>
       {/*main*/}
       <main className='main-content'>
        <Outlet />
       </main>
    
   
    </div>
      
  )
}

export default Dashboard