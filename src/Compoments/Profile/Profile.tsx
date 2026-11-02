import  { useContext, } from 'react'
import { AuthContext } from '../../Context/Context'




export default function Profile() {
  
   
  
const {userData}:any=useContext(AuthContext);


   
  return (
    <div className=' w-75 m-auto'>
    <div className='text-center my-3'>
      <img src={userData?.image} alt="profile" className=' w-25 h-25'/>
    </div>
 
 <form  className='shadow-lg p-3 m-5' >
 <div className="row">
  <div className='col-md-6'>
    <label>First Name</label>
    <input type="text" className='form-control my-3' readOnly
   defaultValue={userData?.firstName}
   />
        
  </div>
  <div className='col-md-6'>
    <label>last Name</label>
    <input type="text" className='form-control my-3'  readOnly
       defaultValue={userData?.lastName}
 />
  </div>
  
  
   <div className='col-md-6'>
    <label>email</label>
    <input type="email" className='form-control my-3' readOnly
      defaultValue={userData?.email}/>
     
  </div>
  <div className='col-md-6'>
    <label>phone</label>
    <input type="number" className='form-control my-3'
    placeholder='enter your phone'
    defaultValue={userData?.phone}/>
  </div>
  
 

 </div>
 </form>

    </div>
  )
}
