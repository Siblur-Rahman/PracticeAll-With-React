import toast from "react-hot-toast";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import axios from "axios";
import { useEffect, useState } from "react";

const MyPostedItems = () => {
  // const items = useLoaderData();
  const [items, setItems] = useState([])
  const navigate = useNavigate()
  const {user, handleDelete} = useAuth()
useEffect(()=>{
  getData()
},[user])
const getData = async () =>{
  const {data} = await axios(`${import.meta.env.VITE_API_URL}/myposteditems/${user?.email}`,
    {withCredentials: true})// for fetch Credentials:'includes'
  setItems(data)
}
  // const handleDelete = async (id) =>{
      // fetch(`${import.meta.env.VITE_API_URL}/deleteItem/${id}`,{
      //   method:"DELETE"
      // })
      // .then(res=>res.json())
      // .then(data=>{
      //   if(data.deletedCount>0){
      //     toast.success('Item Data deleted Successfully!')
      //     navigate(`/MyPostedItems/${user?.email}`)

      //   }
      // })

  //     try{
  //       const {data} = await axios.delete(`${import.meta.env.VITE_API_URL}/deleteItem/${id}`)
  //       console.log(data)
  //       if(data?.deletedCount>0){
  //         toast.success('Item Data delete Successfully!')
  //         navigate(`/MyPostedItems/${user?.email}`)
  //       }
  //     }
  //     catch(err){
  //       console.log(err)
  //     }
  // }

  return (
    <>
          <h2 className='text-5xl text-blue-800 font-bold capitalize text-center'>My items</h2>
        <div className='mt-4'>
        <table>
            <tr>
              <th>title</th>
              <th>status</th>
              <th>action-1</th>
              <th>action-2</th>
              <th>action-3</th>
            </tr>
        {
          items?.map((item, index) => <tr key={index}>
            <td>{item.title}</td>
            <td className={`rounded-lg p-2 ${item.status==='pending'?'bg-yellow-300':'bg-green-300'}`}>{item.status}</td>
            <td><Link to={`/updateitem/${item._id}`}><button>Update</button></Link></td>
            <td><Link to={`/itemDetails/${item._id}`}><button>Details</button></Link></td>
            <td><Link onClick={()=>handleDelete(item._id)}><button>Delete</button></Link></td>
          </tr>)
        }
        </table>
    </div>
    </>
  )
}

export default MyPostedItems
//
