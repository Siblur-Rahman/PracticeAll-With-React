import { useEffect, useState } from "react";
import Item from "../../../shared/Item";

const WithFetch = () => {
    const [allItems, setAllItems] = useState([])
    useEffect( () =>{
        fetch('http://localhost:5001/allitems')
        .then(res => res.json())
        .then(data =>{
            setAllItems(data)
        })
    }, [])
    return (
        <div>
            {
                allItems.map(item =><Item key={item._d} item={item}/>)
            }
        </div>
    );
};

export default WithFetch;