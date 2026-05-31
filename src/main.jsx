import { createRoot } from 'react-dom/client'
import { RouterProvider,createBrowserRouter } from 'react-router-dom'
import './index.css'
import UserIndex from './UserIndex'
import Founders from '../src/Components/Founder/Founders'
import VisionMission from './Components/About/Vision&Mission'
import WebDevelopment from './Components/Service/wedevelopment'
import ServiceDetails from './Components/Service/servicedetails'
import RootLayout from './RootLayout'
import Consultation from './Components/Service/Freeconsultation'
import IsoContact from './Components/Contact/isolatedcontact'
import WebPortfolio from './Components/Service/portfolio/webdevelopportfolio'
import GraphicsPortfolio from './Components/Service/portfolio/GraphicsPortfolio'
import DigitalMarketingPortfolio from './Components/Service/portfolio/DigitalMarketingPortfolio'


const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children:[
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
    path : 'login',
    element : <Login/>
  },
  {
    path:'contact-zenvyteam',
    element:<IsoContact/>
  },
  {
    path : 'gotoregister/login',
    element : <Login/>
  },
  {
    path:'zenvytechnologies-aboutus',
    element:<VisionMission/>
  },
  {
    path:'service-webdevelopment',
    element:<WebDevelopment/>
  },
  {
    path:'/services/:slug',
    element:<ServiceDetails/>
  },
  {
    path:'/zenvytechnologies-freeconsultation',
    element:<Consultation/>
  },
  {
    path:'/webdevelopment-portfolio',
    element:<WebPortfolio/>
  },
  {
    path:'/graphicsdesign-portfolio',
    element:<GraphicsPortfolio/>
  },
  {
    path:'/digitalmarketing-portfolio',
    element:<DigitalMarketingPortfolio/>
  }
  ]}

]);

createRoot(document.getElementById('root')).render(
    <RouterProvider router={router}/>
)
