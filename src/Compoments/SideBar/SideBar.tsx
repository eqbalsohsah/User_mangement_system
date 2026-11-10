import  { useContext, useState } from 'react'
import { AiOutlineUserAdd } from 'react-icons/ai'
import { CgProfile } from 'react-icons/cg'
import { FaArrowAltCircleLeft, FaArrowAltCircleRight, FaHome, FaUsers } from 'react-icons/fa'
import { IoMdLogOut } from 'react-icons/io'
import { Menu, MenuItem, Sidebar } from 'react-pro-sidebar'
import { Link } from 'react-router-dom'

import { AuthContext } from '../../Context/Context'


export default function SideBar() {
  const clearUser=()=>{
    localStorage.removeItem("userToken");
  }
  const {userData}:any=useContext(AuthContext);
  const[collapsed,setCollapsed]=useState(false);
  const toggleCollapse=()=>{
    setCollapsed(! collapsed);
  }

  return (
    <>
    <div className='sidebarcontainer vh-100'>
  <Sidebar  collapsed={collapsed} className='vh-100'>
    {
      collapsed ? <FaArrowAltCircleRight  onClick={toggleCollapse} size={25}  className='mx-3'/>
      : <FaArrowAltCircleLeft  onClick={toggleCollapse} size={25}  className='mx-3'/>
    }


    <div className='text-center my-5'>
      <img src={userData?.image} alt="profile" className='rounded-circle w-50'/>
      <h5> {userData?.firstName}</h5>
      <h6 className='text-warning'>Admin</h6>
    </div>
  <Menu>
    {/* <MenuItem icon={<FaHome/>} component={<Link to="/dashboard"/>} > Home</MenuItem> */}
      <MenuItem  icon={<FaHome/>} component={<Link to="/dashboard"/>}> Home</MenuItem>
    <MenuItem  icon ={<FaUsers />}component={<Link to="/dashboard/users" />} > Users</MenuItem>
    <MenuItem icon ={<AiOutlineUserAdd />} component={<Link to="/dashboard/adduser/new_user"/>}  > Add User</MenuItem>

    <MenuItem  icon={<CgProfile />}component={<Link to="/dashboard/profile" />} > Profile</MenuItem>
        <MenuItem  icon ={<IoMdLogOut />}component={<Link to="/" />}  onClick={clearUser} > Log Out</MenuItem>
  </Menu>
</Sidebar>;
    </div>
    </>
  )
}
