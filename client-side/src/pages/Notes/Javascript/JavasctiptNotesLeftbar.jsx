import { useEffect } from "react";
import {Active } from "../../../shared/CommonJS";


const JavasctiptNotesLeftbar = () => {
    const getdata = [
        {
            title:"Array",
            topic:["Map"]
        },
        {
            title:"Condition",
            topic:["if els"]
        },
        {
            title:"",
            topic:[""]
        },
        {
            title:"",
            topic:[""]
        },
        {
            title:"",
            topic:[""]
        }
    ]
    useEffect(() =>{
        Active();
    })
    return (
        
        <>

            {
                getdata.map(data=><div key={data.title}>
                    <div className="heading">{data.title}</div>
                    {
                        data.topic.map(topic=><a key={topic} href={`#${topic}`} className="link">{topic}</a>)
                    }
                </div>)
            }

        </>
    );
};

export default JavasctiptNotesLeftbar;