import AboutUs from "./AboutUs";
import Contact from "./Contact";
import FeedbackPage from "./FeedBackPage";
import Founders from "./Founders";
import Home from "./Home";
import Navbar from "./navbar";
import Services from "./Our Services";
import ProjectsStats from "./Projects";
import React from 'react';

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
        </>
    )
}

export default UserIndex;