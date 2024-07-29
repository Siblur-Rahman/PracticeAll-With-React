import { useEffect, useState } from "react";
import useAxiosPublic from "../hooks/useAxiosPublic";
import useAuth from "../hooks/useAuth";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

const MyWishList = () => {
    const [listItems, setListItems] = useState([])
    const {user} = useAuth()
    const axiosPublic = useAxiosPublic()
    useEffect(()=>{
        axiosPublic(`/mywishlist/${user?.email}`)
        .then(res =>{
            setListItems(res.data)
        })
    },[listItems])
    const handleDelete = id =>{
        axiosPublic.delete(`/mywishlist/${id}`)
        .then(res =>{
            if(res.data?.deletedCount>0){
                toast.success('Deleted Succesfully')
            }
        })
    }
    return (
        <div>
            {
                listItems.map((item, index) =><tr key={index}>
                    <td>{item.title}</td>
                    <td className={`rounded-lg p-2 ${item.status==='pending' && 'bg-yellow-300'}`}>{item.status}</td>
                    <td><Link onClick={()=>handleDelete(item._id)}><button>Delete</button></Link></td>
                  </tr>)
            }
        </div>
    );
};

export default MyWishList;