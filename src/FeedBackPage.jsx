import { useState } from "react";
import FeedbackForm from "./FeedbackForm";
import FeedbackList from "./FeedbackList";

function FeedbackPage() {
  const [feedbacks, setFeedbacks] = useState([]);

  const addFeedback = feedback => {
    setFeedbacks(prev => [feedback, ...prev]);
  };

  return (
    <>
      <FeedbackForm onAddFeedback={addFeedback} />
      <FeedbackList feedbacks={feedbacks} />
    </>
  );
}

export default FeedbackPage;
