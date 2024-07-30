import { Link, Outlet, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const Dashboard = () => {
    const {user, logOut} = useAuth()
    const navigate = useNavigate()
    const handleLogOut = () =>{
        logOut()
        navigate('/')
    }
    return (
        <>
        {/* sideber */}
        <div className="absolute left-0 w-1/4 bg-yellow-700 min-h-[calc(100vh-200px)] p-5">
        {user?.role==='admin' && <ul>
            <li> <Link to='/'><button>Home</button></Link></li>
            <li> <Link to='/dashboard/manageitems'><button>Manage Items</button></Link></li>
        </ul>

        }
        <button onClick={handleLogOut}>Log out</button>

        </div>
            {/* outlet */}
            <div className="absolute left-1/4 p-5">
            <Outlet/>
            </div>
        </>
    );
};

export default Dashboard;