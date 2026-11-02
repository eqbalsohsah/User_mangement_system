import axios from 'axios';
import  { useEffect} from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

export default function AddUser() {
 
   const params=useParams();
   const {id}=params;
   console.log(id);
   interface UserFormData{
  id:number;
  image:string;
  lastName:string;
  email:string;
  birthDate:string;
  age:number;
  phone:number;
  firstName:string

  }
// const[userDetails,setUserDetails] =useState<UserFormData|null>(null);
  const navigate=useNavigate();
  const{register,handleSubmit,reset,formState:{errors,isSubmitting}}=useForm<UserFormData>();
  
    //add user
 const onSubmit= async(data:UserFormData)=>{
//    await axios.post("https://dummyjson.com/users/add",data);

// toast.success("Add Success");
// navigate("/dashboard/users");
if(id){
  await axios.put(`https://dummyjson.com/users/${id}`,data);

toast.success("update Success");
navigate("/dashboard/users");
}
  
  else{
    await axios.post("https://dummyjson.com/users/add",data);

toast.success("Add Success");
navigate("/dashboard/users");
  }
 }
  //get userdetails
  const getUserDetails= async()=>{
   const {data}= await axios.get(`https://dummyjson.com/users/${id}`);
   console.log(data);
   const birthDate=new Date(data.birthDate).toISOString().split("T")[0];
   
// setUserDetails({...data,birthDate:birthDate});
reset({...data,birthDate})



  }
  useEffect(()=>{
    if(id)
    getUserDetails();
  },[]);
 
  
  return (
    <div>
        <div>
      <h3 className='m-3'> {id?"Update User" :"Add User"}</h3>
      <form  onSubmit={handleSubmit(onSubmit)} className='shadow-lg p-3 m-5'>
        <div className="row">
          <div className="col-md-6">
            <label>First Name</label>
            <input type="text" className='form-control my-2' placeholder='Enter your first name' 
          //  defaultValue={userDetails?.firstName}
          

           
            {...register("firstName",{required:"enter your FirstName"})}/>
            {errors?.firstName && <span className="text-danger my-2"> {errors?.firstName?.message}</span>}


          </div>
              <div className="col-md-6">
            <label>Last Name</label>
            <input type="text" className='form-control my-2' placeholder='Enter your last name'
          // defaultValue={userDetails?.lastName}
             {...register("lastName",{required:"enter your lastName"})}/>
                     {errors?.lastName && <span className="text-danger my-2"> {errors?.lastName?.message}</span>}


          </div>
        </div>
                <div className="row">
          <div className="col-md-6">
            <label>email</label>
            <input type="email" className='form-control my-2' placeholder='Enter your email'
        // defaultValue={userDetails?.email}
            {...register("email",{required:"enter your email",pattern:{
              value:/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message:"email should be vaild"
            }})}/>
                     {errors?.email && <span className="text-danger my-2"> {errors?.email?.message}</span>}
         
          </div>
              <div className="col-md-6">
            <label>age</label>
            <input type="number" className='form-control my-2' placeholder='Enter your age'
            // defaultValue={userDetails?.age}
           
             {...register("age",{required:"enter your age",max:{value:55,message:"max age is 55"}})}/>
            {errors?.age && <span className="text-danger my-2"> {errors?.age?.message}</span>}
         
          </div>
             
        </div>
                <div className="row">
          <div className="col-md-6">
            <label>Phone Number</label>
            <input type="string" className='form-control my-2' placeholder='Enter your phone number'
            // defaultValue={userDetails?.phone}
          
            {...register("phone",{required:"enter your phone"})}/>
            {errors?.phone && <span className="text-danger my-2"> {errors?.phone?.message}</span>}
         
          </div>
              
              <div className="col-md-6">
            <label>birthDate</label>
            <input type="date"
             className='form-control my-2' placeholder='Enter your birhdate'
            //  defaultValue={userDetails?.birthDate}
            
             {...register("birthDate",{required:"enter your birthDate"})}/>
                {errors?.birthDate && <span className="text-danger my-2"> {errors?.birthDate?.message}</span>}

          </div>
        </div>
        <div className='text-center my-2'>
          <button   disabled={isSubmitting} className=" btn btn-warning w-50 text-white">
 
            {id?"Update":"ADD Use"}
            </button>

        </div>
     
        
       

      </form>
    </div>
    </div>
  )
}
