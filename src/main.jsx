import { createRoot } from 'react-dom/client'
import { RouterProvider,createBrowserRouter } from 'react-router-dom'
import './index.css'
import UserIndex from './UserIndex'
import Founders from './Founders'
import GotoRegister from './gotoRegister'
import StudentRegister from './StudentRegistration'
import UserRegistration from './otherUsersregistration'
import Login from './Login'
import PrivacyPolicy from './privacypolicy'
import OfferLetter from './offerletter'



const router = createBrowserRouter([
  {
    path : '/',
    element :
        <UserIndex />
  },
  {
    path : 'founders',
    element : <Founders/>
  },
  {
    path : 'gotoregister',
    element : <GotoRegister/>
  },
  {
    path : 'gotoregister/studentregister',
    element : <StudentRegister/>
  },
  {
    path : 'gotoregister/userregister',
    element : <UserRegistration/>
  },
  {
    path : 'login',
    element : <Login/>
  },
  {
    path : 'gotoregister/login',
    element : <Login/>
  },
  {
    path: 'privacypolicy',
    element: <PrivacyPolicy/>
  },
  {
    path:'offerletter',
    element:<OfferLetter/>
  }
]);

createRoot(document.getElementById('root')).render(
    <RouterProvider router={router}/>
)
