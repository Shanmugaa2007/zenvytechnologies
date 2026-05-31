import { useNavigate } from "react-router-dom";
import Footer from "../../Footer/Footer";
import Navbar from "../../Navbar/navbar";
import "./webport.css";

function WebPortfolio() {

  const navigate = useNavigate();

  const Clickfun = ()=>{
        navigate('/zenvytechnologies-freeconsultation')
    }

  return (

    <>
    <Navbar/>

    <div className="portfolio-page">

      {/* HERO */}
      <section className="portfolio-hero">

        <div className="portfolio-hero-content">

          <div className="portfolio-left">
            <span className="portfolio-badge">
              Zenvy Technologies
            </span>
          </div>

          <div className="portfolio-center">
            <h1>
              Our Web Development
              <span> Portfolio</span>
            </h1>
          </div>

          <div className="portfolio-right">
            <p>
              Explore modern websites and web applications
              developed by our team using the latest
              technologies and best development practices.
            </p>
          </div>

        </div>

      </section>

      {/* PROJECTS */}
      <section className="portfolio-projects">

        <div className="section-header">
          <h2>Featured Projects</h2>
          <p>
            Showcasing innovative digital solutions.
          </p>
        </div>

        <div className="projects-grid">

          <div className="project-card">
            <img
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f"
              alt=""
            />

            <div className="project-content">
              <h3>E-Commerce Platform</h3>

              <p>
                Complete online shopping platform with
                payment integration and admin dashboard.
              </p>

              <button>View Details</button>
            </div>
          </div>

          <div className="project-card">
            <img
              src="https://images.unsplash.com/photo-1551434678-e076c223a692"
              alt=""
            />

            <div className="project-content">
              <h3>School Management System</h3>

              <p>
                Complete student management platform
                with modern UI and automation.
              </p>

              <button>View Details</button>
            </div>
          </div>

          <div className="project-card">
            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
              alt=""
            />

            <div className="project-content">
              <h3>Corporate Website</h3>

              <p>
                Modern responsive business website
                built for brand growth.
              </p>

              <button>View Details</button>
            </div>
          </div>

        </div>

      </section>

      {/* TECHNOLOGIES */}
      <section className="portfolio-tech">

        <div className="section-header">
          <h2>Technology Stack</h2>
        </div>

        <div className="tech-grid">
          <span>React JS</span>
          <span>Node JS</span>
          <span>Express JS</span>
          <span>MongoDB</span>
          <span>MySQL</span>
          <span>JavaScript</span>
          <span>HTML5</span>
          <span>CSS3</span>
          <span>REST API</span>
          <span>Bootstrap</span>
        </div>

      </section>

      {/* STATS */}
      <section className="portfolio-stats">

        <div className="stat-card">
          <h2>50+</h2>
          <p>Projects Delivered</p>
        </div>

        <div className="stat-card">
          <h2>98%</h2>
          <p>Client Satisfaction</p>
        </div>

        <div className="stat-card">
          <h2>24/7</h2>
          <p>Support Available</p>
        </div>

        <div className="stat-card">
          <h2>100%</h2>
          <p>Responsive Design</p>
        </div>

      </section>

      {/* CTA */}
      <section className="portfolio-cta">

        <h2>
          Ready to Build Your Next Project?
        </h2>

        <p>
          Let's transform your idea into a powerful
          digital solution.
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

export default WebPortfolio;