
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const BackendLeftbar = () => {
  const {pathname} = useLocation();
    const links =[
        {
            title:'Get',
            path:'/backend/get',
            sub:{
                title:['with Fetch', 'with axios', 'with axios Hook', 'with Custom Hook'],
            }
        },
        {
            title:'Post',
            path:'/backend/post',
            sub:{
                title:['with Fetch', 'with axios', 'with axios Hook', 'with Custom Hook'],
            }
        },
        {
            title:'Put',
            path:'/backend/put',
        },
        {
            title:'Patch',
            path:'/backend/patch',
        },
    ]
    return (
        <>
            {
                links?.map((link, index) => <> <Link key={index} to={link.path} className={`text-xl px-2 ${pathname === link.path && 'bg-red-500 text-white'}`}>{link.title}</Link>
                <ul className={`pl-3  ${pathname === link.path? 'static':'hidden'}`}>
                {link?.sub?.title.map((subItem, ind) => <li key={ind}><a  href={`#${subItem}`} className="link">{subItem}</a></li>)}
                </ul>
                </>
                )
            }

        </>
    );
};

export default BackendLeftbar;