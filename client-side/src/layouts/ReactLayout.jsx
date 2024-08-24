import { Outlet } from "react-router-dom";
import Header from "../shared/Header";
import ReactPracticeLeftbar from "../pages/ReactPractices/ReactPracticeLeftbar";

const ReactLayout = () => {
    return (
        <>
        <Header/>
        {/* sideber */}
        <div className="leftBar min-h-[calc(100vh-200px)] p-5">
            <ReactPracticeLeftbar/>
        </div>
            {/* outlet */}
            <div className="">
            <Outlet/>
            </div>
        </>
    );
};

export default ReactLayout;