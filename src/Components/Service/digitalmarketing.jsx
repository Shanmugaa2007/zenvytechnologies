import Navbar from "../Navbar/navbar";
import Footer from "../Footer/Footer";
import { useNavigate } from "react-router-dom";
import "./digitalmarketing.css";

function DigitalMarketing() {

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

      <div className="dm-page">

        {/* Hero Section */}
        <section className="dm-hero">

          <div className="dm-hero-content">

            <span className="dm-badge">
              Zenvy Technologies
            </span>

            <h1>
              Grow Your Business With
              <span> Digital Marketing</span>
            </h1>

            <p>
              Boost your online presence, generate quality leads,
              increase conversions, and scale your business with
              data-driven digital marketing strategies.
            </p>

            <div className="dm-buttons">

              <button className="dm-primary-btn" onClick={Clickfun}>
                Get Free Consultation
              </button>

              <button className="dm-secondary-btn" onClick={()=>{navigate('/digitalmarketing-portfolio')}}>
                View Portfolio
              </button>

            </div>

          </div>

        </section>

        {/* Services */}

        <section className="dm-services-section">

          <div className="dm-section-header">
            <h2>Our Digital Marketing Services</h2>

            <p>
              Data-driven marketing solutions designed to increase visibility,
              generate leads, and grow your business online.
            </p>
          </div>

          <div className="dm-services-grid">

            <div className="dm-service-card">
              <i className="fa-solid fa-magnifying-glass-chart"></i>
              <h3>SEO Optimization</h3>
              <p>
                Improve search rankings and attract organic traffic.
              </p>
            </div>

            <div className="dm-service-card">
              <i className="fa-solid fa-bullhorn"></i>
              <h3>Social Media Marketing</h3>
              <p>
                Grow your audience across Instagram, Facebook and LinkedIn.
              </p>
            </div>

            <div className="dm-service-card">
              <i className="fa-solid fa-rectangle-ad"></i>
              <h3>Google & Meta Ads</h3>
              <p>
                High-converting paid campaigns that generate leads.
              </p>
            </div>

            <div className="dm-service-card">
              <i className="fa-solid fa-envelope-open-text"></i>
              <h3>Email Marketing</h3>
              <p>
                Build customer relationships through targeted campaigns.
              </p>
            </div>

            <div className="dm-service-card">
              <i className="fa-solid fa-pen-fancy"></i>
              <h3>Content Marketing</h3>
              <p>
                Valuable content that builds trust and authority.
              </p>
            </div>

            <div className="dm-service-card">
              <i className="fa-solid fa-chart-line"></i>
              <h3>Performance Marketing</h3>
              <p>
                ROI-focused strategies for measurable business growth.
              </p>
            </div>

          </div>

        </section>

        {/* Platforms */}

        <section className="dm-tools-section">

          <div className="dm-section-header">
            <h2>Marketing Platforms We Use</h2>
          </div>

          <div className="dm-tools-grid">

            <span>Google Ads</span>
            <span>Facebook Ads</span>
            <span>Instagram Marketing</span>
            <span>LinkedIn Marketing</span>
            <span>YouTube Ads</span>
            <span>Google Analytics</span>
            <span>Google Search Console</span>
            <span>Mailchimp</span>
            <span>SEMrush</span>
            <span>Ahrefs</span>

          </div>

        </section>

        {/* Process */}

        <section className="dm-process-section">

          <div className="dm-section-header">
            <h2>Our Marketing Process</h2>
          </div>

          <div className="dm-process-grid">

            <div className="dm-process-card">
              <span>01</span>
              <h3>Market Research</h3>
            </div>

            <div className="dm-process-card">
              <span>02</span>
              <h3>Strategy Planning</h3>
            </div>

            <div className="dm-process-card">
              <span>03</span>
              <h3>Campaign Execution</h3>
            </div>

            <div className="dm-process-card">
              <span>04</span>
              <h3>Optimization & Reporting</h3>
            </div>

          </div>

        </section>

        {/* CTA */}

        <section className="dm-cta-section">

          <h2>Ready To Scale Your Business?</h2>

          <p>
            Let's create a digital marketing strategy that delivers real results.
          </p>

          <button onClick={Contactfun}>
            Start Marketing Today
          </button>

        </section>

      </div>

      <Footer />
    </>
  );
}

export default DigitalMarketing;