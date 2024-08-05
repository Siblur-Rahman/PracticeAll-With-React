import { Outlet } from "react-router-dom";
import Header from "../shared/Header";
import ArrayLeftbar from "../pages/Javascript/ArrayLeftbar";

const Javascript = () => {
    return (
        <>
        <Header/>
        {/* sideber */}
        <div className="leftBar bg-yellow-700 min-h-[calc(100vh-200px)] p-5">
            <ArrayLeftbar/>
        </div>
            {/* outlet */}
            <div className="content">
            <Outlet/>
            </div>
        </>
    );
};

export default Javascript;