import axios from 'axios'
import  { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap';
import { CiEdit } from 'react-icons/ci';
import { FaRegTrashAlt } from 'react-icons/fa';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';

export default function UserList() {



  interface User{
  id:number;
  image:string;
  lastName:string;
  email:string;
  birthDate:string;
  phone:number;
  firstName:string

  }

  const navigate=useNavigate();
  const moveToAdd=()=>{
    navigate('/dashboard/adduser/new_user');
  }
  //edit button


  // modal
   const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = (user:User) => {
    setShow(true);
setUserId(user.id);
setUserData(user);
  }
  let deleteUser= async ()=>{
try {
   await axios.delete(`https://dummyjson.com/users/${userId}`);
   handleClose();
   toast.success("delete success");
   getUsers();


} catch (error) {
 toast.error("delete Fail");

}

  }
  // get user from api
  const [users,setUsers]=useState<User[]>([]);
  const[userId,setUserId]=useState<number |null>(null);

  const[userData,setUserData]=useState<User |null>(null);
  const getUsers= async ()=>{
    try {
      const response= await axios.get("https://dummyjson.com/users");
      setUsers(response?.data?.users);


    } catch (error) {
      console.log(error);


    }
  }
  useEffect(()=>{
getUsers();
  },[])
  return (
    <div>
      <div className='d-flex justify-content-between mx-2'>

           <h3>UsersList</h3>
      <button className='btn btn-warning text-white'onClick={moveToAdd}>Add New User</button>

    </div>
    <hr/>
    {/* table */}
       <Table striped bordered hover>
      <thead>
        <tr>
           <th>#</th>
          <th>profile</th>
          <th>First Name</th>
          <th>LastName</th>
          <th>email</th>
          <th>phone</th>
          <th>birthadate</th>
          <th>action</th>
        </tr>
      </thead>
      <tbody>
      {users.map((user)=>(
               <tr key={user?.id}>
          <td>{user?.id}</td>
          <td><img src={user?.image} className='w-25'/></td>
          <td>{user?.firstName}</td>
          <td>{user?.lastName}</td>
          <td>{user?.email}</td>
            <td>{user?.phone}</td>
            <td>{user?.birthDate}</td>
            <td><Link  to={`/dashboard/adduser/${user.id}`}><CiEdit size={25} className='text-warning'/></Link>
            <FaRegTrashAlt size={20} className='text-danger mx-2'onClick={()=>handleShow(user)}/></td>



        </tr>

      ))
      }
      </tbody>
    </Table>
    {/* modal */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Confirmation Message</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, Are you need to delete {userData?.firstName}!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="danger" onClick={deleteUser}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
      </div>

  )
}
