import Footer from "../../Footer/Footer";
import Navbar from "../../Navbar/navbar";
import "./DigitalMarketingPortfolio.css";
import { useNavigate } from "react-router-dom";

function DigitalMarketingPortfolio() {

  const navigate = useNavigate();

    const Clickfun = ()=>{
        navigate('/zenvytechnologies-freeconsultation')
    }


  return (
    <>
    <Navbar/>
    <div className="zen-dm-portfolio-page">

      {/* Hero Section */}
      <section className="zen-dm-hero-section">

        <span className="zen-dm-badge">
          Zenvy Technologies
        </span>

        <h1>
          Powerful <span>Digital Marketing</span> Portfolio
        </h1>

        <p>
          Explore our successful marketing campaigns,
          social media growth strategies, SEO projects,
          paid advertising campaigns, and lead generation solutions.
        </p>

      </section>

      {/* Campaigns */}

      <section className="zen-dm-projects-section">

        <div className="zen-dm-section-header">
          <h2>Featured Campaigns</h2>
          <p>
            Real marketing campaigns that delivered measurable results.
          </p>
        </div>

        <div className="zen-dm-projects-grid">

          <div className="zen-dm-project-card">
            <img
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f"
              alt=""
            />

            <div className="zen-dm-card-content">
              <h3>SEO Growth Campaign</h3>

              <p>
                Increased organic website traffic and improved
                search engine rankings for a growing business.
              </p>

              <button>View Campaign</button>
            </div>
          </div>

          <div className="zen-dm-project-card">
            <img
              src="https://images.unsplash.com/photo-1557838923-2985c318be48"
              alt=""
            />

            <div className="zen-dm-card-content">
              <h3>Social Media Marketing</h3>

              <p>
                Built strong online presence through engaging
                content and targeted audience campaigns.
              </p>

              <button>View Campaign</button>
            </div>
          </div>

          <div className="zen-dm-project-card">
            <img
              src="https://images.unsplash.com/photo-1556155092-490a1ba16284"
              alt=""
            />

            <div className="zen-dm-card-content">
              <h3>Google Ads Campaign</h3>

              <p>
                Generated quality leads and conversions
                through optimized PPC advertising.
              </p>

              <button>View Campaign</button>
            </div>
          </div>

        </div>

      </section>

      {/* Services */}

      <section className="zen-dm-services-section">

        <div className="zen-dm-section-header">
          <h2>Marketing Services</h2>
        </div>

        <div className="zen-dm-services-grid">

          <div className="zen-dm-service-card">
            <i className="fa-solid fa-magnifying-glass"></i>
            <h3>SEO Optimization</h3>
          </div>

          <div className="zen-dm-service-card">
            <i className="fa-solid fa-share-nodes"></i>
            <h3>Social Media Marketing</h3>
          </div>

          <div className="zen-dm-service-card">
            <i className="fa-solid fa-bullhorn"></i>
            <h3>Google Ads</h3>
          </div>

          <div className="zen-dm-service-card">
            <i className="fa-solid fa-envelope"></i>
            <h3>Email Marketing</h3>
          </div>

          <div className="zen-dm-service-card">
            <i className="fa-solid fa-chart-line"></i>
            <h3>Lead Generation</h3>
          </div>

          <div className="zen-dm-service-card">
            <i className="fa-solid fa-pen-to-square"></i>
            <h3>Content Marketing</h3>
          </div>

        </div>

      </section>

      {/* Stats */}

      <section className="zen-dm-stats-section">

        <div className="zen-dm-stat-card">
          <h2>300+</h2>
          <p>Campaigns Managed</p>
        </div>

        <div className="zen-dm-stat-card">
          <h2>1M+</h2>
          <p>Audience Reached</p>
        </div>

        <div className="zen-dm-stat-card">
          <h2>98%</h2>
          <p>Client Satisfaction</p>
        </div>

        <div className="zen-dm-stat-card">
          <h2>24/7</h2>
          <p>Marketing Support</p>
        </div>

      </section>

      {/* CTA */}

      <section className="zen-dm-cta-section">

        <h2>
          Ready To Grow Your Business Online?
        </h2>

        <p>
          Let's create data-driven marketing strategies
          that generate real results for your brand.
        </p>

        <button onClick={Clickfun}>
          Get Free Consultation
        </button>

      </section>

    </div>
    <Footer/>
    </>
  );
}

export default DigitalMarketingPortfolio;