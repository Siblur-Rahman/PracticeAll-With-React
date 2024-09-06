import Blog from "../../../../shared/Blog";

const items =["Hooks are reusable functions.","When you have component logic that needs to be used by multiple components, we can extract that logic to a custom Hook."]

// const items ={
//     multiple:["Hooks are reusable functions.","When you have component logic that needs to be used by multiple components, we can extract that logic to a custom Hook."]
// }
const CustomHook = () => {
    return (
        <div>
            <Blog
            topic={'Custom hook'}
            url={'https://www.w3schools.com/react/react_customhooks.asp'}
            time={'64-3 6:00'}
            defineWithIndex={items}
            code={
`
import { useEffect, useState } from "react";

const useMenu = () => {
const [menu, setMenu] = useState([]);
const [loading, setLoading] = useState(true);
useEffect(() => {
fetch('url')
    .then(res => res.json())
    .then(data => {
        setMenu(data);
        setLoading(false);
    });
}, [])
return [menu, loading]
}

export default useMenu;
`
            }/>

            {/* useAxiosPablic */}
          <Blog
          topic={'useAxiosPablic'}
          time={'PracticAll hooks/useAxiosPublic.jsx'}
          code={`
import axios from "axios";

const axiosPublic = axios.create({
    baseURL: 'url'
    // baseURL: 'doller{import.meta.env.VITE_API_URL}'
    // baseURL: 'http://localhost:5000'
})

const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;
            `}
          />
        </div>
    );
};

export default CustomHook;