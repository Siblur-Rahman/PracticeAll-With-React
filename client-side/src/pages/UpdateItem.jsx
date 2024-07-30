import { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

const UpdateItem = () => {
    const navigate = useNavigate()
    const {user} = useAuth()
    const {id} = useParams()
    const [item, setItem] = useState([])

    // useEffect(()=>{
    //     fetch(`${import.meta.env.VITE_API_URL}/item/${id}`)
    //     .then(res=>res.json())
    //     .then(data=>{
    //         setItem(data)
    //     })
    // })
    useEffect(()=>{
     const getData = async() =>{
        const {data} = await axios(`${import.meta.env.VITE_API_URL}/item/${id}`)
        setItem(data)
     };
     getData()
    })
 const handlePut = async(e)=>{
    e.preventDefault()
    const form = e.target
    const title = form.title.value
    const email = form.email.value
    const photo = form.photo.value
    const category = form.category.value
    const description = form.description.value
    const date = new Date()
    const itemData = {
      title,
      photo,
      category,
      description,
      date,
      status:'pending',
      ader:{
        email,
        name:user?.displayName,
        photo:user?.photoURL
      }
 }

//  put with fetch
 fetch(`${import.meta.env.VITE_API_URL}/updateItem/${id}`,{
    method: "PUT",
    headers:{'Content-type': 'application/json'},
    body:JSON.stringify(itemData)
 })
 .then(res=>res.json())
 .then(data=>{
    if(data?.modifiedCount>0){
        toast.success('Item Data Update Successfully!')
            navigate(`/MyPostedItems/${user?.email}`)
    }
 })

// put with axios
// try{
//     const {data} = await axios.put(`${import.meta.env.VITE_API_URL}/updateItem/${id}`,
//         itemData
//     )
//     if(data?.modifiedCount>0){
//         toast.success('Item Data Update Successfully!')
//         navigate(`/MyPostedItems/${user?.email}`)
//     }
// }
// catch(err){
//     console.log(err)
// }
}

    return (
        <>
        <div className='w-5/6 mx-auto min-h-[calc(100vh-306px)] my-12'>
      <section className=' p-2 md:p-6 mx-auto bg-white rounded-md shadow-md '>
        <h2 className='text-5xl text-blue-800 font-bold capitalize text-center'>
          Update The Item
        </h2>

        <form onSubmit={handlePut}>
          <div className='grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2'>
            <div>
              <label className='text-gray-700 ' htmlFor='title'>
                Title
              </label>
              <input
                id='title'
                name='title'
                type='text'
                defaultValue={item?.title}
                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
              />
            </div>

            <div>
              <label className='text-gray-700 ' htmlFor='emailAddress'>
                Email Address
              </label>
              <input
                id='emailAddress'
                type='email'
                name='email'
                disabled
                defaultValue={user?.email}
                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
              />
            </div>
  
            <div className='mt-4'>
              <label
                className='block mb-2 text-sm font-medium text-gray-600 '
                htmlFor='photo'
              >
                Photo URL
              </label>
              <input
                id='photo'
                autoComplete='photo'
                name='photo'
                defaultValue={item?.photo}
                className='block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300'
                type='text'
              />
            </div>

            <div className='flex flex-col gap-2 '>
              <label className='text-gray-700 ' htmlFor='category'>
                Category
              </label>
              <select
                name='category'
                id='category'
                className='border p-2 rounded-md'
              >
                <option value='Business item'>Business item</option>
                <option value='Food item'>Food item</option>
                <option value='Fashion'>Fashion</option>
              </select>
            </div>

          </div>
         
          {/* Description */}
          <div className='flex flex-col gap-2 mt-4'>
            <label className='text-gray-700 ' htmlFor='long_description'>
              Description
            </label>
            <textarea
            defaultValue={item?.description}
              className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
              name='description'
              id='description'
            ></textarea>
          </div>
          <div className='flex justify-end mt-6'>
            <button className='px-8 py-2.5 leading-5 text-white transition-colors duration-300 transhtmlForm bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600'>
            Update
            </button>
          </div>
        </form>
      </section>
    </div>
        </>
        
    );
};

export default UpdateItem;