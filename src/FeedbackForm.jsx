import  { useState } from "react";

function FeedbackForm({ onAddFeedback }) {
  const [formData, setFormData] = useState({
    name: "",
    rating: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddFeedback(formData);
    setFormData({ name: "", rating: "", message: "" });
  };

  return (
    <div className="feedback-container" id="review">
      <h2>Give Your Feedback</h2>

      <form className="feedback-form" onSubmit={handleSubmit}>
        <input name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
        <select name="rating" value={formData.rating} onChange={handleChange} required>
          <option value="">Rating</option>
          <option value="5">⭐⭐⭐⭐⭐</option>
          <option value="4">⭐⭐⭐⭐</option>
          <option value="3">⭐⭐⭐</option>
          <option value="2">⭐⭐</option>
          <option value="1">⭐</option>
        </select>
        <textarea name="message" placeholder="Your Feedback" value={formData.message} onChange={handleChange} required />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default FeedbackForm;
