import Blog from "../../../../components/Blog";

const Icon = () => {
    return (
        <div>
            <Blog
            topic={'Icons'}
            url={'https://react-icons.github.io/react-icons'}
            npmCode={'npm install react-icons --save'}
            />
            <Blog
            topic={'Shopping Cart'}
            code={`
import { FaShoppingCart } from "react-icons/fa";
<FaShoppingCart />
            `}
            />
        </div>
    );
};

export default Icon;