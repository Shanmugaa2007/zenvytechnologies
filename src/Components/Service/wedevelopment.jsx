import Footer from "../Footer/Footer";
import Navbar from "../Navbar/navbar";
import { useNavigate } from "react-router-dom";
import "./webdevelopment.css";

function WebDevelopment() {

    const navigate = useNavigate();

    const Clickfun = ()=>{
        navigate('/zenvytechnologies-freeconsultation')
    }
    const Contactfun = ()=>{
        navigate('/contact-zenvyteam')
    }

  return (
    <>
    <Navbar/>
    <div className="servicewebdev-page">

      {/* Hero Section */}
      <section className="servicewebdev-hero">
        <div className="servicehero-content">
          <span className="service-badge">Zenvy Technologies</span>

          <h1>
            Modern <span>Web Development</span>
          </h1>

          <p>
            We build fast, scalable, secure, and user-friendly websites
            that help businesses grow, improve customer engagement,
            and increase revenue.
          </p>

          <div className="servicehero-buttons">
            <button className="serviceprimary-btn" onClick={Clickfun}>
              Get Free Consultation
            </button>

            <button className="servicesecondary-btn" onClick={()=>{navigate('/webdevelopment-portfolio')}}>
              View Portfolio
            </button>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="servicewebdev-section">
        <div className="servicesection-header">
          <h2>What We Offer</h2>
          <p>
            End-to-end web development services tailored for startups,
            businesses, and enterprises.
          </p>
        </div>

        <div className="services-grid">

          <div className="service-card">
            <i className="fa-solid fa-laptop-code"></i>
            <h3>Custom Websites</h3>
            <p>
              Professional business websites built with modern technologies.
            </p>
          </div>

          <div className="service-card">
            <i className="fa-solid fa-cart-shopping"></i>
            <h3>E-Commerce Solutions</h3>
            <p>
              Online stores with payment integration and product management.
            </p>
          </div>

          <div className="service-card">
            <i className="fa-solid fa-layer-group"></i>
            <h3>Web Applications</h3>
            <p>
              Powerful custom web applications for business operations.
            </p>
          </div>

          <div className="service-card">
            <i className="fa-solid fa-mobile-screen-button"></i>
            <h3>Responsive Design</h3>
            <p>
              Perfect experience across desktop, tablet, and mobile devices.
            </p>
          </div>

          <div className="service-card">
            <i className="fa-solid fa-shield-halved"></i>
            <h3>Secure Development</h3>
            <p>
              Security-focused architecture and best development practices.
            </p>
          </div>

          <div className="service-card">
            <i className="fa-solid fa-gauge-high"></i>
            <h3>Performance Optimization</h3>
            <p>
              Fast loading websites optimized for SEO and conversions.
            </p>
          </div>

        </div>
      </section>

      {/* Technologies */}
      <section className="servicetechnology-section">

        <div className="servicesection-header">
          <h2>Technologies We Use</h2>
        </div>

        <div className="servicetech-grid">
          <span>React JS</span>
          <span>Node JS</span>
          <span>Express JS</span>
          <span>MongoDB</span>
          <span>MySQL</span>
          <span>JavaScript</span>
          <span>HTML5</span>
          <span>CSS3</span>
          <span>Bootstrap</span>
          <span>REST API</span>
        </div>

      </section>

      {/* Process */}
      <section className="serviceprocess-section">

        <div className="servicesection-header">
          <h2>Our Development Process</h2>
        </div>

        <div className="serviceprocess-grid">

          <div className="serviceprocess-card">
            <span>01</span>
            <h3>Requirement Analysis</h3>
          </div>

          <div className="serviceprocess-card">
            <span>02</span>
            <h3>UI / UX Design</h3>
          </div>

          <div className="serviceprocess-card">
            <span>03</span>
            <h3>Development</h3>
          </div>

          <div className="serviceprocess-card">
            <span>04</span>
            <h3>Testing & Deployment</h3>
          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="servicecta-section">

        <h2>Ready to Build Your Website?</h2>

        <p>
          Let's transform your idea into a powerful digital solution.
        </p>

        <button onClick={Contactfun}>
          Start Your Project
        </button>

      </section>

    </div>
    <Footer/>
    </>
  );
}

export default WebDevelopment;