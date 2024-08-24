import { createBrowserRouter } from 'react-router-dom'
import Main from '../layouts/Main'
import Home from '../pages/Home'
import Login from '../pages/Authentication/Login'
import Register from '../pages/Authentication/Register'
import ErrorPage from '../pages/ErrorPage'
import ItemDetails from '../pages/ItemDetails'
import MyPostedItems from '../pages/MyPostedItems'
import AddItem from '../pages/AddItem'
import UpdateItem from '../pages/UpdateItem'
import AllItems from '../pages/AllItems'
import MyWishList from '../pages/MyWishList'
import Dashboard from '../layouts/Dashboard'
import Admin from '../dashboard/admin/Admin'
import ManageItems from '../dashboard/admin/ManageItems'
import PasswordInput from '../pages/PasswordInput'
import AllProducts from '../pages/AllProducts'
import Tools from './../pages/Notes/Tools/Tools';
import Javascript from '../pages/Javascript/Javascript';
import JavascriptLayout from '../layouts/JavascriptLayout';
import NotesLayout from '../layouts/notesLayout/NotesLayout'
import Notes from '../pages/Notes/Notes'
import ReactNote from '../pages/Notes/React/ReactNote'
import ReactLayout from '../layouts/ReactLayout'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/react',
        element: <ReactLayout />,
        children: [
          {
            path:'/react',
            element: <Home />,
          },
          {
            path: '/react/login',
            element: <Login />,
          },
          {
            path: '/react/register',
            element: <Register />,
          },
          {
            path: '/react/password',
            element: <PasswordInput/>,
          },
         
          // CRUD Oparetion
          {
            path:'/react/post',
            element:<AddItem/>
          },
          {
            path: '/react/allitems',
            element: (
                <AllItems />
            ),
            loader:() =>  fetch(`${import.meta.env.VITE_API_URL}/approveitems`),
          },
          
          {
            path:'/react/MyPostedItems/:email',
            element:<MyPostedItems/>,
            // loader:({params}) =>  fetch(`${import.meta.env.VITE_API_URL}/items/${params.email}`),
          },
    
    
    
          {
            path:'/react/itemDetails/:id',
            element:<ItemDetails/>
          },
          {
            path:'/react/updateitem/:id',
            element:<UpdateItem/>
          },
          {
            path:'/react/mywishlist',
            element: <MyWishList/>
          },
          
          {
            path: '/react/allproducts',
            element: (
                <AllProducts />
            ),
            loader:() =>  fetch('https://dummyjson.com/products?limit=40&skip=10&select=title,images,description,price,category,rating'),
          },
        ]
      },
     
      // Javascript
      {
        path:'/javascript',
        element:<JavascriptLayout/>,
        children:[
          {
            path:'/javascript',
            element:<Javascript/>
          }
        ]
      },
      // Notes Routes
      {
        path:'/notes',
        element:<NotesLayout/>,
        children:[
          {
            path:'/notes',
            element:<Notes/>
          },
          {
            path:'/notes/react',
            element:<ReactNote/>
          },
          {
            path:'/notes/tools',
            element:<Tools/>
          }
        ]
      },
       // Dashboard Routes
       {
        path:'/dashboard',
        element:<Dashboard/>,
        children:[
          {
            path:'/dashboard',
            element:<Admin/>
          },
          {
            path:'/dashboard/manageitems',
            element:<ManageItems/>
          }
        ]
      }  
    ]
  },
  // Practice Routes
  // {
  //   path: '/react',
  //   element: <ReactLayout />,
  //   children: [
  //     {
  //       path:'/react',
  //       element: <Home />,
  //     },
  //     {
  //       path: '/react/login',
  //       element: <Login />,
  //     },
  //     {
  //       path: '/react/register',
  //       element: <Register />,
  //     },
  //     {
  //       path: '/react/password',
  //       element: <PasswordInput/>,
  //     },
     
  //     // CRUD Oparetion
  //     {
  //       path:'/react/post',
  //       element:<AddItem/>
  //     },
  //     {
  //       path: '/react/allitems',
  //       element: (
  //           <AllItems />
  //       ),
  //       loader:() =>  fetch(`${import.meta.env.VITE_API_URL}/approveitems`),
  //     },
      
  //     {
  //       path:'/react/MyPostedItems/:email',
  //       element:<MyPostedItems/>,
  //       // loader:({params}) =>  fetch(`${import.meta.env.VITE_API_URL}/items/${params.email}`),
  //     },



  //     {
  //       path:'/react/itemDetails/:id',
  //       element:<ItemDetails/>
  //     },
  //     {
  //       path:'/react/updateitem/:id',
  //       element:<UpdateItem/>
  //     },
  //     {
  //       path:'/react/mywishlist',
  //       element: <MyWishList/>
  //     },
      
  //     {
  //       path: '/react/allproducts',
  //       element: (
  //           <AllProducts />
  //       ),
  //       loader:() =>  fetch('https://dummyjson.com/products?limit=40&skip=10&select=title,images,description,price,category,rating'),
  //     },
  //   ],
  // },
  // {
  //   path:'/dashboard',
  //   element:<Dashboard/>,
  //   children:[
  //     {
  //       path:'/dashboard',
  //       element:<Admin/>
  //     },
  //     {
  //       path:'/dashboard/manageitems',
  //       element:<ManageItems/>
  //     }
  //   ]
  // },
  // // Javascript
  // {
  //   path:'/javascript',
  //   element:<JavascriptLayout/>,
  //   children:[
  //     {
  //       path:'/javascript',
  //       element:<Javascript/>
  //     }
  //   ]
  // },
  // // Notes Routes
  // {
  //   path:'/notes',
  //   element:<NotesLayout/>,
  //   children:[
  //     {
  //       path:'/notes',
  //       element:<Notes/>
  //     },
  //     {
  //       path:'/notes/react',
  //       element:<ReactNote/>
  //     },
  //     {
  //       path:'/notes/tools',
  //       element:<Tools/>
  //     }
  //   ]
  // }
])

export default router
