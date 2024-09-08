
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const HowToLeftbar = () => {
  const {pathname} = useLocation();
    const links =[
        {
            header:'Data',
            title:"Get",
            path:'/howto/get',
            sub:{
                sub_title:['with Fetch', 'with axios', 'with axios Hook', 'with Custom Hook'],
        },
    },
    {
        header:'Calculate',
        title:"Price",
        path:'/howto/calcutate',
        sub:{
            sub_title:['On Cart'],
            }
    }
    ]
    return (
        <div className='mt-5'>
            {
                links?.map((link, index) => <> 
                <h2 className="text-2xl sidebarHeading">{link?.header}</h2>
                <Link to={link.path} className={`text-xl px-2 ${pathname === link.path && 'bg-red-500 text-white'}`}>{link.title}</Link>
                <ul className={`pl-3  ${pathname === link.path? 'static':'hidden'}`}>
                {link?.sub?.sub_title.map((subItem, ind) => <li key={ind}><a  href={`#${subItem}`} className="link">{subItem}</a></li>)}
                </ul>
                </>
                )
            }

        </div>
    );
};

export default HowToLeftbar;