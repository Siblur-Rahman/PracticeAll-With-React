
import Blog from "../../../shared/Blog";

// const leftbar =
var acc = document.getElementsByClassName("accordion");
var accCount;

for (accCount = 0; accCount < acc.length; accCount++) {
  acc[accCount].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display == "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    } 
  });
}
const PageSetup = () => {
    return (
        <div className="topic-border">
        <Blog
        id={'Page setUp'}
        code={
`
import { useContext, useEffect } from "react";
import { ToolsForCode } from "../../CodeProvider";
import Active, { Accordion } from "../../components/CommonJS/CommonJS";
import ToolsLeftbar from "./ToolsLeftbar";

const FileName = () => {
    const {curlyBraceOpen, curlyBraceClosed, greaterThan,
        lessThan} = useContext(ToolsForCode)
        useEffect(() =>{
            Active();
            Accordion();
        })
    return (
        <>
        <div className="leftBar">
            <ToolsLeftbar/>
        </div>    
        <div className="content">
            <ArrowFunction/>
        </div>    
        </>
    );
};

export default FileName;
`
        }
        />
        <Blog
            topic={'Leftbar Update'}
            code={
`

import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const FileLeftbar = () => {
  const {pathname} = useLocation();
    const links =[
        {
            title:'Get',
            path:'/backend/get',
            sub:{
                title:['with Fetch', 'with axios',],
            }
        }
    ]
    return (
        <>
            {
                links?.map((link, index) => <> <Link key={index} to={link.path} className={backticktext-xl px-2 dollar{pathname === link.path && 'bg-red-500 text-white'}backtick}>{link.title}</Link>
                <ul className={backtickpl-3  dollar{pathname === link.path? 'static':'hidden'}backtick}>
                {link?.sub?.title.map((subItem, ind) => <li key={ind}><a  href={backtick#dollar{subItem}backtick} className="link">{subItem}</a></li>)}
                </ul>
                </>
                )
            }

        </>
    );
};

export default FileLeftbar;
`
            }
        />
        <Blog
        topic={'Leftbar'}
        code={
`
import { useEffect } from "react";
import useGetData from "../../hooks/useGetData";
import { Active } from "../../components/CommonJS/CommonJS";


const ReactLeftbar = () => {
const [getdata]=useGetData('reactLeftbar.json');
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
            data.topic.map(topic=><a key={topic} 
                href={'#dollar{topic}'} 
                className="link">{topic}</a>)
        }
    </div>)
}
</>
);
};

export default ReactLeftbar;
`
        }
        />
        </div>
    );
};

export default PageSetup;