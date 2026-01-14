import { useState } from "react";
import axios from "axios";

function FeedbackForm({ onAddFeedback }) {
  const [name, setName] = useState("");
  const [rating, setRating] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = { name, rating, message };

    try {
      const res = await axios.post(
        "https://zenvytechnologiess.onrender.com/feedback",
        formData
      );

      onAddFeedback(res.data); 
      setName("");
      setRating("");
      setMessage("");
    } catch (err) {
      console.error("Feedback submit failed", err.message);
    }
  };

  return (
    <div className="feedback-container">
      <h2>Give Your Feedback</h2>

      <form className="feedback-form" onSubmit={handleSubmit}>
        <input value={name} onChange={e => setName(e.target.value)} placeholder="Your Name" required />

        <select value={rating} onChange={e => setRating(e.target.value)} required>
          <option value="">Rating</option>
          <option value="5">⭐⭐⭐⭐⭐</option>
          <option value="4">⭐⭐⭐⭐</option>
          <option value="3">⭐⭐⭐</option>
          <option value="2">⭐⭐</option>
          <option value="1">⭐</option>
        </select>

        <textarea value={message} onChange={e => setMessage(e.target.value)} placeholder="Your Feedback" required />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default FeedbackForm;
