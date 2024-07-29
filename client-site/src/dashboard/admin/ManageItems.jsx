import { useEffect, useState } from "react";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { Link } from "react-router-dom";

const ManageItems = () => {
    const [pendingItems, setPendingItems] = useState([])
    const [approveItems, setApproveItems] = useState([])
    const axiosPublic = useAxiosPublic()
    useEffect(()=>{
        const getItems = async()=>{
            axiosPublic('/pendingitems')
            .then(res=>{
                console.log(res.data)
                setPendingItems(res.data)
            })
            axiosPublic('/approveitems')
            .then(res=>{
                console.log(res.data)
                setApproveItems(res.data)
            })
        }
        getItems()
    }, [approveItems])
    const handleSatus = (id)=>{
        axiosPublic.put(`/status/${id}`)
        .then(res=>{
            console.log(res.data)
        })
    }
    return (
        <div>
            <table>
            <tr>
              <th>title</th>
              <th>status</th>
              <th>action-1</th>
              <th>action-2</th>
              <th>action-3</th>
            </tr>
        {
          pendingItems?.map((item, index) => <tr key={index}>
            <td>{item.title}</td>
            <td className={`rounded-lg p-2 ${item.status==='pending'?'bg-yellow-300':'bg-green-300'}`} onClick={()=>handleSatus(item._id) }>{item.status}</td>
            <td><Link to={`/updateitem/${item._id}`}><button>Update</button></Link></td>
            <td><Link to={`/itemDetails/${item._id}`}><button>Details</button></Link></td>
            {/* <td><Link onClick={()=>handleDelete(item._id)}><button>Delete</button></Link></td> */}
          </tr>)
        }
        <h2 className="text-3xl bg-green-300 text-center">Approved Items</h2>
        {
          approveItems?.map((item, index) => <tr key={index}>
            <td>{item.title}</td>
            <td className={`rounded-lg p-2 ${item.status==='pending'?'bg-yellow-300':'bg-green-300'}`} onClick={()=>handleSatus(item._id) }>{item.status}</td>
            <td><Link to={`/updateitem/${item._id}`}><button>Update</button></Link></td>
            <td><Link to={`/itemDetails/${item._id}`}><button>Details</button></Link></td>
            {/* <td><Link onClick={()=>handleDelete(item._id)}><button>Delete</button></Link></td> */}
          </tr>)
        }
        </table>
        </div>
    );
};

export default ManageItems;