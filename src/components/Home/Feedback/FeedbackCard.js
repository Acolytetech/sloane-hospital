import React from 'react';
import './FeedbackCard.css'; // Import the CSS file for styling

const FeedbackCard = ({ name, feedback, rating }) => {
  // Create an array of stars based on the rating
  const stars = Array.from({ length: 5 }, (_, index) => index < rating);

  return (
    <div className="feedback-card">
      <p className="feedback-card__feedback">{feedback}</p>
      <div className="feedback-card__rating">

        {stars.map((filled, index) => (
          <span key={index} className={filled ? 'star filled' : 'star'}>★</span>
        ))}
      </div>
      <h3 className="feedback-card__name">{name}</h3>

    </div>
  );
};

export default FeedbackCard;
