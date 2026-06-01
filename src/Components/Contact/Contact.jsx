import { Link } from 'react-router-dom'
import emailimg from '/src/assets/Email.svg'
import phn from '/src/assets/Call Log.svg'
import WhatsApp from '/src/assets/WhatsApp.svg'
import insta from '/src/assets/instagram.png'
import linkedin from '/src/assets/LinkedIn.svg'
import { useState } from 'react'
import axios from 'axios'
import './contact.css'

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post('https://zenvytechnologiess.onrender.com/mail',
        { name, email, message }
        );


      if (res.data?.success) {
        setShowPopup(true);

        setName("");
        setEmail("");
        setMessage("");

        setTimeout(() => {
          setShowPopup(false);
        }, 3000);
      } else {
        alert("Failed to send message.");
      }
    } catch (error) {
  console.log("Full Error:", error);
  console.log("Response:", error.response);
  console.log("Data:", error.response?.data);

  alert(error.response?.data?.message || error.message);
}
  }

  return (
    <div className="Contact-form" id="contact">
      <div className="form-head">
        <h1>Get in Touch</h1>
      </div>
      <div className="forms">
        <form className="user-contact" onSubmit={handleSubmit}>
          <label>Name</label>
          <input 
            type="text" 
            value={name}               
            onChange={e => setName(e.target.value)} 
            required 
          />
          <label>Email</label>
          <input 
            type="email" 
            value={email}               
            onChange={e => setEmail(e.target.value)} 
            required 
          />
          <label>Message</label>
          <textarea 
            value={message}             
            onChange={e => setMessage(e.target.value)} 
            required
          ></textarea>
          <button className="form-btn">Send Message</button>
        </form>

        <div className="our-details">
  <h1>Contact Us</h1>

  <div className="contact-row">
    <div className="icon-box">
      <img src={emailimg} alt="Email" className="email-icon"/>
    </div>
    <div>
      <div className="row-label">Email</div>
      <Link to="mailto:zenvytechnologies@gmail.com" className="contact-link">
        zenvytechnologies@gmail.com
      </Link>
    </div>
  </div>

  <div className="contact-row">
    <div className="icon-box">
      <img src={phn} alt="Phone" className="cl-icon"/>
    </div>
    <div>
      <div className="row-label">Phone</div>
      <Link to="tel:+918300773569" className="contact-link">+91 8300773569</Link>
    </div>
  </div>

  <div className="contact-row">
    <div className="icon-box">
      <img src={WhatsApp} alt="WhatsApp" className="wp-icon"/>
    </div>
    <div>
      <div className="row-label">WhatsApp</div>
      <Link to="https://chat.whatsapp.com/J3RXBoifrj1LUsMzRVZ0LO" className="contact-link">Chat with us</Link>
    </div>
  </div>

  <div className="contact-row">
    <div className="icon-box">
      <img src={insta} alt="Instagram" className="insta-icon"/>
    </div>
    <div>
      <div className="row-label">Instagram</div>
      <Link to="https://www.instagram.com/zenvy_technologies_official/" className="contact-link">Follow us</Link>
    </div>
  </div>

  <div className="contact-row">
    <div className="icon-box">
      <img src={linkedin} alt="LinkedIn" className="link-icon"/>
    </div>
    <div>
      <div className="row-label">LinkedIn</div>
      <Link to="https://www.linkedin.com/company/cloudix-technologies/" className="contact-link">Zenvy Technologies</Link>
    </div>
  </div>
</div>
      </div>
      {showPopup && (
  <div className="success-overlay">
    <div className="success-popup">
      <div className="checkmark-circle">
        <div className="checkmark"></div>
      </div>

      <h2>Message Sent!</h2>

      <p>
        Thank you for contacting Zenvy Technologies.
        We will get back to you shortly.
      </p>
    </div>
  </div>
)}
    </div>
  );
}

export default Contact;
