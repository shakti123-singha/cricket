
'use client'

import Sidebar from './sidebar/page'


export default function Layout() {
 
  return (
    <div className="h-screen flex flex-col">
      {/* Navbar */}
      

      {/* Main Content Wrapper */}
      <div className="flex flex-1">
        {/* Sidebar */}
       <Sidebar/>
       </div>

    </div>
  );
}
