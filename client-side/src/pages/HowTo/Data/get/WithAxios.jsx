import { useEffect, useState } from "react";
import Item from './../../../../shared/Item';
import axios from "axios";
import Blog from './../../../../shared/Blog';
import { handleToggleDesplay } from "../../../../shared/CommonJS";

const WithAxios = () => {
    const [allItems, setAllItems] = useState([])
    useEffect( () =>{
        const getItems = async () =>{
            const {data} = await axios('http://localhost:5001/allitems');
            setAllItems(data)
        }
        getItems();
    }, [])
    return (
        <div>
            <button onClick={handleToggleDesplay} className="w-full btn btn-outline text-red-600 text-2xl">With Axios</button>
            <div className="hidden">
                <Blog 
            fileName={'client-side'}
            codes={[
`
    useEffect( () =>{
        const getItems = async () =>{`,
`            const {data} = await axios('http://localhost:5001/allitems');
            setAllItems(data)
        }`,
 `       getItems();
    }, [])

`]
                            }/>
            </div>
        </div>
    );
};

export default WithAxios;