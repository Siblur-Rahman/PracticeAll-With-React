import { useEffect } from "react";
import { Active } from "../../../shared/CommonJS";


const BackendNodeLeftbar = () => {
    const links =[
        {
            title:'Get',
            path:'/backend/get',
            sub:{
                title:['with Fetch', 'with axios', 'with axios Hook', 'with Custom Hook'],
            }
        }
    ]
    const getdata = [
        {
            title:"Data",
            topic:['with Fetch', 'with axios', 'with axios Hook', 'with Custom Hook'],
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
        
        <div className="mt-5">

            {
                getdata.map(data=><div key={data.title}>
                    <div className="sidebarHeading">{data.title}</div>
                    {
                        data.topic.map(topic=><a key={topic} href={`#${topic}`} className="link">{topic}</a>)
                    }
                </div>)
            }

        </div>
    );
};

export default BackendNodeLeftbar;