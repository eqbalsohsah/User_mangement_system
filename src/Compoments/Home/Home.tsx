import axios from "axios";
import { useEffect, useState } from "react";



  interface User{
  id:number;
  image:string;
  lastName:string;
  email:string;
  birthDate:string;
  phone:number;
  firstName:string;
gender:"male" | "female";

  }

export default function Home() {
  const [users,setUsers]=useState<User[]>([]);
 const totalUsers = users.length;

const maleUsers = users.filter(
  (user) => user.gender === "male"
).length;

const femaleUsers = users.filter(
  (user) => user.gender === "female"
).length;

const malePercentage = totalUsers
  ? Math.round((maleUsers / totalUsers) * 100)
  : 0;

  const getUsers = async () => {
  try {
    const response = await axios.get(
      "https://dummyjson.com/users?limit=0"
    );

    setUsers(response.data.users);
    console.log("users",response?.data);


  } catch (error) {
    console.log(error);
  }
};
  useEffect(()=>{
getUsers();
  },[])
  return (

<>
<section className="container">
  <h1 className="my-5"> User Mangement System</h1>

<div className="row g-4 ">

  <div className="col-12  col-md-4">
    <div className="card border-0 shadow-sm rounded-4 p-3 bg-warning text-white text-center">
      <p className=" mb-2">Total Users</p>
      <h2 className="fw-bold">{totalUsers}</h2>
       <span className=" small">All registed users</span>

    </div>
  </div>

  <div className="col-12 col-md-4">
    <div className="card border-0 shadow-sm rounded-4 p-3  bg-warning text-white text-center">
      <p className=" mb-2">Male Users</p>
      <h2 className="fw-bold ">{maleUsers}</h2>
      <span className=" small">Male accounts</span>
    </div>
  </div>

  <div className="col-12 col-md-4">
    <div className="card border-0 shadow-sm rounded-4 p-3  bg-warning text-white text-center ">
      <p className=" mb-2">Female Users</p>
      <h2 className="fw-bold" >
        {femaleUsers}
      </h2>
      <span className=" small">Female accounts</span>
    </div>
  </div>

  <div className="col-12 col-md-4">
    <div className="card border-0 shadow-sm rounded-4 p-3 bg-warning text-white text-center">
      <p className=" mb-2">Male Ratio</p>
      <h2 className="fw-bold ">{malePercentage}%</h2>
      <span className=" small">Male percentage</span>
    </div>
  </div>

</div>

  </section>
</>

  )
}
