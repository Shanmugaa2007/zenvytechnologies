import axios from "axios";
import { useEffect, useState } from "react";
import './review.css'

function FeedbackList({ feedbacks }) {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    axios
      .get("https://zenvytechnologiess.onrender.com/feedback") 
      .then(res => setReviews(res.data))
      .catch(err => console.error("Fetch error", err.message));
  }, []);

  const allReviews = [...feedbacks, ...reviews];
  const filteredReviews = allReviews.filter(fb => Number(fb.rating) >= 3);

  if (filteredReviews.length === 0) return null;

  return (
    <div className="review-section" id="review">
      <div className="review-head-block">
      <p className="review-eyebrow">Testimonials</p>
      <h2 className="review-head">Trusted by <em>Our Clients</em></h2>
      <p className="review-subhead">Real experiences from clients who scaled with us</p>
    </div>
  <div className="review-grid">
    {filteredReviews.map((fb, i) => (
      <div className="review-card" key={i}>

        <div className="quote-icon">
          <i className="fa-solid fa-quote-left"></i>
        </div>

        <p className="review-message">
          {fb.message}
        </p>

        <div className="review-footer">

          <div>
            <h4>{fb.name}</h4>
            <span>Client</span>
          </div>

          <div className="review-rating">
            {"★".repeat(fb.rating)}
          </div>

        </div>

      </div>
    ))}
  </div>

</div>
  );
}

export default FeedbackList;
