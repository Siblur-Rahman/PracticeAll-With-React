// import { useContext, useEffect } from "react";
import {useEffect } from "react";
// import { ToolsForCode } from "../../CodeProvider";
import {Active}  from "../../../shared/CommonJS";
import ToolsLeftbar from "./ToolsLeftbar";
import PageSetup from "./PageSetup";
import Images from "./Images"
import Theme from "./Theme";
import GitGitHub from "./GitGitHub/GitGitHub";
import IndexPH from './indexPH/IndexPH';
import KeyboardShort from "./KeyBoardShortcut/KeyboardShort";
import DisplaySymbol from "./DisplaySymbol";
import Assignments from "./indexPH/Assignments";
const Tools = () => {
    // const {curlyBraceOpen, curlyBraceClosed, greaterThan,
    //     lessThan} = useContext(ToolsForCode)
        useEffect(() =>{
            Active();
        })
    return (
        <>   
        <div>
            <DisplaySymbol/>
           <PageSetup/>
           <Theme/>
           <Images/>
           <IndexPH/>
           <GitGitHub/>
           <KeyboardShort/>
           <Assignments/>
        </div>    
        </>
    );
};

export default Tools;