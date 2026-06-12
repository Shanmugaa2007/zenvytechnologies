import { useNavigate } from "react-router-dom";
import Footer from "../../Footer/Footer";
import Navbar from "../../Navbar/navbar";
import "./softwareport.css";

function SoftwarePortfolio() {
  const navigate = useNavigate();

  const Clickfun = () => {
    navigate("/zenvytechnologies-freeconsultation");
  };

  return (
    <>
      <Navbar />

      <div className="software-portfolio-page">

        {/* HERO */}
        <section className="software-portfolio-hero">

          <div className="software-portfolio-hero-content">

            <div className="software-portfolio-left">
              <span className="software-portfolio-badge">
                Zenvy Technologies
              </span>
            </div>

            <div className="software-portfolio-center">
              <h1>
                Our Software Development
                <span> Portfolio</span>
              </h1>
            </div>

            <div className="software-portfolio-right">
              <p>
                Explore powerful software solutions, business applications,
                dashboards, and custom systems developed by our team using
                modern technologies and scalable architecture.
              </p>
            </div>

          </div>

        </section>

        {/* PROJECTS */}
        <section className="software-portfolio-projects">

          <div className="software-section-header">
            <h2>Featured Software Projects</h2>
            <p>
              Showcasing smart, scalable, and business-focused software solutions.
            </p>
          </div>

          <div className="software-projects-grid">

            <div className="software-project-card">
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f"
                alt="Business dashboard software"
              />

              <div className="software-project-content">
                <h3>Business Management System</h3>

                <p>
                  A complete business management platform with employee,
                  customer, billing, reports, and admin dashboard modules.
                </p>

              </div>
            </div>

            <div className="software-project-card">
              <img
                src="https://images.unsplash.com/photo-1551434678-e076c223a692"
                alt="Team working on software"
              />

              <div className="software-project-content">
                <h3>CRM Software</h3>

                <p>
                  Customer relationship management software designed to manage
                  leads, clients, follow-ups, and sales performance.
                </p>

              </div>
            </div>

            <div className="software-project-card">
              <img
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
                alt="Software development code"
              />

              <div className="software-project-content">
                <h3>Inventory Management System</h3>

                <p>
                  Smart inventory software with stock tracking, product reports,
                  supplier management, and real-time updates.
                </p>

              </div>
            </div>

            <div className="software-project-card">
              <img
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3"
                alt="Online learning software"
              />

              <div className="software-project-content">
                <h3>Learning Management System</h3>

                <p>
                  Online learning platform with student login, course management,
                  video lessons, quizzes, and progress tracking.
                </p>

              </div>
            </div>

            <div className="software-project-card">
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71"
                alt="Analytics dashboard"
              />

              <div className="software-project-content">
                <h3>Analytics Dashboard</h3>

                <p>
                  Data visualization dashboard with charts, reports, insights,
                  user analytics, and performance monitoring.
                </p>

              </div>
            </div>

            <div className="software-project-card">
              <img
                src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31"
                alt="Cloud software solution"
              />

              <div className="software-project-content">
                <h3>Cloud-Based Application</h3>

                <p>
                  Secure cloud software solution with user authentication,
                  database integration, and scalable deployment support.
                </p>

              </div>
            </div>

          </div>

        </section>

        {/* TECHNOLOGIES */}
        <section className="software-portfolio-tech">

          <div className="software-section-header">
            <h2>Technology Stack</h2>
          </div>

          <div className="software-tech-grid">
            <span>React JS</span>
            <span>Node JS</span>
            <span>Express JS</span>
            <span>MongoDB</span>
            <span>MySQL</span>
            <span>Python</span>
            <span>Java</span>
            <span>PHP</span>
            <span>REST API</span>
            <span>Firebase</span>
          </div>

        </section>

        {/* STATS */}
        <section className="software-portfolio-stats">

          <div className="software-stat-card">
            <h2>2+</h2>
            <p>Software Projects</p>
          </div>

          <div className="software-stat-card">
            <h2>98%</h2>
            <p>Client Satisfaction</p>
          </div>

          <div className="software-stat-card">
            <h2>24/7</h2>
            <p>Technical Support</p>
          </div>

          <div className="software-stat-card">
            <h2>100%</h2>
            <p>Scalable Solutions</p>
          </div>

        </section>

        {/* CTA */}
        <section className="software-portfolio-cta">

          <h2>
            Ready to Build Your Software?
          </h2>

          <p>
            Let’s transform your idea into a secure, scalable, and powerful
            software solution.
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

export default SoftwarePortfolio;