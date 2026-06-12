import { createRoot } from 'react-dom/client'
import { RouterProvider,createBrowserRouter } from 'react-router-dom'
import './index.css'
import UserIndex from './UserIndex'
import Founders from '../src/Components/Founder/Founders'
import GotoRegister from '../src/Pages/gotoregister/gotoRegister'
import StudentRegister from '../src/Pages/Register/StudentRegistration'
import UserRegistration from '../src/Pages/Register/otherUsersregistration'
import Login from '../src/Pages/Login/Login'
import VisionMission from './Components/About/Vision&Mission'
import WebDevelopment from './Components/Service/wedevelopment'
import ServiceDetails from './Components/Service/servicedetails'
import RootLayout from './RootLayout'
import Consultation from './Components/Service/Freeconsultation'
import IsoContact from './Components/Contact/isolatedcontact'
import WebPortfolio from './Components/Service/portfolio/webdevelopportfolio'
import GraphicsPortfolio from './Components/Service/portfolio/GraphicsPortfolio'
import DigitalMarketingPortfolio from './Components/Service/portfolio/DigitalMarketingPortfolio'
import PortfolioSamples from './Components/Service/samples/portfoliosamples'
import ResumeSamples from './Components/Service/samples/ResumeSamples'
import UIUXPortfolio from './Components/Service/portfolio/UiUXportfolio'
import UIDesign from './Components/Service/Ui&Uxdesign'
import GraphicsDesign from './Components/Service/graphicsdesign'
import DigitalMarketing from './Components/Service/digitalmarketing'
import MaintenanceSupport from './Components/Maintenance&Support/Maintenance&support'
import SoftwarePortfolio from './Components/Service/portfolio/SoftwarePortfolio'


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
    path:'/contact-zenvyteam',
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
    path:'/service-webdevelopment',
    element:<WebDevelopment/>
  },
  {
    path:'/service-uiuxdesign',
    element:<UIDesign/>
  },
  {
    path:'/service-graphicsdesign',
    element:<GraphicsDesign/>
  },
  {
    path:'/service-digitalmarketing',
    element:<DigitalMarketing/>
  },
  {
    path:'/services/:slug',
    element:<ServiceDetails/>
  },
  {
    path:'/zenvytech-maintenance&support',
    element:<MaintenanceSupport/>
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
  },
  {
    path:'/portfoliosamples',
    element:<PortfolioSamples/>
  },
  {
    path:'/resumesamples',
    element:<ResumeSamples/>
  },
  {
    path:'/uiuxportfolio',
    element:<UIUXPortfolio/>
  },
  {
    path:'/softwaredevelopment-portfolio',
    element:<SoftwarePortfolio/>
  }
  ]}

]);

createRoot(document.getElementById('root')).render(
    <RouterProvider router={router}/>
)
