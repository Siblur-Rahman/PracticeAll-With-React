import Blog from "../../../../components/Blog";

const Form = () => {
    return (
        <div className="topic">
            <Blog
            topic={'Form'}
            />
            <Blog
            topic={'React Hook Form'}
            url={`https://react-hook-form.com`}
            time={'66-5 1:45, 69-2 10:00'}
            npmCode={'npm install react-hook-form'}
            />
            <h2>Some Form</h2>
            1. Formik
        </div>
    );
};

export default Form;