import ReactLeftbar from "./React/ReactLeftbar";
import ToolsLeftbar from "./Tools/ToolsLeftbar";
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const NotesLeftbar = () => {
  const {pathname} = useLocation();
    return (
        <>
            <div><Link to="/notes/react" className={`my-1 text-2xl px-2 bg-red-500 ${location.pathname.includes('react') && 'text-cyan-500'}`}>React</Link></div>
            {pathname==='/notes/react' && <ReactLeftbar/>}
            <div><Link to="/notes/tools" className={`text-2xl px-2 bg-red-500 ${pathname.includes('tool') && 'text-cyan-500'}`}>Tools</Link></div>
            {pathname==='/notes/tools' && <ToolsLeftbar/>}
        </>
    );
};

export default NotesLeftbar;