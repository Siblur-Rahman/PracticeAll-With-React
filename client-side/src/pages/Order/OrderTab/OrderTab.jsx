import FoodCard from "../../../components/FoodCard/FoodCard";


const OrderTab = ({items}) => {
    return (
        <div className="md:grid grid-cols-3 gap-5 mt-5">
        {
            items.map(item => <FoodCard
            key={item._id}
            item={item}
            />)
        }
        </div>
    );
};

export default OrderTab;