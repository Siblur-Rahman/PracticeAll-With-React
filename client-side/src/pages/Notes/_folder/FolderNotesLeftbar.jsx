import { useEffect } from "react";
import { Accordion, Active } from "../../../shared/CommonJS";


const FolderLeftbar = () => {
    const getdata = [
        {
            title:"Folder",
            topic:["topic-1","topic-2"]
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
                    <div className="sidebarHeading">{data.title}</div>
                    {
                        data.topic.map(topic=><a key={topic} href={`#${topic}`} className="link">{topic}</a>)
                    }
                </div>)
            }

        </>
    );
};

export default FolderLeftbar;