import Footer from "../Footer/Footer";
import Founders from "../Founder/Founders";
import Navbar from "../Navbar/navbar";
import "./visionmission.css";

function VisionMission() {
  return (
    <>
        <Navbar/>
        <div className="about-us" id="about">
                    <h1 className="abouthead" style={{paddingLeft:"5%"}}>About Us</h1>
                    <div className="aboutpdiv">
                        <p className="paras">A clean, high-tech website design.
                            At <strong>Zenvy Technology</strong> and IT Solutions, we don’t just provide services; we build the future. Born from a passion for digital excellence, we bridge the gap between complex challenges and elegant solutions. Whether it’s architecting robust software, crafting cinematic video content, or empowering careers through professional resume building, our mission is simple: To turn your boldest ideas into scalable innovation.
                            We believe that in a digital-first world, your brand deserves more than just a presence—it deserves an edge. From the first line of code to the final sales pitch, Zenvy is your dedicated partner in growth.</p>
                    </div>
                </div>
            <section className="vm-section">

            <div className="vm-header">
                <h1>Vision & Mission</h1>
                <p>
                At Zenvy Technologies, our vision and mission guide every
                innovation, solution, and partnership we build.
                </p>
            </div>

            <div className="vm-container">

                <div className="vm-card vision-card">
                <div className="vm-icon">
                    <i className="fa-solid fa-eye"></i>
                </div>

                <h2>Our Vision</h2>

                <h3>
                    Empowering businesses through innovative technology.
                </h3>

                <ul>
                    <li>Become a globally trusted technology company.</li>
                    <li>Empower businesses with smart digital solutions.</li>
                    <li>Create world-class software products from India.</li>
                    <li>Transform ideas into impactful digital experiences.</li>
                    <li>Shape the future through technology and AI.</li>
                </ul>
                </div>

                <div className="vm-card mission-card">
                <div className="vm-icon">
                    <i className="fa-solid fa-bullseye"></i>
                </div>

                <h2>Our Mission</h2>

                <h3>
                    Building reliable digital solutions that drive growth and success.
                </h3>

                <ul>
                    <li>Deliver innovative and scalable software solutions.</li>
                    <li>Solve real business challenges through technology.</li>
                    <li>Create smart digital products and services.</li>
                    <li>Build world-class solutions for global businesses.</li>
                    <li>Transform ideas into impactful innovations.</li>
                </ul>
                </div>

            </div>

        </section>
        <Founders/>
        <Footer/>c
    </>
  );
}

export default VisionMission;