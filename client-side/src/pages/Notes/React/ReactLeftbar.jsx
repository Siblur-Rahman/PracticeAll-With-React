import { useEffect } from "react";
import {Active } from "../../../shared/CommonJS";
// import useGetData from './../../../hooks/useGetData';


const ReactLeftbar = () => {
    // const [getdata]=useGetData('reactLeftbar.json');
    const getdata = [
        {
            title:"",
            topic:["React Project SetUp"]
    
        },
        {
            title:"Route",
            topic:["React Router","Private"]
    
        },
        {
            title:"React Notes",
            topic:["React Props"]
            
        },   
        {
            title:"Athintication",
            topic:["firebase.config","AuthProvider", "SignUp Page", "JSON Web Token (JWT)", "Cookie"]
        
        },   
        {
            title:"Components",
            topic:["React Helmet Async","React Parallax","Recaptcha","Icons","Date Picker","Sweetalert", "Form", "Payment"]
    
        },
        {
            title:"React Hooks",
            topic:["Custom hook","useState", "useEffect"]
        },
        {
            title:"React API",
            topic:["TanStack/Reack-Query","Axios","Axios Instance"]
        }
    
    ]
    useEffect(() =>{
        Active();
    })
    return (
        
        <>
        {/* Accordion */}

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