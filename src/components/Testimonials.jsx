import { useState } from 'react';
import './Testimonials.css';

const Feedback = () => {
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you for your ${rating}-star feedback!`);
    setRating(0);
    setFeedback('');
  };

  return (
    <div className="page-container" id="feedback-page">
      <div className="page-header">
        <h1>Feedback</h1>
        <p className="subtitle">Help us improve with your suggestions</p>
      </div>
      
      <div className="feedback-container">
        <div className="card">
          <h3>Share Your Thoughts</h3>
          
          <div className="rating-section">
            <p>How would you rate your experience?</p>
            <div className="stars">
              {[1,2,3,4,5].map(star => (
                <button
                  key={star}
                  className={`star-btn ${star <= rating ? 'active' : ''}`}
                  onClick={() => setRating(star)}
                  type="button"
                >
                  ★
                </button>
              ))}
            </div>
            <p className="rating-text">{rating > 0 ? `You rated: ${rating} stars` : 'Select a rating'}</p>
          </div>
          
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>What can we improve?</label>
              <textarea 
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                rows="5"
                placeholder="Your feedback helps us grow..."
              ></textarea>
            </div>
            
            <div className="form-group">
              <label>Category</label>
              <select>
                <option>General Feedback</option>
                <option>Feature Request</option>
                <option>Bug Report</option>
                <option>UI/UX Suggestion</option>
              </select>
            </div>
            
            <div className="checkbox-group">
              <input type="checkbox" id="contact-permission" />
              <label htmlFor="contact-permission">You may contact me about this feedback</label>
            </div>
            
            <button type="submit" className="submit-btn">Submit Feedback</button>
          </form>
        </div>
        
        <div className="feedback-info">
          <h4>💡 Why your feedback matters</h4>
          <p>We review every submission and use it to prioritize improvements. Your insights directly shape our roadmap.</p>
        </div>
      </div>
    </div>
  );
};

export default Feedback;