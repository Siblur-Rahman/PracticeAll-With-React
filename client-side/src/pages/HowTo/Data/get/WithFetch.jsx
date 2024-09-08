
import Blog from "../../../../shared/Blog";
import { handleToggleDesplay } from "../../../../shared/CommonJS";


const WithFetch = () => {
    return (
        <div>
            <button onClick={handleToggleDesplay} className="w-full btn btn-outline text-red-600 text-2xl">with Fetch</button>
            <div className="hidden">
            <Blog 
            code={[
`
    useEffect( () =>{
        fetch('http://localhost:5001/allitems')
        .then(res => res.json())
        .then(data =>{
            setAllItems(data)
        })
    }, [])
`
]}/>
            
        </div>
        </div>
    );
};

export default WithFetch;