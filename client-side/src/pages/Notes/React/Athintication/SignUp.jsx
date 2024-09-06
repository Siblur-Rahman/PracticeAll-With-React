import Blog from "../../../../shared/Blog";

const SignUp = () => {
    return (
        <div className='topic'>
            <Blog
            topic={'SignUp Page'}
            />
            {/* <Blog
            topic={'Password'}
            /> */}
            <Blog
            topic={'password strength regax javascript'}
            time={'66-6 1:28'}
            url={'https://stackoverflow.com/questions/12090077/javascript-regular-expression-password-validation-having-special-characters'}
            />
        </div>
    );
};

export default SignUp;