
// import { useContext } from "react";
import {Link, useLocation } from "react-router-dom";
// import { AuthContext } from '../providers/AuthProvider';
import useAuth from "../hooks/useAuth";

const Header = () => {
        const {pathname} = useLocation()
        const {user, logOut} = useAuth()

        const handleLogOut = () =>{
            logOut()
        }

    return (

           <div className="header">
               <ul className="flex-col">
                <Link className={`${pathname ==='/' && 'bg-red-600  rounded-lg' }`} to="/">Hoome</Link>
               </ul>
                <ul className="flex ">
                    <li className={`${pathname.includes('backend') && 'bg-red-600  rounded-lg' }`}><Link to ='/backend' >Backend</Link></li>
                    <li className={`${pathname.includes('notes') && 'bg-red-600  rounded-lg' }`}><Link to ='/notes' >Notes</Link></li>
                    {user && <>
                        <li><a onClick={handleLogOut} className="btn btn-sm">Sign out</a></li>
                    </>}            
                    {!user && <>
                        <li><Link to="/register">Register</Link></li>
                        <li><Link to="/login">Login</Link></li>
                    </>}
                </ul>
           </div>
    );
};

export default Header;