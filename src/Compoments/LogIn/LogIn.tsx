import axios from 'axios';
import { useContext } from 'react';
import { useForm } from 'react-hook-form'
import {useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
import { AuthContext } from '../../Context/Context';


 

export default function LogIn() {
  interface LogInForm{
    username:string;
    password:string;
  }
  interface AuthContextType{
    saveUserData:()=>void;
  }
const {saveUserData} =useContext(AuthContext) as AuthContextType;
    const {register,handleSubmit,formState:{errors}}=useForm<LogInForm>();
    const navigate=useNavigate();
    const onSubmit= async (data:LogInForm)=>{
      try {
        const response= await axios.post("https://dummyjson.com/auth/login",data);
        localStorage.setItem("userToken",response?.data?.accessToken);
    saveUserData();
        toast.success("Logged Successfuly!");
        navigate('/dashboard');
        
      } catch (error) {
        console.log(error);
        
        
      }
      

    }
  
  return (
    <div>
   <div className='LogInForm'>
    <div className='container-fluid bg-warning vh-100'>
        <div className="row vh-100 justify-content-center align-items-center">

            <div className='col-md-5 bg-white  rounded p-3'>
               
  <div className="title text-center">
    <h4>User Management System</h4>
    <h5>SIGN IN</h5>
    <p className='text-muted'>Enter your credentials to access your account</p>
  </div>
  
       <form  onSubmit={handleSubmit(onSubmit)}>
 <div >
   <label htmlFor='username' className="my-2">Name</label>
  <input type="text"  id="username" placeholder='Enter your name' className='form-control'
   {...register("username",{required:"Please Enter your name"})}/>
    {errors?.username && <span className="text-danger my-2"> {errors?.username?.message}</span>}

 </div>
<div>
    <label htmlFor='password' className="my-2">Password</label>
  <input type="text" id="password" className='form-control' placeholder='Enter yourv password' 
  {...register("password",{required:"Please Enter your password"})}/>
    {errors?.password && <span className="text-danger my-2"> {errors?.password?.message}</span>}
</div>
  <button type="submit" className='form-control my-4 text-white bg-warning '>SIGN IN</button>
</form>
                

            </div>
        </div>
    </div>
   </div>
    </div>
  )
}

