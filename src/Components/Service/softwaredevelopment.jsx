import Navbar from "../Navbar/navbar";
import Footer from "../Footer/Footer";
import { useNavigate } from "react-router-dom";
import "./softwaredevelopment.css";

function SoftwareDevelopment() {
  const navigate = useNavigate();

  const Clickfun = () => {
    navigate("/zenvytechnologies-freeconsultation");
  };

  const Contactfun = () => {
    navigate("/contact-zenvyteam");
  };

  return (
    <>
      <Navbar />

      <div className="software-page">

        {/* Hero Section */}
        <section className="software-hero">
          <div className="software-hero-content">

            <span className="software-badge">
              Zenvy Technologies
            </span>

            <h1>
              Custom <span>Software Development</span> Services
            </h1>

            <p>
              We build secure, scalable, and high-performance software solutions
              that help businesses automate operations, improve efficiency, and
              grow faster in the digital world.
            </p>

            <div className="software-buttons">
              <button className="software-primary-btn" onClick={Clickfun}>
                Get Free Consultation
              </button>

              <button className="software-secondary-btn" onClick={()=>navigate('/softwaredevelopment-portfolio')}>
                View Portfolio
              </button>
            </div>

          </div>
        </section>

        {/* Services */}
        <section className="software-services-section">

          <div className="software-section-header">
            <h2>Our Software Development Services</h2>
            <p>
              End-to-end software solutions designed for startups, businesses,
              and growing enterprises.
            </p>
          </div>

          <div className="software-services-grid">

            <div className="software-service-card">
              <i className="fa-solid fa-laptop-code"></i>
              <h3>Custom Software Development</h3>
              <p>
                Tailor-made software solutions built according to your unique
                business goals and workflow.
              </p>
            </div>

            <div className="software-service-card">
              <i className="fa-solid fa-globe"></i>
              <h3>Web Application Development</h3>
              <p>
                Modern, responsive, and powerful web applications for business,
                education, healthcare, ecommerce, and more.
              </p>
            </div>

            <div className="software-service-card">
              <i className="fa-solid fa-mobile-screen-button"></i>
              <h3>Mobile App Development</h3>
              <p>
                User-friendly Android and iOS mobile applications with smooth
                performance and clean UI.
              </p>
            </div>

            <div className="software-service-card">
              <i className="fa-solid fa-database"></i>
              <h3>Database Management</h3>
              <p>
                Secure and well-structured database solutions for storing,
                managing, and accessing business data.
              </p>
            </div>

            <div className="software-service-card">
              <i className="fa-solid fa-cloud"></i>
              <h3>Cloud-Based Solutions</h3>
              <p>
                Scalable cloud applications and deployment solutions to keep
                your business running smoothly.
              </p>
            </div>

            <div className="software-service-card">
              <i className="fa-solid fa-shield-halved"></i>
              <h3>Software Maintenance</h3>
              <p>
                Continuous support, bug fixing, performance optimization, and
                feature upgrades for your software.
              </p>
            </div>

          </div>
        </section>

        {/* Technologies */}
        <section className="software-tools-section">

          <div className="software-section-header">
            <h2>Technologies We Use</h2>
          </div>

          <div className="software-tools-grid">
            <span>React JS</span>
            <span>Node JS</span>
            <span>Python</span>
            <span>Java</span>
            <span>PHP</span>
            <span>MySQL</span>
            <span>MongoDB</span>
            <span>Firebase</span>
          </div>

        </section>

        {/* Process */}
        <section className="software-process-section">

          <div className="software-section-header">
            <h2>Our Development Process</h2>
          </div>

          <div className="software-process-grid">

            <div className="software-process-card">
              <span>01</span>
              <h3>Requirement Analysis</h3>
            </div>

            <div className="software-process-card">
              <span>02</span>
              <h3>UI/UX & Planning</h3>
            </div>

            <div className="software-process-card">
              <span>03</span>
              <h3>Development & Testing</h3>
            </div>

            <div className="software-process-card">
              <span>04</span>
              <h3>Deployment & Support</h3>
            </div>

          </div>

        </section>

        {/* CTA */}
        <section className="software-cta-section">

          <h2>Ready To Build Your Software?</h2>

          <p>
            Let our expert development team turn your business idea into a
            powerful digital solution.
          </p>

          <button onClick={Contactfun}>
            Start Your Software Project
          </button>

        </section>

      </div>

      <Footer />
    </>
  );
}

export default SoftwareDevelopment;