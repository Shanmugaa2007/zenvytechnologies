import AboutUs from "./AboutUs";
import BackToHome from "./backtohome";
import Contact from "./Contact";
import FeedbackPage from "./FeedBackPage";
import Footer from "./Footer";
import Founders from "./Founders";
import Home from "./Home";
import Navbar from "./navbar";
import Services from "./Our Services";
import ProjectsStats from "./Projects";

function UserIndex () {
    return (
        <>
        <Navbar/>
        <Home/>
        <AboutUs/>
        <Services/>
        <ProjectsStats/>
        <Founders/>
        <FeedbackPage/>
        <Contact/>
        <Footer/>
        <BackToHome/>
        </>
    )
}

export default UserIndex;