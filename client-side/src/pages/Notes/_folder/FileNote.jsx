import {useEffect } from "react";
import {Active, Accordion} from "../../../shared/CommonJS"
import Blog from "../../../components/Blog";

const FileName = () => {
    useEffect(() =>{
        Active();
        Accordion()
    })

    return ( 
            <div className="code topic-border">
            <Blog
            />

        </div>    
    );
};

export default FileName;