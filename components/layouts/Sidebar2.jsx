'use client'

import React, {useContext} from "react";
import Link from "next/link";
import { signOut } from "next-auth/react";
import AuthContext from "../../context/AuthContext";

import 
{BsCart3, BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, 
  BsListCheck, BsMenuButtonWideFill, BsFillGearFill}
 from 'react-icons/bs'
 import { BiCross } from "react-icons/bi";
 import { RiStockFill } from "react-icons/ri";
 import { FcSalesPerformance } from "react-icons/fc";
 import { FaCode } from "react-icons/fa";
 import { AiOutlineStock } from "react-icons/ai";
 import { MdOutlineLocalGasStation } from "react-icons/md";
 import { BiBookmarkAltPlus } from "react-icons/bi";


const Sidebarnav  = ({openSidebarToggle, OpenSidebar}) => {

    const { user } = useContext(AuthContext)

//     const logoutHandler = () => {
//       signOut()
//           .then(() => {
//               // Redirect the user to the specified URL after logout
//               window.location.href = "http://localhost:3000";
//           })
//           .catch(error => {
//               console.error("Error occurred during logout:", error);
//               // Handle error if necessary
//           });
//   }
  

    return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive": ""}>
        <div className='sidebar-title'>
        <BsCart3  className='icon_header'/>
            <a href="/me" className='sidebar-brand'>
                Dashboard
            </a>
            <span className='icon close_icon' onClick={OpenSidebar}>X</span>
        </div>

        {user?.role === 'admin' && (

<ul className='sidebar-list'>
<li className='sidebar-list-item'>
<BsGrid1X2Fill className='icon'/>
    <a  href="/admin/depost">
       Depost
    </a>
</li>
<li className='sidebar-list-item'>
<BsFillArchiveFill className='icon'/>
    <a href="/admin/depost/getdata">
    Deposted Data
    </a>
</li>
<li className='sidebar-list-item'>
<BsFillGrid3X3GapFill className='icon'/> 
    <a href="/admin/messages">
       Messages
    </a>
</li>
<li className='sidebar-list-item'>
<BsPeopleFill className='icon'/>
    <a href="/admin/step">
        Step
    </a>
</li>
<li className='sidebar-list-item'>
<BsListCheck className='icon'/> 
    <a href="/admin/users">
        All Users
    </a>
</li>
</ul>
)}
       
    </aside>
  )
}

export default Sidebarnav;