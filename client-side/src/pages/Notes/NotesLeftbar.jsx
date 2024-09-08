import FolderLeftbar from "./_folder/FolderNotesLeftbar";
import BackendNodeLeftbar from "./BackendNote/BackendNodeLeftbar";
import JavasctiptNotesLeftbar from "./Javascript/JavasctiptNotesLeftbar";
import ReactLeftbar from "./React/ReactLeftbar";
import ToolsLeftbar from "./Tools/ToolsLeftbar";
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const NotesLeftbar = () => {
  const {pathname} = useLocation();
    return (
        <div className="">
            <div className="mt-2"><Link to="/notes/javascript" className={`my-1 text-2xl px-2 bg-red-500 ${location.pathname.includes('javascript') && 'text-cyan-500'}`}>JavaScript</Link></div>
            {pathname==='/notes/javascript' && <JavasctiptNotesLeftbar/>}
            <div className="mt-2"><Link to="/notes/react" className={`my-1 text-2xl px-2 bg-red-500 ${location.pathname.includes('react') && 'text-cyan-500'}`}>React</Link></div>
            {pathname==='/notes/react' && <ReactLeftbar/>}
            <div className="mt-2"><Link to="/notes/backend" className={`text-2xl px-2 bg-red-500 ${pathname.includes('note/backend') && 'text-cyan-500'}`}>BackendNote</Link></div>
            {pathname==='/notes/backend' && <BackendNodeLeftbar/>}
            <div className="mt-2"><Link to="/notes/tools" className={`text-2xl px-2 bg-red-500 ${pathname.includes('tool') && 'text-cyan-500'}`}>Tools</Link></div>
            {pathname==='/notes/tools' && <ToolsLeftbar/>}
            <div className="mt-2"><Link to="/notes/folder" className={`text-2xl px-2 bg-red-500 ${pathname.includes('tool') && 'text-cyan-500'}`}>Folder</Link></div>
            {pathname==='/notes/folder' && <FolderLeftbar/>}
        </div>
    );
};

export default NotesLeftbar;