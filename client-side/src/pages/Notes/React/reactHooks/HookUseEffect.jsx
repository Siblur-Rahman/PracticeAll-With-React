import { useEffect } from "react";
import Blog from "../../../../shared/Blog";

const HookUseEffect = () => {

    useEffect(()=>{

    })
    return (
        <>
            <Blog
            time={'React Core Concept 27:15 p-2'}
            topic={'useEffect'}
            define={'The useEffect Hook allows you to perform side effects in your components.'}
            />
        </>
    );
};

export default HookUseEffect;