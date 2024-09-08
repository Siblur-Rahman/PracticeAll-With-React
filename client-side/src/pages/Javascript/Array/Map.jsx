// import {useState } from "react";
import Blog from "../../../shared/Blog";
// import { Accordion } from '../../../shared/CommonJS';

const Map = () => {
    // const [desplay, setDesplay] = useState('hidden')
    const handleDesplay=(e)=>{
        // if(desplay==='hidden') {setDesplay('')}else{setDesplay('hidden')}
        e.target.nextElementSibling.classList.toggle('hidden')
    }
    const array1 = ['mango', 'apple', 'orenge']
    return (
        <div>
            <Blog id={'map'}/>
            {
                array1.map((item, ind)=><p key={ind}>{item}</p>)
            }
            {
                array1.map((item, ind)=>{return <p key={ind}>{item}</p>})
            }
            {
                array1.map((item, ind)=>(<p key={ind}>{item}</p>))
            }
            <div onClick={handleDesplay}>Code2</div>
            <div className={`rounded-lg p-2 hidden`}>
                <Blog
                code={[`
                array1.map((item, ind)=><p key={ind}>{item}</p>)
                array1.map((item, ind)=>{return <p key={ind}>{item}</p>})
                array1.map((item, ind)=>(<p key={ind}>{item}</p>))  
                    `]}
                />
            </div>
            <div onClick={handleDesplay}>Code2</div>
            <div className={`rounded-lg p-2 hidden`}>
                <Blog
                code={[`
                array1.map((item, ind)=><p key={ind}>{item}</p>)
                array1.map((item, ind)=>{return <p key={ind}>{item}</p>})
                array1.map((item, ind)=>(<p key={ind}>{item}</p>))  
                    `]}
                />
            </div>
        </div>
    );
};

export default Map;