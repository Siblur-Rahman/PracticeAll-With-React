import FlickrAPIPart1 from './ToolsVideos/ReactProgramming_FlickrAPIPart1.mp4'
const image =   
 `import name from 'pathinfo'
   
<img src={name} alt="">`
const Images =()=>{
    return(
        <div id='Images' className='mt-5px to_jum'>
            <h2 className='center'>Image</h2>
            <pre className="code">
                {image}
            </pre>
            <h3 className="heading">Picture Loading WebSite</h3>
            <div className="code">
                https://imgbb.com //My registard wibsite
            </div>
            <h2>ReactProgramming_FlickrAPIPart1</h2>
             <video width="100%" controls >
            <source src={FlickrAPIPart1} type="video/mp4"/>
            </video>
        </div>
    );
}
export default Images;