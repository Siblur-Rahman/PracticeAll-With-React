import { createBrowserRouter } from 'react-router-dom'
import Main from '../layouts/Main'
import Tools from './../pages/Notes/Tools/Tools';
import Javascript from '../pages/Javascript/Javascript';
import Notes from '../pages/Notes/Notes'
import Home from '../pages/Home'
import ErrorPage from '../pages/ErrorPage'
import ReactNote from '../pages/Notes/React/ReactNote';
import Login from '../pages/Authentication/Login';
import SignUp from '../pages/Authentication/SignUp';
import HowTo from '../pages/HowTo/HowTo';
import BackendNotes from '../pages/Notes/BackendNote/BackendNotes';
import Get from './../pages/HowTo/Data/get/Get';
import Post from './../pages/HowTo/Data/post/Post';
import Put from './../pages/HowTo/Data/put/Put';
import Patch from './../pages/HowTo/Data/patch/Patch';
import Calculate from '../pages/HowTo/Calculate/Calculate';
import Empty from '../shared/Empty';
import JavasctiptNotes from '../pages/Notes/Javascript/JavasctiptNotes';
import FolderNotes from '../pages/Notes/_folder/FolderNote';

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
      {
        path:'/login',
        element:<Login/>
      },
      {
        path:'/signup',
        element:<SignUp/>
      },
      {
        path:'/howto',
        element:<HowTo/>
      },
      // data
      {
        path:'/howto/get',
        element:<Get/>
      },
      {
        path:'/howto/post',
        element:<Post/>
      },
      {
        path:'/howto/put',
        element:<Put/>
      },
      {
        path:'/howto/patch',
        element:<Patch/>
      },
      {
        path:'/howto/calcutate',
        element:<Calculate/>
      },
      {
        path:'/howto/',
        element:<Empty/>
      },
      // Javascript
      {
        path:'/javascript',
        element:<Javascript/>,
      },


      // Notes Routes
      {
        path:'/notes',
        element:<Notes/>
      },
      {
        path:'/notes/react',
        element:<ReactNote/>
      },
      {
        path:'/notes/backend',
        element:<BackendNotes/>
      },
      {
        path:'/notes/javascript',
        element:<JavasctiptNotes/>
      },
      {
        path:'/notes/tools',
        element:<Tools/>
      },
      {
        path:'/notes/folder',
        element:<FolderNotes/>
      }
    ]
  }
])

export default router