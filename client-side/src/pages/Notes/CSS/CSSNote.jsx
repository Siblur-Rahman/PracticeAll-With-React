import {useEffect } from "react";
import {Active} from "../../../shared/CommonJS"
import Blog from "../../../components/Blog";

const CSSNote = () => {
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

export default CSSNote;