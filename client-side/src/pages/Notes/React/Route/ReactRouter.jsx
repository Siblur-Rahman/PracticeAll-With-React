import Blog from "../../../../shared/Blog";

const ReactRouter = () => {
    return (
        <div>
            <Blog topic={'React Router'} url={'https://reactrouter.com/en/main'}/>
            <Blog
            id={'useNavigate'}
            topic={'useNavigate React-Router'}
            fileName={'msrRestaurant Project: FoodCart.jsx'}
            />
        </div>
    );
};

export default ReactRouter;