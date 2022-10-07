import React from 'react';

const FeedbackOptions = ({ onLeaveFeedback }) => (
  <div className="Counter__controls">
    <button type="button" name="good" onClick={onLeaveFeedback}>
      Good
    </button>
    <button type="button" name="neutral" onClick={onLeaveFeedback}>
      Neutral
    </button>
    <button type="button" name="bad" onClick={onLeaveFeedback}>
      Bad
    </button>
  </div>
);

export default FeedbackOptions;