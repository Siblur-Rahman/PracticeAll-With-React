import Blog from "../../../components/Blog";

const DisplaySymbol = () => {
    const displaySymbol_1 =`
    //Doller 
    <span className="text-amber-300">$</span>
     //CurlyBraket Open 
    <span className="text-blue-500">{'{'}</span> port
    // CurlyBraket Close 
    <span className="text-blue-500">{'}'}</span>`
    const displaySymbol_2 ='    <span className="text-amber-300">`</span>'
    return (
        <div className="topic-border">
        <Blog id={'DisplaySymbol'}/>
        <pre className="code">
            {displaySymbol_1}
            <br />
            {displaySymbol_2}
        </pre>
        </div>
    );
};

export default DisplaySymbol;