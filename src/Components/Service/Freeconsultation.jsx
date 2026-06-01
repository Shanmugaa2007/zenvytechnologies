import { useState } from "react";
import axios from "axios";
import Navbar from "../Navbar/navbar";
import Footer from "../Footer/Footer";
import "./consultation.css";

function Consultation() {

  const [showPopup, setShowPopup] = useState(false);
  const [formData,setFormData] = useState({
    name:"",
    email:"",
    phone:"",
    company:"",
    requirement:""
  });

  const handleChange = (e)=>{
    setFormData({
      ...formData,
      [e.target.name]:e.target.value
    });
  };

  const handleSubmit = async(e)=>{
  e.preventDefault();

  try{

    const res = await axios.post(
      "https://zenvytechnologiess.onrender.com/consultation",
      formData
    );

    if(res.data?.success){

      setShowPopup(true);

      setFormData({
        name:"",
        email:"",
        phone:"",
        company:"",
        requirement:""
      });

      setTimeout(() => {
        setShowPopup(false);
      }, 4000);

    }

  }
  catch(err){
    console.log(err);
    alert("Something went wrong");
  }
};

  return (
    <>
      <Navbar />

      <div className="consultation-page">

        <div className="consultation-container">

          <div className="consult-left">

            <span className="consult-badge">
              Free Consultation
            </span>

            <h1>
              Let's Build Your
              <span> Next Project</span>
            </h1>

            <p>
              Tell us about your project requirements and
              our team will contact you with the best
              solution and roadmap.
            </p>

          </div>

          <div className="consult-right">

            <form
              className="consult-form"
              onSubmit={handleSubmit}
            >

              <h2>Book Consultation</h2>

              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                required
              />

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                required
              />

              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                required
              />

              <input
                type="text"
                name="company"
                placeholder="Company Name(optional)"
                value={formData.company}
                onChange={handleChange}
              />

              <textarea
                rows="5"
                name="requirement"
                placeholder="Describe Your Project"
                value={formData.requirement}
                onChange={handleChange}
                required
              />

              <button type="submit">
                Submit Request
              </button>

            </form>

          </div>

        </div>

      </div>
      {showPopup && (
  <div className="success-overlay">

    <div className="success-popup">

      <div className="success-icon">

        <svg
          viewBox="0 0 52 52"
          className="check-svg"
        >
          <circle
            className="check-circle"
            cx="26"
            cy="26"
            r="25"
            fill="none"
          />

          <path
            className="check-path"
            fill="none"
            d="M14 27 L22 35 L38 18"
          />
        </svg>

      </div>

      <h2>Your Slot is Confirmed!</h2>

      <p>
        Your free consultation request has been
        successfully submitted.
      </p>

      <p className="popup-subtext">
        Our team will contact you shortly to
        discuss your project requirements.
      </p>

    </div>

  </div>
)}

      <Footer />
    </>
  );
}

export default Consultation;
