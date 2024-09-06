import Blog from '../../../../shared/Blog';

const JWToken = () => {
    return (
        <div className="topic-border">
            <Blog
            topic={'JSON Web Token (JWT)'}
            fileName={'index.js'}
            npmCode={'npm install jsonwebtoken'}
            time={'csm-11-last 41:00 p-2 & 1:13:26, 68-6, 7'}
            url={'https://github.com/auth0/node-jsonwebtoken'}
            code={`const jwt = require('jsonwebtoken');`}
            />
            <Blog
            topic={'secret creation'}
            time={'68-6 8:00'}
            />
        </div>
    );
};

export default JWToken;