import { useEffect } from "react";
import {Active } from "../../shared/CommonJS";


const ArrayLeftbar = () => {
    const data =[
        {
            page_title:'Array',
            topic:['map']
        }
    ]
    useEffect(() =>{
        Active();
    })
    return (
        
        <>
        {
                            data.map(data=><div key={data.page_title}>
                                <div className="heading">{data.page_title}</div>
                                {
                                    data.topic.map(topic=><a key={topic} href={`#${topic}`} className="link">{topic}</a>)
                                }
                            </div>)
                        }
        </>
    );
};

export default ArrayLeftbar;