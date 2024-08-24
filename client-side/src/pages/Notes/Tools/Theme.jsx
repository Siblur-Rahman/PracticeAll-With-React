import Blog from "../../../components/Blog";


const Theme = () => {
    return (
        <>
            <Blog
             topic={'Theme'}
             code={`
const [theme, setTheme] = useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : "light");
const handleToggle = (e) =>{
    if(e.target.checked){
        setTheme("dark");
    }else{
        setTheme("light")
    }
}
useEffect(()=>{
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", localTheme);
},[theme])
             `}
            />
            <h2 className="heading">We can use swap toggle Butto from <a href="https://daisyui.com/components/swap/" target="_blank">Here</a></h2>
        </>
    );
};

export default Theme;