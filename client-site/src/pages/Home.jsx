import { useEffect, useState } from "react"
import Banner from "../components/Banner"
import Newsletter from "../components/newsletter"
import useAxiosPublic from "../hooks/useAxiosPublic"
import Item from "../components/Item"

const Home = () => {
  const [recentItems, setRecentItem] = useState([])
  const axiosPablic = useAxiosPublic()

useEffect(()=>{
  axiosPablic('/recentitems')
  .then(res=>{
    setRecentItem(res.data)
  })
},[])
  return (
    <div>
      <Banner/>
      <Newsletter/>
      {
        recentItems.map((item, index)=> <Item key={index} item={item}/>)
      }
    </div>
  )
}

export default Home
