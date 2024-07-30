import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";

const Put = () => {
    const navigate = useNavigate()
    const [item, setItem] = useState([]);
    const {id} = useParams()
    useEffect(()=>{
        fetch(`${import.meta.env.VITE_API_URL}/item/${id}`)
        .then(res=>res.json())
        .then(data=>{
            setItem(data)
        })
    },[id])
    const handlePut = async e => {
        e.preventDefault()
        const form = e.target
        const item_title = form.item_title.value
        const itemData = {
          item_title,
        }
        // Put with Fetch
        // fetch(`${import.meta.env.VITE_API_URL}/updateItem/${id}`,{
        //     method: "PUT",
        //     headers:{"Content-type": "application/json"},
        //     body:JSON.stringify(itemData)
        // })
        // .then(res=>res.json())
        // .then(data=>{
        //     console.log(data)
        //     if(data?.modifiedCount>0){
        //         toast.success('Item Data Update Successfully!')
        //         navigate('/crud-fetch')
        //     }
        // })

        // Put with Axios
        try{
            const {data} = await axios.put(`${import.meta.env.VITE_API_URL}/updateItem/${id}`,
                itemData
            )
            if(data?.modifiedCount>0){
                        toast.success('Item Data Update Successfully!')
                        navigate('/crud-fetch')
                    }
        }
        catch(err){
            console.log(err)
        }

    }
    const handlePatch = async e => {
        e.preventDefault()
        const form = e.target
        const user_name= form.user_name.value
        const itemData = {
          user_name
        }
        // Put with Fetch
        // fetch(`${import.meta.env.VITE_API_URL}/updateItem/${id}`,{
        //     method: "PUT",
        //     headers:{"Content-type": "application/json"},
        //     body:JSON.stringify(itemData)
        // })
        // .then(res=>res.json())
        // .then(data=>{
        //     console.log(data)
        //     if(data?.modifiedCount>0){
        //         toast.success('Item Data Update Successfully!')
        //         navigate('/crud-fetch')
        //     }
        // })

        // Patch with Axios
        try{
            const {data} = await axios.patch(`${import.meta.env.VITE_API_URL}/patchItem/${id}`,
                itemData
            )
            if(data?.modifiedCount>0){
                        toast.success('Item Data Update Successfully!')
                        navigate('/crud-fetch')
                    }
        }
        catch(err){
            console.log(err)
        }

    }
    return (
         <>
         {/* Put */}
         <div className='w-5/6 mx-auto min-h-[calc(100vh-306px)] my-12'>
         <section className=' p-2 md:p-6 mx-auto bg-white rounded-md shadow-md '>
           <h2 className='text-5xl text-blue-800 font-bold capitalize text-center'>
             Add a Item
           </h2>
   
           <form onSubmit={handlePut}>
             <div className='grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2'>
               <div>
                 <label className='text-gray-700 ' htmlFor='item_title'>
                   Item Title
                 </label>
                 <input
                   id='item_title'
                   name='item_title'
                   defaultValue={item.title}
                   type='text'
                   className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                 />
               </div>
   
             </div>
           
             
             <div className='flex justify-end mt-6'>
               <button className='px-8 py-2.5 leading-5 text-white transition-colors duration-300 transhtmlForm bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600'>
                 Update/Put
               </button>
             </div>
           </form>
         </section>
       </div>
         {/* Patch */}
         <div className='w-5/6 mx-auto min-h-[calc(100vh-306px)] my-12'>
         <section className=' p-2 md:p-6 mx-auto bg-white rounded-md shadow-md '>
           <h2 className='text-5xl text-blue-800 font-bold capitalize text-center'>
             Patch User Name
           </h2>
   
           <form onSubmit={handlePatch}>
             <div className='grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2'>
               <div>
                 <label className='text-gray-700 ' htmlFor='item_title'>
                   User Name
                 </label>
                 <input
                   id='user_name'
                   name='user_name'
                   defaultValue={item?.user_name}
                   type='text'
                   className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                 />
               </div>
   
             </div>
           
             
             <div className='flex justify-end mt-6'>
               <button className='px-8 py-2.5 leading-5 text-white transition-colors duration-300 transhtmlForm bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600'>
                 Update/Patch
               </button>
             </div>
           </form>
         </section>
       </div>
       </>
    );
};

export default Put;
// p-5 3:51