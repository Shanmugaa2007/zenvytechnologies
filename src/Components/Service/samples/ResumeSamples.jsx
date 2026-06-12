import { useNavigate } from "react-router-dom";
import "./resumesamples.css";
import Footer from "../../Footer/Footer";
import Navbar from "../../Navbar/navbar";

function ResumeSamples() {

    const navigate = useNavigate();

    const Clickfun = ()=>{
        navigate('/contact-zenvyteam')
    }

  return (
    <>
    <Navbar/>
    <div className="resume-samples-page">

      {/* Hero */}

      <section className="resume-samples-hero">

        <span className="resume-samples-badge">
          Resume Building
        </span>

        <h1>
          Resume <span>Samples</span>
        </h1>

        <p>
          Explore professionally designed resumes created
          for students, freshers, experienced professionals
          and job seekers.
        </p>

      </section>

      {/* Samples */}

      <section className="resume-showcase-section">

        <div className="resume-showcase-header">
          <h2>Featured Resume Designs</h2>

          <p>
            Modern ATS-friendly resume templates designed
            to increase interview opportunities.
          </p>
        </div>

        <div className="resume-showcase-grid">

          <div className="resume-showcase-card">

            <img
              src="https://images.unsplash.com/photo-1586281380117-5a60ae2050cc?w=1200"
              alt=""
            />

            <div className="resume-showcase-content">

              <h3>Fresher Resume</h3>

              <p>
                Perfect for students and fresh graduates
                entering the job market.
              </p>


            </div>

          </div>

          <div className="resume-showcase-card">

            <img
              src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200"
              alt=""
            />

            <div className="resume-showcase-content">

              <h3>Professional Resume</h3>

              <p>
                Modern corporate resume designed for
                experienced professionals.
              </p>


            </div>

          </div>

          <div className="resume-showcase-card">

            <img
              src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200"
              alt=""
            />

            <div className="resume-showcase-content">

              <h3>Software Developer Resume</h3>

              <p>
                Technical resume highlighting projects,
                skills and achievements.
              </p>


            </div>

          </div>

        </div>

      </section>

      {/* Features */}

      <section className="resume-features-section">

        <div className="resume-showcase-header">
          <h2>What We Include</h2>
        </div>

        <div className="resume-feature-grid">

          <div className="resume-feature-card">
            <i className="fa-solid fa-file-lines"></i>
            <h3>ATS Friendly</h3>
          </div>

          <div className="resume-feature-card">
            <i className="fa-solid fa-user-tie"></i>
            <h3>Professional Layout</h3>
          </div>

          <div className="resume-feature-card">
            <i className="fa-solid fa-award"></i>
            <h3>Skills Highlighting</h3>
          </div>

          <div className="resume-feature-card">
            <i className="fa-solid fa-briefcase"></i>
            <h3>Industry Specific</h3>
          </div>

          <div className="resume-feature-card">
            <i className="fa-solid fa-link"></i>
            <h3>LinkedIn Optimization</h3>
          </div>

          <div className="resume-feature-card">
            <i className="fa-solid fa-rocket"></i>
            <h3>Career Branding</h3>
          </div>

        </div>

      </section>

      {/* Stats */}

      <section className="resume-stats-section">

        <div className="resume-stat-card">
          <h2>20+</h2>
          <p>Resumes Built</p>
        </div>

        <div className="resume-stat-card">
          <h2>95%</h2>
          <p>Interview Success</p>
        </div>

        <div className="resume-stat-card">
          <h2>15+</h2>
          <p>Students Helped</p>
        </div>

        <div className="resume-stat-card">
          <h2>24/7</h2>
          <p>Support Available</p>
        </div>

      </section>

      {/* CTA */}

      <section className="resume-cta-section">

        <h2>
          Ready To Build Your Resume?
        </h2>

        <p>
          Get a professional resume that helps you stand
          out and land more interviews.
        </p>

        <button onClick={Clickfun}>
          Get Resume Now
        </button>

      </section>

    </div>
    <Footer/>
    </>
  );
}

export default ResumeSamples;
