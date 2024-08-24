import { Outlet } from 'react-router-dom'
// import Navbar from '../components/Navbar'
import Header from '../shared/Header'
import Footer from '../shared/Footer'
import ReactPracticeLeftbar from '../pages/ReactPractices/ReactPracticeLeftbar'
// import NavbarItem from '../components/NavbarItem'

const Main = () => {
  return (
    <>
    <Header/>
    {/* sideber */}
    {/* <div className="leftBar min-h-[calc(100vh-200px)] p-5">
        <ReactPracticeLeftbar/>
    </div> */}
        {/* outlet */}
        <div className="content">
        <Outlet/>
        </div>
        <Footer/>
    </>
  )
}

export default Main
