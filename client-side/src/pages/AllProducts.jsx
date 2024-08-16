
import { useLoaderData } from 'react-router-dom';
import AddProduct from './AddProduct';


const AllProducts = () => {
  const allProducts = useLoaderData()
    return (
        <>
        <div className='text-3xl my-12'>{allProducts.products.length}</div>
            {
                allProducts.products.map((product, index) => <AddProduct key={index} product={product} index={index}></AddProduct>)
            }
        </>
    );
};

export default AllProducts;