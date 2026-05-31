import { useNavigate } from "react-router-dom";
import "./uidesign.css";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/navbar";

function UIDesign() {

  const navigate = useNavigate();

  const Clickfun = () => {
    navigate("/zenvytechnologies-freeconsultation");
  };

  const PortfolioFun = () => {
    navigate("/uiuxportfolio");
  };

  return (
    <>
      <Navbar />

      <div className="uiux-page">

        {/* Hero */}

        <section className="uiux-hero">

          <span className="uiux-badge">
            Zenvy Technologies
          </span>

          <h1>
            Professional <span>UI & UX Design</span>
          </h1>

          <p>
            We create intuitive, modern and user-centered
            digital experiences that improve engagement,
            usability and customer satisfaction.
          </p>

          <div className="uiux-hero-buttons">

            <button
              className="uiux-primary-btn"
              onClick={Clickfun}
            >
              Get Free Consultation
            </button>

            <button
              className="uiux-secondary-btn"
              onClick={PortfolioFun}
            >
              View Portfolio
            </button>

          </div>

        </section>

        {/* Services */}

        <section className="uiux-services">

          <div className="uiux-header">
            <h2>What We Design</h2>

            <p>
              End-to-end UI/UX solutions for startups,
              businesses and enterprises.
            </p>
          </div>

          <div className="uiux-grid">

            <div className="uiux-card">
              <i className="fa-solid fa-mobile-screen"></i>
              <h3>Mobile App Design</h3>
              <p>
                Modern mobile app interfaces designed
                for seamless user experiences.
              </p>
            </div>

            <div className="uiux-card">
              <i className="fa-solid fa-globe"></i>
              <h3>Website Design</h3>
              <p>
                Responsive and conversion-focused
                website interfaces.
              </p>
            </div>

            <div className="uiux-card">
              <i className="fa-solid fa-sitemap"></i>
              <h3>Wireframing</h3>
              <p>
                User flow planning and structural
                wireframe creation.
              </p>
            </div>

            <div className="uiux-card">
              <i className="fa-solid fa-layer-group"></i>
              <h3>Prototype Design</h3>
              <p>
                Interactive prototypes for product
                validation and testing.
              </p>
            </div>

            <div className="uiux-card">
              <i className="fa-solid fa-users"></i>
              <h3>User Research</h3>
              <p>
                Understanding user behavior and
                identifying pain points.
              </p>
            </div>

            <div className="uiux-card">
              <i className="fa-solid fa-pen-ruler"></i>
              <h3>Design Systems</h3>
              <p>
                Consistent UI components and scalable
                design frameworks.
              </p>
            </div>

          </div>

        </section>

        {/* Process */}

        <section className="uiux-process">

          <div className="uiux-header">
            <h2>Our Design Process</h2>
          </div>

          <div className="process-grid-ui">

            <div className="process-card-ui">
              <span>01</span>
              <h3>Research</h3>
            </div>

            <div className="process-card-ui">
              <span>02</span>
              <h3>Wireframe</h3>
            </div>

            <div className="process-card-ui">
              <span>03</span>
              <h3>UI Design</h3>
            </div>

            <div className="process-card-ui">
              <span>04</span>
              <h3>Prototype</h3>
            </div>

            <div className="process-card-ui">
              <span>05</span>
              <h3>Testing</h3>
            </div>

          </div>

        </section>

        {/* Tools */}

        <section className="uiux-tools">

          <div className="uiux-header">
            <h2>Tools We Use</h2>
          </div>

          <div className="tools-grid-ui">
            <span>Figma</span>
            <span>Adobe XD</span>
            <span>Photoshop</span>
            <span>Illustrator</span>
            <span>Canva</span>
            <span>Framer</span>
            <span>Miro</span>
            <span>FigJam</span>
          </div>

        </section>

        {/* Stats */}

        <section className="uiux-stats">

          <div className="uiux-stat-card">
            <h2>100+</h2>
            <p>Projects Completed</p>
          </div>

          <div className="uiux-stat-card">
            <h2>98%</h2>
            <p>Client Satisfaction</p>
          </div>

          <div className="uiux-stat-card">
            <h2>50+</h2>
            <p>Brands Designed</p>
          </div>

          <div className="uiux-stat-card">
            <h2>24/7</h2>
            <p>Support Available</p>
          </div>

        </section>

        {/* CTA */}

        <section className="uiux-cta">

          <h2>
            Ready To Design Your Product?
          </h2>

          <p>
            Transform your idea into an engaging and
            user-friendly digital experience.
          </p>

          <button onClick={Clickfun}>
            Get Free Consultation
          </button>

        </section>

      </div>

      <Footer />
    </>
  );
}

export default UIDesign;