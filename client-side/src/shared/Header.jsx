
// import { useContext } from "react";
import {Link, NavLink, useLocation } from "react-router-dom";
// import { AuthContext } from '../providers/AuthProvider';
import useAuth from "../hooks/useAuth";

const Header = () => {
        const {pathname} = useLocation()
        const {user, logOut} = useAuth()

        const handleLogOut = () =>{
            logOut()
        }
        const links = [
            {
                title:'Practice React',
                path:'/react'
            },
            {
                title:'Practice Javascript',
                path:'/javascript'
            },
            {
                title:'Notes',
                path:'/notes'
            },
            // {
            //     title:'',
            //     path:''
            // },
            // {
            //     title:'',
            //     path:''
            // },
        ]

        const navLink =<>
            {
                links.map((link, index) =><li key={index}><NavLink to ={link.path} className={`${pathname ===link.path && 'bg-red-600' }`}>{link.title}</NavLink></li>)
            }
            <li><NavLink to="/password">Password</NavLink></li>
            <li><NavLink to=""></NavLink></li>
            {user && <>
                <li><a onClick={handleLogOut} className="btn btn-sm">Sign out</a></li>
            </>}            
            {!user && <>
                  <li><NavLink to="/register">Register</NavLink></li>
                <li><NavLink to="/login">Login</NavLink></li>
            </>}

            </>
    return (

            <div className="bg-slate-500 text-white header">
                <div className="navbar-start">
                    <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLink}
                    </ul>
                    </div>
                    <a href="/" className="text-xl">Practic & Note</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                    {navLink}
                    </ul>
                </div>
                <div className="dropdown dropdown-end">
                    
                    {
                        user && <>
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                            <img alt="" src={user.photoURL} />
                            </div>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-6 p-2 shadow bg-base-100 rounded-box w-52 z-10">
                            <li>
                            <h2 className="justify-between">
                               {
                                user.displayName
                               }
                            </h2>
                            </li>
                            {user?.role==='admin' && 
                            <li> <Link to = '/dashboard'>Dashboard</Link> </li>
                        }
                        
                        </ul>
                        </>
                    }
                </div>
            </div>
    );
};

export default Header;