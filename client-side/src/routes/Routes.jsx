import { createBrowserRouter } from 'react-router-dom'
import Main from '../layouts/Main'
import Tools from './../pages/Notes/Tools/Tools';
import Javascript from '../pages/Javascript/Javascript';
import Notes from '../pages/Notes/Notes'
import Home from '../pages/Home'
import ErrorPage from '../pages/ErrorPage'
import Backend from '../pages/Backend/Backend';
import Get from './../pages/Backend/get/Get';
import Post from './../pages/Backend/post/Post';
import Put from './../pages/Backend/put/Put';
import Patch from './../pages/Backend/patch/Patch';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path:'/',
        element:<Home/>
      },
      
      // Backend
      // crud operation
      {
        path:'/backend/',
        element:<Backend/>
      },
      {
        path:'/backend/get',
        element:<Get/>
      },
      {
        path:'/backend/post',
        element:<Post/>
      },
      {
        path:'/backend/put',
        element:<Put/>
      },
      {
        path:'/backend/patch',
        element:<Patch/>
      },
      // Javascript
      {
        path:'/prac_javascript',
        element:<Javascript/>,
      },


      // Notes Routes
      {
        path:'/notes',
        element:<Notes/>
      },
      {
        path:'/notes/tools',
        element:<Tools/>
      }
    ]
  }
])

export default router