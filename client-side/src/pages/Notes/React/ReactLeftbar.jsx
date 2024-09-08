import { useEffect } from "react";
import { Accordion, Active } from "../../../shared/CommonJS";
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
            topic:["React Router","Private","useNavitate","Navigate"]
    
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
                    <div className="sidebarHeading">{data.title}</div>
                    {
                        data.topic.map(topic=><a key={topic} href={`#${topic}`} className="link">{topic}</a>)
                    }
                </div>)
            }

        </>
    );
};

export default ReactLeftbar;