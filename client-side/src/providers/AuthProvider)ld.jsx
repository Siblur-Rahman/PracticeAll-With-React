/* eslint-disable react/prop-types */
import axios from 'axios'
import { createContext, useState } from 'react'
import toast from 'react-hot-toast'


export const AuthContext = createContext(null)
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)

  const [loading, setLoading] = useState(true)

  // const signIn = async (email, password) => {
  //   // setUser(users.find((user) => user.email===email && user.pass===password))
  //   const { data } = await axios.post(`${import.meta.env.VITE_API_URL}/user`,
  //     {password, email})
  //   setUser(data)
  // }
  // const {setUser} = useAuth()
  const signIn = async (email, password) => {
    const { data } = await axios.post(`${import.meta.env.VITE_API_URL}/user`,
      {password, email})
      if(data){
        setUser(data)
}

    return data
  }

  const logOut = async () => {
    setLoading(true)
    // return signOut(auth)
    setUser(null)
   const {data} = await axios(`${import.meta.env.VITE_API_URL}/logout`,
      {withCredentials: true} )
  }
// delete
const handleDelete = async(id, navigate)=>{
  console.log('handleDelete function active', id)
      try{
        const {data} = await axios.delete(`${import.meta.env.VITE_API_URL}/deleteItem/${id}`)
        console.log(data)
        if(data?.deletedCount>0){
          toast.success('Item Data delete Successfully!')
          navigate()
        }
      }
      catch(err){
        console.log(err)
      }
}

  const authInfo = {
    user,
    setUser,
    loading,
    setLoading,
    signIn,
    logOut,
    handleDelete
  }

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  )
}

export default AuthProvider
