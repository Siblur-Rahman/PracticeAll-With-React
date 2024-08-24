import { useEffect } from "react";
// import useGetData from "../../../hooks/useGetData";
import {Active, Accordion } from "../../shared/CommonJS"
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
const ReactPracticeLeftbar = () => {
    const {user} = useAuth()
    // const [getdata]=useGetData('toolsLeftbar.json');
    const links = [
        {
            title:'All Items',
            path:'/react/allitems'
        },
        {
            title:'My WishList',
            path:'/react/mywishlist'
        },
        {
            title:'Add/Post',
            path:'/react/post'
        },
        {
            title:'',
            path:`/react/MyPostedItems/${user?.email}`
        },
        {
            title:'',
            path:'/react/'
        },
    ]
    useEffect(() =>{
        Active();
        Accordion()
    })
    return (
        
        <>
        <ul className="flex-col px-2">
                {
                    links.map(link=><li key={link.title}><Link  to={`${link.path}`} className="link">{link.title}</Link></li>)
                }
        </ul>
        </>
    );
};

export default ReactPracticeLeftbar;