import PropTypes from 'prop-types';



const Blog = ({id, topic,mark, fileName, npmCode, heading, define, defineWithIndex, url, video, time, code}) => {
    return (
        <>
        {mark && <h2 className='mark text-2xl'>{mark}</h2>}
        {id && <div><h2 className='id to_jump' id={id}>{id}</h2></div>}   
        {topic && <h2 className="red text-2xl to_jump" id={topic}>{topic}<span className="blue"> {time}
        </span>{url && <a href={url} target="_blank"> Detals</a>}</h2>}
        {
            heading && <h2 className='red text-2xl'>{heading}</h2>
        }
        {npmCode && <div className="npmCode my-10px">
           { fileName&& <p className='red'>{fileName}</p>}
            {npmCode}
            </div>}
        {define && <p>{define}</p>}
        <br />
        {
            defineWithIndex &&  defineWithIndex.map((item, index )=><p key={index}>{item}</p>)
        }
        {code && <pre className="code">
            {fileName && <p className='red'>{fileName}</p>}
            {code}
        </pre>
        }
        {video && <video src={video} controls width="90%" height="500px"></video>}
        </>
    );
};
Blog.propTypes = {
    defineWithIndex: PropTypes.array,
    // prop-2: PropTypes.func.isRequired
    }
export default Blog;