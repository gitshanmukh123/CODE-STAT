import React, { useState } from 'react';
import './common.css';
import Navbar from '../commonelement/Navbar';
import Sidebar from '../commonelement/Sidebar';
import Inputpart from './Inputpart';

function Codechef() {
  const [sidebar, setSidebar] = useState(false);
  const HandleCodechefApiData = (val) => {
    console.log(val);
  }
  const HandleSidebar = (info) => {
    setSidebar(info);
  }

  return (
    <div className={`bg-gray-100 min-h-screen`}>

      {/* Navbar */}
      <Navbar HandleSidebar={HandleSidebar} sidebar={sidebar} />
      {/* Navbar end */}

      {/* Sidebar */}
      {sidebar && <Sidebar />}
      {/* Sidebar end */}

      {/* Content area */}

      <Inputpart sidebar={sidebar} HandleCodechefApiData={HandleCodechefApiData} />

      <h1 className='text-center font-bold bg-red-600 py-10 text-lg text-white'>Need To Be Updated</h1>

      {/* Content area end */}
    </div>
  );
}

export default Codechef;
