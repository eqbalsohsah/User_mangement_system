
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AuthLayout from './Compoments/AuthLayout/AuthLayout'
import NotFound from './Compoments/NotFound/NotFound'

import MasterLayout from './Compoments/MasterLayout/MasterLayout'
import Home from './Compoments/Home/Home'
import AddUser from './Compoments/AddUser/AddUser'
import Profile from './Compoments/Profile/Profile'
import UserList from './Compoments/UserList/UserList'
import LogIn from './Compoments/LogIn/LogIn'
import { ToastContainer } from 'react-toastify';
import LogOut from './Compoments/LogOut/LogOut'



function App() {
   const routes=createBrowserRouter([{
    path:"/",
    element:<AuthLayout/>,
    errorElement:<NotFound/>,
   children:[
    {index:true,element:<LogIn/>},
    {path:"login",element:<LogIn/>}
      
    ],},
    {
    path:"dashboard",
    element: <MasterLayout/>,
    errorElement:<NotFound/>,
     children:[
      {index:true,element:<Home/>},
      {path:"home",element:<Home/>},
      {path:"users",element:<UserList/>},
       {path:"adduser/new_user",element:<AddUser/>},
           {path:"adduser/:id",element:<AddUser/>},
      {path:"profile",element:<Profile/>},
       {path:"logout",element:<LogOut/>},
      
     ],
  

  },
    
  ])

  return (
    <>
      <ToastContainer />
     <RouterProvider router={routes}></RouterProvider>
    </>
  )
}

export default App
