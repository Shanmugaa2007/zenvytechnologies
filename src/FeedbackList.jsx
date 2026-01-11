function FeedbackList({ feedbacks }) {
 
  const filteredFeedbacks = feedbacks.filter(fb => Number(fb.rating) >= 3);

  if (filteredFeedbacks.length === 0) return null;

  return (
    <div className="review-section">
      <h2>User Reviews</h2>

      <div className="review-grid">
        {filteredFeedbacks.map((fb, index) => (
          <div className="review-card" key={index}>
            <h4>{fb.name}</h4>
            <div className="review-rating">{"⭐".repeat(fb.rating)}</div>
            <p>{fb.message}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FeedbackList;
