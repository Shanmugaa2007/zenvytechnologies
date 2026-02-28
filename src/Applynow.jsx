import { Link, useLocation } from "react-router-dom";
import zenvylogo from './assets/Zenvylogo.png'

function ApplyNow() {
  const location = useLocation();
  const internData = location.state;

  if (!internData) {
    return <h2>No internship selected</h2>;
  }

  return (
    <>
      <div className="applynow-container">
        <div className="top-container">
          <div className="zenvy-img-logo">
          <img src={zenvylogo} alt="Zenvy Logo"/>
          <h1>Zenvy Technologies</h1>
          </div>
          <div className="desc-payment">
          <strong>Complete Your Internship Payments</strong>
          <p>You are enrolling in the Zenvy Technologies Software Development Internship</p>
          </div>
        </div>
        <div className="intern-image-container">
          <img src={internData.image} alt="Domain Image" />
        </div>
        <div className="intern-domain-details">
          <h1>{internData.title}</h1>
          <p className="apply-duration"><i className="fa-solid fa-calendar"></i> {internData.selectedDuration}</p>
          <strong className="note">Note:</strong>
          <p className="notepara">This fee is for training support, mentorship, and project evaluation. No additional charges will be collected during the internship period.</p>
          <p className="noteparas">Click below to confirm your seat and begin your learning journey with Zenvy Technologies.</p>
          <Link className="apply-rate" to='/success-payment' state={internData} >Apply Now ₹{internData.updatedPrice}</Link>
        </div>
      </div>
    </>
  );
}

export default ApplyNow;