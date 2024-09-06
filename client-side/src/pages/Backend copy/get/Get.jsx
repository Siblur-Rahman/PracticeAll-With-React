import WithAxios from "./WithAxios";
import WithFetch from "./WithFetch";

const Get = () => {
    return (
        <div>
            <WithFetch/>
            <WithAxios></WithAxios>
        </div>
    );
};

export default Get;