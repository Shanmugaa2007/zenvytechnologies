import { useState } from "react";
import axios from "axios";
import Navbar from "../Navbar/navbar";
import Footer from "../Footer/Footer";
import "./consultation.css";

function Consultation() {

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

      alert(
        "Consultation Request Submitted Successfully!"
      );

      setFormData({
        name:"",
        email:"",
        phone:"",
        company:"",
        requirement:""
      });

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

      <Footer />
    </>
  );
}

export default Consultation;