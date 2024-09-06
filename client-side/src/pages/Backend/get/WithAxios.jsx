import { useEffect, useState } from "react";
import Item from "../../../shared/Item";
import axios from "axios";
import Blog from './../../../shared/Blog';
import { handleToggleDesplay } from "../../../shared/CommonJS";

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
            <Blog id={'with axios'}/>
            <button onClick={handleToggleDesplay} className="btn btn-outline text-red-600 text-2xl">Code</button>
            <div className="hidden">
                            <Blog code={'kjkjgkj'}/>
            </div>
            {
                allItems.map(item =><Item key={item._d} item={item}/>)
            }
        </div>
    );
};

export default WithAxios;