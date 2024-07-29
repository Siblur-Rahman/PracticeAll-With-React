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
const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/register',
        element: <Register />,
      },
      {
        path: '/password',
        element: <PasswordInput/>,
      },
     
      // CRUD Oparetion
      {
        path:'/post',
        element:<AddItem/>
      },
      {
        path: '/allitems',
        element: (
            <AllItems />
        ),
        loader:() =>  fetch(`${import.meta.env.VITE_API_URL}/approveitems`),
      },
      {
        path:'/MyPostedItems/:email',
        element:<MyPostedItems/>,
        // loader:({params}) =>  fetch(`${import.meta.env.VITE_API_URL}/items/${params.email}`),
        
      },
      {
        path:'/itemDetails/:id',
        element:<ItemDetails/>
      },
      {
        path:'/updateitem/:id',
        element:<UpdateItem/>
      },
      {
        path:'mywishlist',
        element: <MyWishList/>
      }
    ],
  },
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
])

export default router
