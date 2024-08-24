import ComponentsLeftbar from "./Components/ComponentsLeftbar";
import HooksLeftbar from "./reactHooks/HooksLeftbar";

const ReactLeftbar = () => {
    return (
        <div>
            <a href="#Theme" className="link">Theme</a>
            <ComponentsLeftbar/>
            <HooksLeftbar/>
        </div>
    );
};

export default ReactLeftbar;