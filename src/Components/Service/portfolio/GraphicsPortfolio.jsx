import { useNavigate } from "react-router-dom";
import Footer from "../../Footer/Footer";
import Navbar from "../../Navbar/navbar";
import "./graphicsportfolio.css";

function GraphicsPortfolio() {

    const navigate = useNavigate();

  return (

    <>
        <Navbar/>

    <div className="graphics-portfolio-page">

      {/* Hero Section */}
      <section className="graphics-heros">

        <span className="graphics-badges">
          Zenvy Technologies
        </span>

        <h1>
          Creative <span>Graphics Design</span> Portfolio
        </h1>

        <p>
          Explore our professional branding, social media creatives,
          marketing materials, UI designs, and visual identities
          crafted for modern businesses.
        </p>

      </section>

      {/* Portfolio Projects */}

      <section className="graphics-projects">

        <div className="graphics-section-header">
          <h2>Featured Designs</h2>
          <p>
            Professional and creative designs developed for brands.
          </p>
        </div>

        <div className="graphics-grid">

          <div className="graphics-card">
            <img
              src="https://images.unsplash.com/photo-1626785774573-4b799315345d?w=1200"
              alt=""
            />

            <div className="graphics-content">
              <h3>Brand Identity Design</h3>

              <p>
                Complete logo, color palette and brand guidelines
                for modern startups.
              </p>

              <button>View Project</button>
            </div>
          </div>

          <div className="graphics-card">
            <img
              src="https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?w=1200"
              alt=""
            />

            <div className="graphics-content">
              <h3>Social Media Creatives</h3>

              <p>
                Instagram, Facebook and LinkedIn promotional
                designs for businesses.
              </p>

              <button>View Project</button>
            </div>
          </div>

          <div className="graphics-card">
            <img
              src="https://images.unsplash.com/photo-1609921212029-bb5a28e60960?w=1200"
              alt=""
            />

            <div className="graphics-content">
              <h3>Marketing Posters</h3>

              <p>
                Eye-catching promotional posters and digital
                advertisements for campaigns.
              </p>

              <button>View Project</button>
            </div>
          </div>

        </div>

      </section>

      {/* Services */}

      <section className="graphics-services">

        <div className="graphics-section-header">
          <h2>Design Services</h2>
        </div>

        <div className="graphics-service-grid">

          <div className="graphics-service-card">
            <i className="fa-solid fa-pen-ruler"></i>
            <h3>Logo Design</h3>
          </div>

          <div className="graphics-service-card">
            <i className="fa-solid fa-palette"></i>
            <h3>Brand Identity</h3>
          </div>

          <div className="graphics-service-card">
            <i className="fa-solid fa-image"></i>
            <h3>Social Media Design</h3>
          </div>

          <div className="graphics-service-card">
            <i className="fa-solid fa-layer-group"></i>
            <h3>UI Design</h3>
          </div>

          <div className="graphics-service-card">
            <i className="fa-solid fa-print"></i>
            <h3>Print Design</h3>
          </div>

          <div className="graphics-service-card">
            <i className="fa-solid fa-bullhorn"></i>
            <h3>Marketing Creatives</h3>
          </div>

        </div>

      </section>

      {/* Stats */}

      <section className="graphics-stats">

        <div className="graphics-stat-card">
          <h2>200+</h2>
          <p>Design Projects</p>
        </div>

        <div className="graphics-stat-card">
          <h2>100+</h2>
          <p>Happy Clients</p>
        </div>

        <div className="graphics-stat-card">
          <h2>98%</h2>
          <p>Client Satisfaction</p>
        </div>

        <div className="graphics-stat-card">
          <h2>24/7</h2>
          <p>Support Available</p>
        </div>

      </section>

      {/* CTA */}

      <section className="graphics-cta">

        <h2>
          Need Stunning Designs For Your Business?
        </h2>

        <p>
          Let's create visually impactful designs that
          strengthen your brand identity.
        </p>

        <button onClick={()=>{navigate('/zenvytechnologies-freeconsultation')}}>
          Get Free Consultation
        </button>

      </section>

    </div>
    <Footer/>
    </>
  );
}

export default GraphicsPortfolio;