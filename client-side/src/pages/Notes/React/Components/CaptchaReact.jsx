import Blog from "../../../../shared/Blog";

const CaptchaReact = () => {
    return (
        <div>
            <Blog
                topic={'Captcha'}
                url={"https://www.npmjs.com/package/react-simple-captcha"}
                time={"66-2 00:00)"}
                npmCode={"npm install --save react-google-recaptcha"}
            />

            <Blog
                code={`
    const [disabled, setDisabled] = useState(true);

    const handleValidateCaptcha = (e) => {
        const user_captcha_value = e.target.value;
        if (validateCaptcha(user_captcha_value)) {
            setDisabled(false);
        }
        else {
            setDisabled(true)
        }
    }
                `}
            />
            <Blog
            code={`
<div className="form-control">
    <label className="label">
            `}
            />
            <Blog
            mark={`
        <LoadCanvasTemplate />
            `}
            />
            <Blog
            code={`
    </label>
    <input onBlur={handleValidateCaptcha} 
    type="text" 
    name="captcha" 
    placeholder="type the captcha above" 
    className="input input-bordered" />

</div>
<div className="form-control mt-6">
    <input disabled={disabled} 
    className="btn btn-primary" 
    type="submit" value="Login" />
</div>
            `}
            />
        </div>
    );
};

export default CaptchaReact;