import { useNavigate } from "react-router-dom";
import "./maintenancesupport.css";
import Navbar from "../Navbar/navbar";
import Footer from "../Footer/Footer";

function MaintenanceSupport() {

  const navigate = useNavigate();

  const consultationPage = () => {
    navigate("/zenvytechnologies-freeconsultation");
  };

  return (
    <>
    <Navbar/>


      <div className="maintenance-page">

        {/* Hero */}

        <section className="maintenance-hero">

          <span className="maintenance-badge">
            Zenvy Technologies
          </span>

          <h1>
            Website <span>Maintenance & Support</span>
          </h1>

          <p>
            Keep your website secure, updated, fast and
            running smoothly with our professional
            maintenance and technical support services.
          </p>

          <button
            className="maintenance-btn"
            onClick={consultationPage}
          >
            Get Free Consultation
          </button>

        </section>

        {/* Services */}

        <section className="maintenance-services">

          <div className="maintenance-header">
            <h2>What We Provide</h2>
            <p>
              Complete maintenance solutions for websites,
              web applications and business platforms.
            </p>
          </div>

          <div className="maintenance-grid">

            <div className="maintenance-card">
              <i className="fa-solid fa-shield-halved"></i>
              <h3>Security Monitoring</h3>
              <p>
                Regular security checks, malware protection
                and vulnerability monitoring.
              </p>
            </div>

            <div className="maintenance-card">
              <i className="fa-solid fa-database"></i>
              <h3>Database Backup</h3>
              <p>
                Automated backups to ensure your data is
                always protected.
              </p>
            </div>

            <div className="maintenance-card">
              <i className="fa-solid fa-gauge-high"></i>
              <h3>Performance Optimization</h3>
              <p>
                Improve loading speed and overall website
                performance.
              </p>
            </div>

            <div className="maintenance-card">
              <i className="fa-solid fa-code"></i>
              <h3>Bug Fixing</h3>
              <p>
                Quick issue resolution and continuous
                monitoring.
              </p>
            </div>

            <div className="maintenance-card">
              <i className="fa-solid fa-cloud-arrow-up"></i>
              <h3>Version Updates</h3>
              <p>
                Framework, plugin and software updates to
                keep everything current.
              </p>
            </div>

            <div className="maintenance-card">
              <i className="fa-solid fa-headset"></i>
              <h3>Technical Support</h3>
              <p>
                Dedicated support whenever your business
                needs assistance.
              </p>
            </div>

          </div>

        </section>

        {/* Plans */}

        <section className="maintenance-plans">

          <div className="maintenance-header">
            <h2>Maintenance Plans</h2>
          </div>

          <div className="plan-grid">

            <div className="plan-card">
              <h3>Basic Plan</h3>
              <p>Monthly Updates</p>
              <p>Security Monitoring</p>
              <p>Email Support</p>
            </div>

            <div className="plan-card featured-plan">
              <h3>Professional Plan</h3>
              <p>Weekly Maintenance</p>
              <p>Performance Optimization</p>
              <p>Priority Support</p>
            </div>

            <div className="plan-card">
              <h3>Enterprise Plan</h3>
              <p>24/7 Monitoring</p>
              <p>Dedicated Support</p>
              <p>Advanced Security</p>
            </div>

          </div>

        </section>

        {/* Process */}

        <section className="maintenance-process">

          <div className="maintenance-header">
            <h2>Our Support Process</h2>
          </div>

          <div className="process-grid-maint">

            <div className="process-card-maint">
              <span>01</span>
              <h3>Audit</h3>
            </div>

            <div className="process-card-maint">
              <span>02</span>
              <h3>Monitor</h3>
            </div>

            <div className="process-card-maint">
              <span>03</span>
              <h3>Optimize</h3>
            </div>

            <div className="process-card-maint">
              <span>04</span>
              <h3>Support</h3>
            </div>

          </div>

        </section>

        {/* CTA */}

        <section className="maintenance-cta">

          <h2>
            Need Ongoing Website Support?
          </h2>

          <p>
            Let us handle maintenance while you focus
            on growing your business.
          </p>

          <button onClick={()=>{navigate('/contact-zenvyteam')}}>
            Start Maintenance Plan
          </button>

        </section>

      </div>
    <Footer/>
    </>
  );
}

export default MaintenanceSupport;