import {useEffect } from "react";
import {Active} from "../../../shared/CommonJS"
import Blog from "../../../shared/Blog";

const FolderNotes = () => {
    useEffect(() =>{
        Active();
    })

    return ( 
            <div className="topic-border">
                Folder
            <Blog
            code={'djakfjhsklgjklfh'}
            codes={['Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident, nobis?','Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident, nobis?']}
            />

        </div>    
    );
};

export default FolderNotes;