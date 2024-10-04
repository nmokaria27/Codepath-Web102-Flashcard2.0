import React, { useState } from 'react';

function CelebrityCard({ celebrity, onNext, onPrevious }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [userGuess, setUserGuess] = useState('');
  const [feedback, setFeedback] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userGuess.toLowerCase() === celebrity.name.toLowerCase()) {
      setFeedback('Correct! 🎉');
    } else {
      setFeedback('Incorrect. Try again! 🤔');
    }
    setIsFlipped(true);
  };

  const handleNext = () => {
    setIsFlipped(false);
    setUserGuess('');
    setFeedback('');
    onNext();
  };

  const handlePrevious = () => {
    setIsFlipped(false);
    setUserGuess('');
    setFeedback('');
    onPrevious();
  };

  return (
    <div className={`card ${isFlipped ? 'flipped' : ''}`}>
      <div className="card-inner">
        <div className="card-front">
          <img src={celebrity.image} alt="Celebrity" />
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={userGuess}
              onChange={(e) => setUserGuess(e.target.value)}
              placeholder="Enter your guess"
            />
            <button type="submit">Guess! 🤔</button>
          </form>
          {feedback && <p className={`feedback ${feedback.startsWith('Correct') ? 'correct' : 'incorrect'}`}>{feedback}</p>}
        </div>
        <div className="card-back">
          <p className="celebrity-name">{celebrity.name}</p>
        </div>
      </div>
      <div className="navigation">
        <button onClick={handlePrevious}>⬅️ Previous</button>
        <button onClick={handleNext}>Next ➡️</button>
      </div>
    </div>
  );
}

export default CelebrityCard;