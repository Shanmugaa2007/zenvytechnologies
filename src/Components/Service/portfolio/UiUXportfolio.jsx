import Footer from "../../Footer/Footer";
import Navbar from "../../Navbar/navbar";
import "./uiuxportfolio.css";
import { useNavigate } from "react-router-dom";

function UIUXPortfolio() {

  const navigate = useNavigate();

  return (
    <>
    <Navbar/>

      <div className="uiportfolio-page">

        {/* Hero */}

        <section className="uiportfolio-hero">

          <span className="uiportfolio-badge">
            Zenvy Technologies
          </span>

          <h1>
            Our <span>UI/UX Design</span> Portfolio
          </h1>

          <p>
            Explore modern, user-friendly and visually stunning
            digital experiences designed for startups,
            businesses and enterprises.
          </p>

        </section>

        {/* Featured Works */}

        <section className="uiportfolio-projects">

          <div className="uiportfolio-header">
            <h2>Featured Design Projects</h2>
            <p>
              Creative interfaces focused on user experience.
            </p>
          </div>

          <div className="uiportfolio-grid">

            <div className="uiportfolio-card">
              <img
                src="https://images.unsplash.com/photo-1559028012-481c04fa702d?w=1200"
                alt=""
              />
              <div className="uiportfolio-content">
                <h3>Food Delivery App</h3>
                <p>
                  Modern mobile app interface with smooth
                  ordering experience.
                </p>
              </div>
            </div>

            <div className="uiportfolio-card">
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200"
                alt=""
              />
              <div className="uiportfolio-content">
                <h3>Business Dashboard</h3>
                <p>
                  Analytics dashboard with clean layout
                  and data visualization.
                </p>
              </div>
            </div>

            <div className="uiportfolio-card">
              <img
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200"
                alt=""
              />
              <div className="uiportfolio-content">
                <h3>Company Website UI</h3>
                <p>
                  Premium website design focused on
                  conversions and branding.
                </p>
              </div>
            </div>

          </div>

        </section>

        {/* Skills */}

        <section className="uiportfolio-tools">

          <div className="uiportfolio-header">
            <h2>Design Tools</h2>
          </div>

          <div className="uiportfolio-tools-grid">
            <span>Figma</span>
            <span>Adobe XD</span>
            <span>Photoshop</span>
            <span>Illustrator</span>
            <span>FigJam</span>
            <span>Framer</span>
            <span>Miro</span>
            <span>Canva</span>
          </div>

        </section>

        {/* Stats */}

        <section className="uiportfolio-stats">

          <div className="uiportfolio-stat">
            <h2>2+</h2>
            <p>UI Projects</p>
          </div>

          <div className="uiportfolio-stat">
            <h2>92%</h2>
            <p>Client Satisfaction</p>
          </div>

          <div className="uiportfolio-stat">
            <h2>1+</h2>
            <p>Brands Worked</p>
          </div>

          <div className="uiportfolio-stat">
            <h2>24/7</h2>
            <p>Support</p>
          </div>

        </section>

        {/* CTA */}

        <section className="uiportfolio-cta">

          <h2>
            Need a Professional UI/UX Design?
          </h2>

          <p>
            Let's create a user experience your customers
            will love.
          </p>

          <button
            onClick={() =>
              navigate("/zenvytechnologies-freeconsultation")
            }
          >
            Get Free Consultation
          </button>

        </section>

      </div>

        <Footer/>
    </>
  );
}

export default UIUXPortfolio;
