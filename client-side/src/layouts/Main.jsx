import {Outlet, useLocation} from 'react-router-dom'
import Header from '../shared/Header'
import Footer from '../shared/Footer'
import NotesLeftbar from '../pages/Notes/NotesLeftbar'
import BackendLeftbar from '../pages/Backend/BackendLeftbar'
import { useEffect } from 'react'
import {Active } from '../shared/CommonJS'


const Main = () => {
  const {pathname} = useLocation();
  
  useEffect(() =>{
    Active();
}, [])

  return (
     <>
        <Header/>
        {/* sideber */}
        <div className="leftBar min-h-[calc(100vh-200px)]">
            {/* BackendLeftbar */}
              {pathname.includes("backend")  && <BackendLeftbar/>}
            {/* NotesLeftbar */}
              {pathname.includes("notes")  && <NotesLeftbar/>}
        </div>
        {/* outlet */}
        <div className="content min-h-screen">
          <Outlet/>
        </div>
        {/* Footer */}
        <Footer/>
        </>
  )
}

export default Main
