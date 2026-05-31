import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar/navbar";
import Footer from "../Footer/Footer";
import "./portfoliobuilding.css";

function PortfolioBuilding() {

    const navigate = useNavigate();

    const Clickfun = ()=>{
        navigate('/contact-zenvyteam')
    }


  return (
    <>
      <Navbar />

      <div className="portfolio-page">

        {/* Hero Section */}
        <section className="portfolio-hero">

          <div className="portfolio-hero-content">

            <span className="portfolio-badge">
              Zenvy Technologies
            </span>

            <h1>
              Professional <span>Portfolio Building</span>
            </h1>

            <p>
              Build a powerful personal brand with a modern portfolio
              website that showcases your skills, projects, achievements,
              and professional journey.
            </p>

            <div className="portfolio-buttons">
              <button className="portfolio-primary-btn" onClick={Clickfun}>
                Build My Portfolio
              </button>

              <button className="portfolio-secondary-btn">
                View Samples
              </button>
            </div>

          </div>

        </section>

        {/* Services */}
        <section className="portfolio-services">

          <div className="portfolio-section-header">
            <h2>What We Offer</h2>
            <p>
              Everything you need to establish a strong professional presence.
            </p>
          </div>

          <div className="portfolio-grid">

            <div className="portfolio-card">
              <i className="fa-solid fa-user"></i>
              <h3>Personal Branding</h3>
              <p>
                Showcase your identity, expertise, and achievements
                professionally.
              </p>
            </div>

            <div className="portfolio-card">
              <i className="fa-solid fa-code"></i>
              <h3>Developer Portfolio</h3>
              <p>
                Highlight your projects, technologies, and coding skills.
              </p>
            </div>

            <div className="portfolio-card">
              <i className="fa-solid fa-briefcase"></i>
              <h3>Career Portfolio</h3>
              <p>
                Present your experience, certifications, and accomplishments.
              </p>
            </div>

            <div className="portfolio-card">
              <i className="fa-solid fa-laptop"></i>
              <h3>Responsive Design</h3>
              <p>
                Fully optimized for desktop, tablet, and mobile devices.
              </p>
            </div>

            <div className="portfolio-card">
              <i className="fa-solid fa-award"></i>
              <h3>Achievement Showcase</h3>
              <p>
                Display awards, certifications, and recognitions elegantly.
              </p>
            </div>

            <div className="portfolio-card">
              <i className="fa-solid fa-link"></i>
              <h3>Social Integration</h3>
              <p>
                Connect LinkedIn, GitHub, Behance, and other platforms.
              </p>
            </div>

          </div>

        </section>

        {/* Portfolio Features */}
        <section className="portfolio-features">

          <div className="portfolio-section-header">
            <h2>Portfolio Features</h2>
          </div>

          <div className="feature-tags">
            <span>About Me</span>
            <span>Projects Showcase</span>
            <span>Resume Section</span>
            <span>Skills Display</span>
            <span>Certificates</span>
            <span>Experience Timeline</span>
            <span>Contact Form</span>
            <span>SEO Optimized</span>
            <span>Fast Performance</span>
            <span>Modern UI</span>
          </div>

        </section>

        {/* Process */}
        <section className="portfolio-process">

          <div className="portfolio-section-header">
            <h2>Our Process</h2>
          </div>

          <div className="portfolio-process-grid">

            <div className="portfolio-process-card">
              <span>01</span>
              <h3>Requirement Discussion</h3>
            </div>

            <div className="portfolio-process-card">
              <span>02</span>
              <h3>Design & Planning</h3>
            </div>

            <div className="portfolio-process-card">
              <span>03</span>
              <h3>Development</h3>
            </div>

            <div className="portfolio-process-card">
              <span>04</span>
              <h3>Launch & Support</h3>
            </div>

          </div>

        </section>

        {/* CTA */}
        <section className="portfolio-cta">

          <h2>
            Ready To Build Your Portfolio?
          </h2>

          <p>
            Create a professional online presence that helps you stand out.
          </p>

          <button onClick={Clickfun}>
            Get Started Today
          </button>

        </section>

      </div>

      <Footer />
    </>
  );
}

export default PortfolioBuilding;