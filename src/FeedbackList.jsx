import axios from "axios";
import { useEffect, useState } from "react";

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
    <div className="review-section">
      <h2>User Reviews</h2>

      <div className="review-grid">
        {filteredReviews.map((fb, i) => (
          <div className="review-card" key={i}>
            <h4>{fb.name}</h4>
            <div>{"⭐".repeat(fb.rating)}</div>
            <p>{fb.message}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FeedbackList;
