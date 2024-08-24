import Blog from "../../../../components/Blog";

const Axios = () => {
    return (
        <div className="topic-border p-10px">
            <Blog
            topic={'Axios'}
            npmCode={'npm install axios'}
            url={'https://axios-http.com/docs/intro'}
            />
            <Blog 
            topic={'Axios Instance'}
            time={'68-1 7:45'}
            url={'https://axios-http.com/docs/instance'}
            code={`
import axios from "axios";

const axiosPublic = axios.create({
baseURL: import.meta.env.VITE_API_URL
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

export default Axios;