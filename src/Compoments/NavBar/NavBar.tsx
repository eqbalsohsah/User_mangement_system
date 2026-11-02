import  { useContext } from 'react'
import { AuthContext } from '../../Context/Context'

export default function NavBar() {
  let {userData}:any=useContext(AuthContext);
  return (
    <div className='m-3 d-flex'>
      <h5 className="text-muted ">React-UMS</h5>
      <h6 className='mx-3 text-muted my-1'>Hello {userData?.firstName}</h6>
     mail: {userData?.email}
    </div>
  )
}
