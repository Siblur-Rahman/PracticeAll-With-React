
import { useLoaderData } from 'react-router-dom';
import Item from '../components/Item';

const AllItems = () => {
  const approveItems = useLoaderData()
    return (
        <>
            {
                approveItems.map(item => <Item key={item._id} item={item}></Item>)
            }
        </>
    );
};

export default AllItems;