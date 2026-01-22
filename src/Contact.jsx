import { Link } from 'react-router-dom'
import emailimg from './assets/Email.svg'
import phn from './assets/Call Log.svg'
import WhatsApp from './assets/WhatsApp.svg'
import insta from './assets/instagram.png'
import linkedin from './assets/LinkedIn.svg'
import { useState } from 'react'
import axios from 'axios'

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post('https://zenvytechnologiess.onrender.com/mail',
        { name, email, message },
        {
          withCredentials: true
        }
        );


      if (res.data?.success) {
        alert("Message sent successfully!");      
        setName("");                              
        setEmail("");                              
        setMessage("");                            
      } else {
        alert("Failed to send message.");
      }
    } catch (error) {
      console.log(error);
      alert("Error sending message.");
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
          <button className="form-btn" style={{width:"75%", fontFamily:"sans-serif"}}>Send Message</button>
        </form>

        <div className="our-details">
          <h1>Contact Us</h1>
          <img src={emailimg} alt="Email Picture" className='email-icon'/>
          <p><Link to="mailto:zenvytechnologies@gmail.com" className='contact-link'>zenvytechnologies@gmail.com</Link></p>
          <img src={phn} alt="Call Log" className='cl-icon'/>
          <p><Link to="tel:+918300773569" className='contact-link'>+91 8300773569</Link></p>
          <img src={WhatsApp} alt="WhatsApp Icon" className='wp-icon'/>
          <p><Link to="https://chat.whatsapp.com/J3RXBoifrj1LUsMzRVZ0LO" className='contact-link'>WhatsApp</Link></p>
          <img src={insta} alt="Instagram icon" className='insta-icon'/>
          <p><Link to="https://www.instagram.com/zenvy_technologies_official/" className='contact-link'>Follow Us On Instagram</Link></p>
          <img src={linkedin} alt="LinkedIn icon" className='link-icon'/>
          <p><Link to="https://www.linkedin.com/company/cloudix-technologies/posts/?feedView=all" className='contact-link'>LinkedIn</Link></p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
