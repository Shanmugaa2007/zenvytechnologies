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
import Certificate from './InternCertificate'
import ProtectedRoute from './logout'
import InternIndex from './InternIndex'
import LearnWithUs from './learnwithus'
import Dashboard from './InternDashboard'
import ApplyNow from './Applynow'
import Payment from './Payment'
import TermsAndConditions from './terms&condition'
import RefundPolicy from './Refund Policy'
import SuccessPayment from './paymentsuccess'
import StartLearning from './pdflearning'



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
    path:'certificate',
    element:<Certificate/>
  },
  {
    path:'logout',
    element:<ProtectedRoute/>
  },
  {
    path:'internship',
    element:<InternIndex/>
  },
  {
    path:'learnwithus',
    element:<LearnWithUs/>
  },
  {
    path:'dashboard',
    element:<Dashboard/>
  },
  {
    path:'applynow',
    element:<ApplyNow/>
  },
  {
    path:'applynow/:id',
    element:<ApplyNow/>
  },
  {
    path:'payment',
    element:<Payment/>
  },{
    path:'terms&conditions',
    element:<TermsAndConditions/>
  },
  {
    path:'refundpolicy',
    element:<RefundPolicy/>
  },
  {
    path:'success-payment',
    element:<SuccessPayment/>
  },
  {
  path:'startlearn',
  element:<StartLearning/>
  }

]);

createRoot(document.getElementById('root')).render(
    <RouterProvider router={router}/>
)
