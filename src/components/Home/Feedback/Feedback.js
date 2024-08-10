import React from 'react';

import FeedbackCard from './FeedbackCard';


const Feedback = () => {
  const feedbacks = [
    { name: "Alice", feedback: "Great service and friendly staff!" ,rating: 4 },
    { name: "Bob", feedback: "Had an amazing experience, highly recommend! ", rating: 5 },
    { name: "Charlie", feedback: "Decent, but there's room for improvement.",rating: 4 },
  ];

  return (
    <div className="feedback-section">
      <h2>What our customer says ?</h2>
      <div className="feedback-card-container">
        {feedbacks.map((item, index) => (
          <FeedbackCard key={index} name={item.name} feedback={item.feedback} rating={item.rating} />
        ))}
      </div>
    </div>
  );
};

export default Feedback;
