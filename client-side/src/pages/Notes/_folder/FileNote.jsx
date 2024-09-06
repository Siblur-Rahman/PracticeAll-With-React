import {useEffect } from "react";
import {Active} from "../../../shared/CommonJS"
import Blog from "../../../shared/Blog";

const FileName = () => {
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

export default FileName;