import { useEffect } from "react";
import { Accordion, Active } from "../../../shared/CommonJS";


const ReactLeftbar = () => {
    const getdata = [
        {
            title:"",
            topic:["React Project SetUp"]
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
        Accordion();
    })
    return (
        
        <>
        {/* Accordion */}
        <div className="accordion">Accordion</div>
        <div className="panel">
            Accordion Panel
        </div>

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

export default ReactLeftbar;