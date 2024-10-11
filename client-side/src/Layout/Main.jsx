import { Outlet, useLocation } from "react-router-dom";
import Footer from "../pages/shared/Footer/Footer";
import Navbar from "../pages/shared/Navber/Navbar";

const Main = () => {
    const location = useLocation()
    console.log(location.pathname)
    const noHeaderFooter = location.pathname.includes('login') || location.pathname.includes('signup');
    return (
        <div className="relative">
            <div className="">
                {noHeaderFooter ||  <Navbar/>}
            </div>
                   {/* sideber */}
            <div className="h-full w-[20%] z-20 fixed top-12 left-0 overflow-auto pt-2 pb-5 min-h-[calc(100vh-200px)]">              
                    sidebar
            </div>
            <div className="h-full w-[80%] relative top-10 left-[20%] overflow-auto mb-10 pb-10">
                <Outlet/>
            </div>
            <div className="w-full">
                {noHeaderFooter || <Footer/>}
            </div>
        </div>
    );
};

export default Main;