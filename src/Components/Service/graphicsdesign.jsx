import Navbar from "../Navbar/navbar";
import Footer from "../Footer/Footer";
import { useNavigate } from "react-router-dom";
import "./graphicsdesign.css";

function GraphicsDesign() {

    const navigate = useNavigate();

    const Clickfun = ()=>{
        navigate('/zenvytechnologies-freeconsultation')
    }
    const Contactfun = ()=>{
        navigate('/contact-zenvyteam')
    }

  return (
    <>
      <Navbar />

      <div className="graphics-page">

        {/* Hero Section */}
        <section className="graphics-hero">

          <div className="graphics-hero-content">

            <span className="graphics-badge">
              Zenvy Technologies
            </span>

            <h1>
              Creative <span>Graphic Design</span> Solutions
            </h1>

            <p>
              We create visually stunning designs that strengthen your
              brand identity, attract customers, and leave a lasting
              impression across digital and print platforms.
            </p>

            <div className="graphics-buttons">
              <button className="graphics-primary-btn" onClick={Clickfun}>
                Get Free Consultation
              </button>

              <button className="graphics-secondary-btn" onClick={()=>{
                navigate('/graphicsdesign-portfolio')
              }}>
                View Portfolio
              </button>
            </div>

          </div>

        </section>

        {/* Services */}

        <section className="graphics-services-section">

          <div className="graphics-section-header">
            <h2>Our Design Services</h2>

            <p>
              Professional graphic design solutions tailored for startups,
              businesses, and enterprises.
            </p>
          </div>

          <div className="graphics-services-grid">

            <div className="graphics-service-card">
              <i className="fa-solid fa-pen-nib"></i>
              <h3>Logo Design</h3>
              <p>
                Unique and memorable logos that define your brand identity.
              </p>
            </div>

            <div className="graphics-service-card">
              <i className="fa-solid fa-palette"></i>
              <h3>Brand Identity</h3>
              <p>
                Complete branding packages including colors, fonts, and visuals.
              </p>
            </div>

            <div className="graphics-service-card">
              <i className="fa-solid fa-image"></i>
              <h3>Social Media Designs</h3>
              <p>
                Eye-catching creatives for Instagram, Facebook, LinkedIn & more.
              </p>
            </div>

            <div className="graphics-service-card">
              <i className="fa-solid fa-file-lines"></i>
              <h3>Brochure & Flyers</h3>
              <p>
                Professional marketing materials that boost brand awareness.
              </p>
            </div>

            <div className="graphics-service-card">
              <i className="fa-solid fa-box-open"></i>
              <h3>Packaging Design</h3>
              <p>
                Creative packaging that attracts customers and increases sales.
              </p>
            </div>

            <div className="graphics-service-card">
              <i className="fa-solid fa-display"></i>
              <h3>Digital Creatives</h3>
              <p>
                Modern banners, ads, presentations, and promotional graphics.
              </p>
            </div>

          </div>

        </section>

        {/* Tools */}

        <section className="graphics-tools-section">

          <div className="graphics-section-header">
            <h2>Tools We Use</h2>
          </div>

          <div className="graphics-tools-grid">
            <span>Adobe Photoshop</span>
            <span>Adobe Illustrator</span>
            <span>Adobe InDesign</span>
            <span>Figma</span>
            <span>Canva Pro</span>
            <span>Adobe XD</span>
            <span>CorelDRAW</span>
            <span>After Effects</span>
          </div>

        </section>

        {/* Process */}

        <section className="graphics-process-section">

          <div className="graphics-section-header">
            <h2>Our Design Process</h2>
          </div>

          <div className="graphics-process-grid">

            <div className="graphics-process-card">
              <span>01</span>
              <h3>Requirement Gathering</h3>
            </div>

            <div className="graphics-process-card">
              <span>02</span>
              <h3>Research & Concept</h3>
            </div>

            <div className="graphics-process-card">
              <span>03</span>
              <h3>Design Creation</h3>
            </div>

            <div className="graphics-process-card">
              <span>04</span>
              <h3>Review & Delivery</h3>
            </div>

          </div>

        </section>

        {/* CTA */}

        <section className="graphics-cta-section">

          <h2>Ready To Build Your Brand?</h2>

          <p>
            Let our creative team transform your ideas into stunning visuals.
          </p>

          <button onClick={Contactfun}>
            Start Your Design Project
          </button>

        </section>

      </div>

      <Footer />
    </>
  );
}

export default GraphicsDesign;