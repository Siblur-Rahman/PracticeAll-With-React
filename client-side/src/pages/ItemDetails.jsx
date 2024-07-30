import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useAxiosPublic from "../hooks/useAxiosPublic";
import toast from "react-hot-toast";

const ItemDetails = () => {
  const {user} = useAuth()
  const [item, setItem] = useState([]);
  const {_id, photo, category, title, description}=item;
  // add to wishlist start
    const {id} = useParams()
    
    const axiosPublic = useAxiosPublic()
      const navigate = useNavigate()
      const handleWishButton = async () => {
        if(!user){
          return navigate('/login')
        }
          const email = user.email
  
          const itemwishlistData = {
            itemId:_id,
            title,
            photo,
            category,
            description,
          //   date,
            user: {
              email,
              name: user?.displayName,
              photo: user?.photoURL,
            },
          }
          // try {
          //   const { data } = await axios.post(`${import.meta.env.VITE_API_URL}/itemwishlist`,
          //     itemwishlistData
          //   )
          //   console.log(data)
          //   if(data.insertedId!==null){
          //     toast.success('Added to wishlist Successfully!')
          //     // navigate(`/wishlist/${email}`)
          //   }
          //   if(data.insertedId==null){
          //     toast.success('null!')
          //   }
          // } catch (err) {
          //   navigate('/login')
          //   console.log(err)
          // }
  
          // post with useAxiosPablic
       try{
        axiosPublic.post(`/itemwishlist`,
          itemwishlistData
        )
        .then(res=>{
          console.log(res.data)
          if(res.data.insertedId!==null){
      toast.success('Added to wishlist Successfully!')
      // navigate(`/wishlist/${email}`)
    }
    if(res.data.insertedId==null){
      toast.success(res.data.message)
    }
        })
       } catch (err) {
            navigate('/login')
            console.log(err)
          }
        }
  // add to wishlist start
    useEffect(()=>{
        fetch(`${import.meta.env.VITE_API_URL}/item/${id}`)
        .then(res=>res.json())
        .then(data=>{
            setItem(data)
        })
    },[id])
  const ownerEmail = item?.creator?.email;

    return (
      <>
      <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <img src={item.photo} className="max-w-sm rounded-lg shadow-2xl" />
        <div>
          <h1 className="text-5xl font-bold">{item.title}</h1>
          <h1 className="text-5xl font-bold">{item.category}</h1>
          <p className="py-6">{item.description}</p>
          {user?.email==ownerEmail &&
            <button className='btn btn-secondary mr-3 w-full' ><Link to={`/updateitem/${item._id}`}>Update</Link></button>
          }
          {user && user?.email!==ownerEmail &&
            <button className='btn btn-secondary mr-3 w-full' onClick={()=>handleWishButton(_id, photo, category, title, description)}>Add To Wishlist</button>
          }
        </div>
      </div>
    </div>
</>
    );
};

export default ItemDetails;
// p-5 3:51