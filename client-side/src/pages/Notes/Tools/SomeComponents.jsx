import Blog from "../../../shared/Blog";
import { handleToggleDesplay } from "../../../shared/CommonJS";


const SomeComponents = () => {
    return (
        <div className="topic-border">
            <Blog
                id={'some components'}
            />

            
<button onClick={handleToggleDesplay} className="btn btn-outline text-red-600 text-2xl">Function Code</button>
<div className="hidden">
            <Blog code={`
const handleToggleDesplay =(e)=>{
  e.target.nextElementSibling.classList.toggle('hidden')
}`}/>
            <Blog code={`
const handleToggleDesplay =(e)=>{
  e.target.nextElementSibling.classList.toggle('hidden')
}`}/>
</div>
            <Blog
            topic={'handleToggleDesplay'}
                code={`
<button onClick={handleToggleDesplay} className="btn btn-outline text-red-600 text-2xl">Code</button>
<div className="hidden">
            <Blog code={}/>
</div>
                    `}            
            />
        </div>
    );
};

export default SomeComponents;