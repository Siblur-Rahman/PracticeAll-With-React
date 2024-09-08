
import Blog from './../../../../shared/Blog';
const Condition = () => {
    return (
        <div className="topic-border">
            <Blog
                topic={'Class add on Odd number'}
                codes={[codes?.map((code, index) =><div className={`${index%2 && 'code-highlight' }`}>{code}</div>)]}
            />
        </div>
    );
};

export default Condition;