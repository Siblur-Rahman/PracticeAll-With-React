import Blog from "../../../../components/Blog";

const Cookie = () => {
    return (
        <div className="topic-border">
            <Blog
            fileName={'server-index.js'}
            topic={'Cookie'}
            url={'https://www.npmjs.com/package/cookie-parser'}
            npmCode={'npm install cookie-parser'}
            />
        </div>
    );
};

export default Cookie;