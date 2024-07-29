import{ useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import useAuth from './useAuth';
import axios from 'axios';

const useDeleteItem = () => {
    const {user} = useAuth()
    const [deleteItem, setDeleteItem] = useState([])
  const navigate = useNavigate()

    const handleDelete = async(id)=>{
        console.log('handleDelete function active', id)
            try{
              const {data} = await axios.delete(`${import.meta.env.VITE_API_URL}/deleteItem/${id}`)
              console.log(data)
              if(data?.deletedCount>0){
                toast.success('Item Data delete Successfully!')
          navigate(`/MyPostedItems/${user?.email}`)
              }
            }
            catch(err){
              console.log(err)
            }
      }
      setDeleteItem(handleDelete)
    return [deleteItem];
};

export default useDeleteItem;