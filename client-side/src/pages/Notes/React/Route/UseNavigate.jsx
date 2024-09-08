import Blog from "../../../../shared/Blog";


const UseNavigate = () => {
    return (
        <>
        <Blog
            id={'useNavitate'}
            fileName={'msrRestaurant Project: FoodCart.jsx'}
            code={
    `
    import { useLocation, useNavigate } from 'react-router-dom';
    let location = useLocation();
    navigate("/login", { state: { from: location }});
    `
            }
            />
            <Blog
            fileName={'Login.jsx'}
            code={
    `
   import {useLocation, useNavigate } from 'react-router-dom';
    const navigate = useNavigate();
    const location = useLocation()
    
    const from = location.state?.from?.pathname || "/";
    navigate(from, { replace: true });
    `
            }
            />
            
        </>
    );
};

export default UseNavigate;