import { useState } from "react";
import Blog from "../../../../components/Blog";

const HookUseSatate = () => {
    const [number, setNumber]=useState(0)

    const add=()=>{
        const newNumber=number+1
        setNumber(newNumber)
    }
    return (
        <>
            <Blog
            topic={'useState'}
            time={'React Core Concept 18:15 p-1'}
            />
            <h2>Namber: {number}</h2>
            <button className="btn-primary btn" onClick={add}>Add Number</button>
            <Blog
            fileName={'code'}
            code={`
import { useState } from "react";
const [number, setNumber]=useState(0)

const add=()=>{
    const newNumber=number+1
    setNumber(newNumber)
}
<h2>Namber: {number}</h2>
<button className="btn-primary btn" onClick={add}>Add Number</button>
                
                `}
            />
        </>
    );
};

export default HookUseSatate;