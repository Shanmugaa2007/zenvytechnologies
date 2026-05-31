import AboutUs from "./Components/About/AboutUs";
import BackToHome from "./Components/Backtohome/backtohome";
import Contact from "./Components/Contact/Contact";
import FeedbackPage from "./Components/Feedback/FeedBackPage";
import Footer from "./Components/Footer/Footer";
import Founders from "./Components/Founder/Founders";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/navbar";
import Services from "./Components/Service/Our Services";
import ProjectsStats from "./Components/Project/Projects";

function UserIndex () {
    return (
        <>
        <Navbar/>
        <Home/>
        <AboutUs/>
        <Services/>
        <ProjectsStats/>
        <FeedbackPage/>
        <Contact/>
        <Footer/>
        <BackToHome/>
        </>
    )
}

export default UserIndex;
