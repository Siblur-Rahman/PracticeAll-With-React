// import useGetData from "../../../hooks/useGetData";
import CustomHook from "./CustomHook";
import HookUseEffect from "./HookUseEffect";
import HookUseSatate from "./HookUseSatate";

const Hooks = () => {
    // const [getData] =useGetData('hooks.json');
    // console.log(getData)
    return (
        <div>
            <CustomHook/>
            <HookUseSatate/>
            <HookUseEffect/>
        </div>
    );
};

export default Hooks;