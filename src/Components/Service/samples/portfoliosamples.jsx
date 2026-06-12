import { useNavigate } from "react-router-dom";
import "./portfoliosamples.css";
import Navbar from "../../Navbar/navbar";
import Footer from "../../Footer/Footer";

function PortfolioSamples() {

    const navigate = useNavigate();

    const Clickfun = ()=>{
        navigate('/contact-zenvyteam')
    }

  return (
    <>
    <Navbar/>
    <div className="ps-page">

      <section className="ps-hero">
        <span className="ps-badge">Portfolio Building</span>

        <h1>
          Portfolio <span>Samples</span>
        </h1>

        <p>
          Explore professional portfolio designs, resumes,
          LinkedIn profiles and personal branding projects
          created by Zenvy Technologies.
        </p>
      </section>

      <section className="ps-section">

        <div className="ps-heading">
          <h2>Featured Portfolio Samples</h2>
        </div>

        <div className="ps-grid">

          <div className="ps-card">
            <img
              src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200"
              alt=""
            />

            <div className="ps-content">
              <h3>Software Developer Portfolio</h3>

              <p>
                Modern personal portfolio website showcasing
                projects, skills and experience.
              </p>

            </div>
          </div>

          <div className="ps-card">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200"
              alt=""
            />

            <div className="ps-content">
              <h3>Creative Designer Portfolio</h3>

              <p>
                Professional graphics and UI/UX portfolio
                presentation for designers.
              </p>

            </div>
          </div>

          <div className="ps-card">
            <img
              src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200"
              alt=""
            />

            <div className="ps-content">
              <h3>Business Portfolio</h3>

              <p>
                Corporate profile and company presentation
                portfolio design.
              </p>

            </div>
          </div>

        </div>

      </section>

      <section className="ps-stats">

        <div className="ps-stat-card">
          <h2>5+</h2>
          <p>Portfolios Created</p>
        </div>

        <div className="ps-stat-card">
          <h2>99%</h2>
          <p>Success Rate</p>
        </div>

        <div className="ps-stat-card">
          <h2>30+</h2>
          <p>Resume Designs</p>
        </div>

        <div className="ps-stat-card">
          <h2>24/7</h2>
          <p>Support</p>
        </div>

      </section>

      <section className="ps-cta">

        <h2>
          Ready To Build Your Professional Portfolio?
        </h2>

        <p>
          Get a stunning portfolio, resume and personal
          branding package designed by experts.
        </p>

        <button onClick={Clickfun}>
          Get Started
        </button>

      </section>

    </div>
    <Footer/>
    </>
  );
}

export default PortfolioSamples;
