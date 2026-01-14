import insta from './assets/instagram.png'
import linkedin from './assets/LinkedIn.svg'
import facebook from './assets/Facebook.svg'
import Twitter from './assets/twitternew.svg'

const Footer = () => {
return (
  <footer className="footer">
    <div className="footer-container">
      <div className="footer-section">
        <h2 className="footer-logo">Zenvy Technologies</h2>
        <p><strong>Zenvy Technologies</strong> is a forward-thinking technology company delivering innovative digital solutions. We specialize in modern web development, scalable software, and secure cloud-based applications that help businesses grow and succeed in the digital era.
        </p>
      </div>

      <div className="footer-section">
        <div className='service-footer'>
          <h3>Our Services</h3>
          <ul>
          <li>Web Development</li>
          <li>UI / UX Design</li>
          <li>Graphic Design</li>
          <li>Cloud & DevOps</li>
          <li>Maintenance & Support</li>
          </ul>
        </div>
      </div>


      <div className="footer-section">
        <h3 className="footer-title">Follow Us</h3>

        <div className="footer-social">
          <a href="https://www.facebook.com/profile.php?id=61586206076966" aria-label="Facebook" className="social-icon">
            <img src={facebook} alt="Facebook" />
          </a>

          <a href="https://www.instagram.com/zenvy_technologies_official/" aria-label="Instagram" className="social-icon">
            <img src={insta} alt="Instagram" />
          </a>

          <a href="https://www.linkedin.com/company/cloudix-technologies/posts/?feedView=all" aria-label="LinkedIn" className="social-icon">
            <img src={linkedin} alt="LinkedIn" />
          </a>

          <a href="https://x.com/Zenvy_Tech" aria-label="Twitter" className="social-icon">
            <img src={Twitter} alt="Twitter" />
          </a>

        </div>
      </div>


      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Zenvy Technologies. All rights reserved.</p>
      </div>
    </div>
  </footer>
);
};


export default Footer;