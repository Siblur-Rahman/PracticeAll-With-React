
import Blog from './../../../../shared/Blog';
import { handleToggleDesplay } from "../../../../shared/CommonJS";

const WithAxiosHook = () => {
 
    return (
        <div>
            <button onClick={handleToggleDesplay} className="w-full btn btn-outline text-red-600 text-2xl">With Axios Hook</button>
            <div className="hidden">
            <h2 className="text-2xl">With async Function</h2>
                <Blog 
            fileName={'client-side'}
            codes={[
`
       useEffect( () =>{
        const getItems = async () =>{
            const {data} = await axiosPublic('/allitems');
            setAllItems(data)
        }
        getItems();
    }, [])
`]
                            }/>
                            <h2 className="text-2xl">With then</h2>
                <Blog 
            code={[
`
        axiosPublic('/allitems')
        .then(res =>{
            setAllItems(res.data)
        })
`
]}/>
            </div>
        </div>
    );
};

export default WithAxiosHook;