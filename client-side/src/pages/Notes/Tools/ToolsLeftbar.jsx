import { useEffect } from "react";
import {Active, Accordion } from "../../../shared/CommonJS"
// import useGetData from './../../../hooks/useGetData';

const ToolsLeftbar = () => {
    // const [getdata]=useGetData('toolsLeftbar.json');
    const getdata=[
        {
            title:"",
            topic:["DisplaySymbol","Page setUp","Theme","Images", "Index"]
        },
        {
            title:"Index of PH",
            topic:["CSM-11 1st","CSM-11 Last","Theme","Images", "Index", "Assignments"]
        },
        {
            title:"Git-GitHub",
            topic:["notice","Git Configure", "Creating, Removing and so on file and folder", "Git Commit Log", "Git Branch", "Push"]
        },
        {
            title:"Keyboard Shortcut",
            topic:["Common Keyboard","VS Code"]
        }
    
    ];
    useEffect(() =>{
        Active();
        Accordion()
    })
    return (
        
        <>
            {
                getdata.map(data=><div key={data.title}>
                    <div className="sidebarHeading flex-col">{data.title}</div>
                    <ul className="flex-col px-2">
                    {
                        data?.topic?.map(topic=><li key={topic}><a  href={`#${topic}`} className="link">{topic}</a></li>)
                    }
                    </ul>
                </div>)
            }

        </>
    );
};

export default ToolsLeftbar;