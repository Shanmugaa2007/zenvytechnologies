import Navbar from "../Navbar/navbar";
import Footer from "../Footer/Footer";
import { useNavigate } from "react-router-dom";
import "./resumebuilding.css";

function ResumeBuilding() {

    const navigate = useNavigate();

    const Clickfun = ()=>{
        navigate('/contact-zenvyteam')
    }

  return (
    <>
      <Navbar />

      <div className="resume-page">

        {/* Hero Section */}
        <section className="resume-hero">

          <div className="resume-hero-content">

            <span className="resume-badge">
              Zenvy Technologies
            </span>

            <h1>
              Professional <span>Resume Building</span>
            </h1>

            <p>
              Create ATS-friendly, recruiter-focused, and professionally
              designed resumes that help you stand out and land your dream job.
            </p>

            <div className="resume-buttons">

              <button className="resume-primary-btn" onClick={Clickfun}>
                Build My Resume
              </button>

              <button className="resume-secondary-btn">
                View Samples
              </button>

            </div>

          </div>

        </section>

        {/* Services */}

        <section className="resume-services">

          <div className="resume-section-header">
            <h2>What We Offer</h2>

            <p>
              Complete resume solutions for students, freshers,
              professionals, and executives.
            </p>
          </div>

          <div className="resume-grid">

            <div className="resume-card">
              <i className="fa-solid fa-file-lines"></i>
              <h3>ATS Friendly Resume</h3>
              <p>
                Optimized resumes that pass Applicant Tracking Systems.
              </p>
            </div>

            <div className="resume-card">
              <i className="fa-solid fa-user-graduate"></i>
              <h3>Fresher Resume</h3>
              <p>
                Professional resumes designed specifically for fresh graduates.
              </p>
            </div>

            <div className="resume-card">
              <i className="fa-solid fa-briefcase"></i>
              <h3>Professional Resume</h3>
              <p>
                Industry-standard resumes for experienced professionals.
              </p>
            </div>

            <div className="resume-card">
              <i className="fa-solid fa-pen-ruler"></i>
              <h3>Custom Design</h3>
              <p>
                Modern and attractive resume layouts tailored to your career.
              </p>
            </div>

            <div className="resume-card">
              <i className="fa-solid fa-award"></i>
              <h3>Achievement Highlighting</h3>
              <p>
                Showcase your skills, certifications, and accomplishments.
              </p>
            </div>

            <div className="resume-card">
              <i className="fa-solid fa-language"></i>
              <h3>LinkedIn Optimization</h3>
              <p>
                Improve your online professional presence and visibility.
              </p>
            </div>

          </div>

        </section>

        {/* Features */}

        <section className="resume-features">

          <div className="resume-section-header">
            <h2>Resume Features</h2>
          </div>

          <div className="resume-tags">

            <span>ATS Optimized</span>
            <span>Modern Design</span>
            <span>Professional Layout</span>
            <span>LinkedIn Ready</span>
            <span>Keyword Optimized</span>
            <span>Editable Format</span>
            <span>PDF & DOCX</span>
            <span>Cover Letter</span>
            <span>Career Guidance</span>
            <span>Industry Standards</span>

          </div>

        </section>

        {/* Process */}

        <section className="resume-process">

          <div className="resume-section-header">
            <h2>Our Process</h2>
          </div>

          <div className="resume-process-grid">

            <div className="resume-process-card">
              <span>01</span>
              <h3>Profile Analysis</h3>
            </div>

            <div className="resume-process-card">
              <span>02</span>
              <h3>Content Preparation</h3>
            </div>

            <div className="resume-process-card">
              <span>03</span>
              <h3>Resume Design</h3>
            </div>

            <div className="resume-process-card">
              <span>04</span>
              <h3>Review & Delivery</h3>
            </div>

          </div>

        </section>

        {/* CTA */}

        <section className="resume-cta">

          <h2>
            Ready To Get Hired Faster?
          </h2>

          <p>
            Let us build a professional resume that opens new opportunities.
          </p>

          <button onClick={Clickfun}>
            Get Your Resume Today
          </button>

        </section>

      </div>

      <Footer />
    </>
  );
}

export default ResumeBuilding;