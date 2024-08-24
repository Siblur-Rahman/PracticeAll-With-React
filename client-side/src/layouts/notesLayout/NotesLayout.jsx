import { Link, Outlet, useLocation } from "react-router-dom";
import Header from "../../shared/Header";
import ToolsLeftbar from "../../pages/Notes/Tools/ToolsLeftbar";
import ReactLeftbar from "../../pages/Notes/React/ReactLeftbar";

const NotesLayout = () => {
    const {pathname} = useLocation();
    console.log(pathname)
    return (
        <>
        <Header/>
        {/* sideber */}
        <div className="leftBar min-h-[calc(100vh-200px)]">
        <div><Link to="/notes/react" className={`my-1 text-2xl px-2 bg-red-500 ${pathname === "/notes/react" && 'text-cyan-500'}`}>React</Link></div>
        {pathname==='/notes/react' && <ReactLeftbar/>}
        <div><Link to="/notes/tools" className={`text-2xl px-2 bg-red-500 ${pathname === "/notes/tools" && 'text-cyan-500'}`}>Tools</Link></div>
        {pathname==='/notes/tools' && <ToolsLeftbar/>}
        </div>
            {/* outlet */}
            <div className="">
            <Outlet/>
            </div>
        </>
    );
};

export default NotesLayout;