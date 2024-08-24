
import { useEffect } from "react";
import useGetData from "../../hooks/useGetData";
import { Active } from "../../components/CommonJS/CommonJS";


const ToolsLeftbar = () => {
    const [getdata]=useGetData('toolsLeftbar.json');
    useEffect(() =>{
        Active();
        // Accordion();
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

export default ToolsLeftbar;
{/* <a key={data.topic} href="#{data.topic}" className="link">{data.topic}</a> */}