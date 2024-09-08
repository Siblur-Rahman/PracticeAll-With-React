
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
const navOption = <>
<li className={`${pathname ==='/' && 'bg-red-600  rounded-lg' }`}><Link  to="/">Hoome</Link></li>
                    <li className={`${pathname.includes('backend') && 'text-white bg-red-600  rounded-lg' }`}><Link to ='/backend' >Backend</Link></li>
                    <li className={`${pathname.includes('howto') && 'text-white bg-red-600  rounded-lg' }`}><Link to ='/howto' >How To</Link></li>
                    <li className={`${pathname.includes('notes') && 'text-white bg-red-600  rounded-lg' }`}><Link to ='/notes' >Notes</Link></li>
                    <div>
                    </div>           
                    {!user && <>
                        <li className={`${pathname ==='/signup' && 'text-white bg-red-600  rounded-lg' }`}><Link to="/signup">SignUp</Link></li>
                        <li><Link to="/login">Login</Link></li>
                    </>}
</>
    return (
<div className="navbar bg-black fixed top-0 z-10 h-[40px] min-h-10">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden text-white">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
{/* <nav> */}
    {navOption}
{/* </nav> */}
      </ul>
    </div>
    <a className="btn btn-ghost text-xl text-white">All Practic & Notes</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1  text-white">
      {navOption}
    </ul>
  </div>
  <div className="navbar-end">
  <div className={`dropdown dropdown-end ${!user && 'hidden'}`}>
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS Navbar component"
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
        </div>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a onClick={handleLogOut}>Sign out</a></li>
      </ul>
    </div>
  </div>
</div>
    );
};

export default Header;