import { useEffect, useState } from "react";
import Item from './../../../../shared/Item';
import Blog from "../../../../shared/Blog";
import { handleToggleDesplay } from "../../../../shared/CommonJS";
import WithFetch from "./WithFetch";
import WithAxios from "./WithAxios";
import WithAxiosHook from "./WithAxiosHook";


const Get = () => {
    const [allItems, setAllItems] = useState([])
    useEffect( () =>{
        fetch('http://localhost:5001/allitems')
        .then(res => res.json())
        .then(data =>{
            setAllItems(data.filter((item, ind)=>ind <= 5))
        })
    }, [])
    return (
<div>
            <button onClick={handleToggleDesplay} className="w-full btn btn-outline text-red-600 text-2xl">Full Code</button>
            <div className="hidden">
            <Blog 
            fileName={'client-side'}
            codes={[
`
import { useEffect, useState } from "react";
import Item from './../../../../shared/Item';
import Blog from "../../../../shared/Blog";
import { handleToggleDesplay } from "../../../../shared/CommonJS";


const WithFetch = () => {
    const [allItems, setAllItems] = useState([])
    useEffect( () =>{
        fetch('http://localhost:5001/allitems')
        .then(res => res.json())
        .then(data =>{
            setAllItems(datadata.filter((item, ind)=>ind <= 5))
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
`]
                            }/>
            <Blog 
            fileName={'server-side'}
            codes={[
`
app.get('/allitems', async (req, res) => {
    const result = await itemsCollection.find().toArray();
    res.send(result)
})
`]
                            }/>
    </div>
                            <WithFetch/>
                            <WithAxios/>
                            <WithAxiosHook/>
    <div>
        <h2 className="text-2xl text-center text-red-600 font-bold mt-5">5 data showing here</h2>
            {
                allItems.map(item =><Item key={item._d} item={item}/>)
            }
    </div>
</div>
    );
};

export default Get;