import Blog from "../../../../components/Blog";

const Payment = () => {
    return (
        <div className='topic'>
            <Blog
            topic={'Payment'}
            />
            <Blog
            topic={'Stripe'}
            time={'70-2'}
            url={'https://github.com/stripe/react-stripe-js'}
            npmCode={'npm install @stripe/react-stripe-js @stripe/stripe-js'}
            />
        </div>
    );
};

export default Payment;