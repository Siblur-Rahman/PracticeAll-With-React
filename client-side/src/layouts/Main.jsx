import {Outlet, useLocation} from 'react-router-dom'
import Header from '../shared/Header'
import Footer from '../shared/Footer'
import NotesLeftbar from '../pages/Notes/NotesLeftbar'
import { useEffect } from 'react'
import {Active } from '../shared/CommonJS'
import HowToLeftbar from '../pages/HowTo/HowToLeftbar'


const Main = () => {
  const {pathname} = useLocation();
  Active();
  useEffect(() =>{
    // Active();
}, [])

  return (
     <>
        <Header/>
        {/* sideber */}
       {!pathname.includes('login') && <div className="leftBar min-h-[calc(100vh-200px)]">


              {pathname.includes("howto")  && <HowToLeftbar/>}
              
              {pathname.includes("notes")  && <NotesLeftbar/>}
        </div>}
        {/* outlet */}
        <div className={`content min-h-screen ${pathname.includes('login')? 'w-full left-0':'w-[80%] left-[20%]'}`}>
          <Outlet/>
        </div>
        {/* Footer */}
        <Footer/>
        </>
  )
}

export default Main
