
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
                <ul className="flex mr-4">
                    <li className={`${pathname.includes('backend') && 'bg-red-600  rounded-lg' }`}><Link to ='/backend' >Backend</Link></li>
                    <li className={`${pathname.includes('howto') && 'bg-red-600  rounded-lg' }`}><Link to ='/howto' >How To</Link></li>
                    <li className={`${pathname.includes('notes') && 'bg-red-600  rounded-lg' }`}><Link to ='/notes' >Notes</Link></li>
                    <div>
                    </div>
                    {user && <>
                        <li><a onClick={handleLogOut} className="btn btn-sm bg-red-600  rounded-lg">Sign out</a></li>
                        <img className="h-10 rounded-full w-10 ml-5" src={user?.photoURL} alt="User Image" />

                    </>}            
                    {!user && <>
                        <li><Link to="/signup">SignUp</Link></li>
                        <li><Link to="/login">Login</Link></li>
                    </>}
                </ul>
           </div>
    );
};

export default Header;