import {useEffect } from "react";
import { Active } from "../../../shared/CommonJS";
import Blog from "../../../shared/Blog";


const BackendNotes = () => {
    useEffect(() =>{
        Active();
    })

    return ( 
            <div className="code topic-border">
            <Blog
            />

        </div>    
    );
};

export default BackendNotes;