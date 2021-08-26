import React from 'react';
import style from './Feedback.module.css';

function Feedback({ onLeaveFeedback }) {
  return (
    <div className={style.buttons}>
      <h1>Please leave feedback</h1>
      <button type="submit" onClick={onLeaveFeedback} name="good">
        Good
      </button>
      <button type="submit" onClick={onLeaveFeedback} name="neutral">
        Neutural
      </button>
      <button type="submit" onClick={onLeaveFeedback} name="bad">
        Bad
      </button>
    </div>
  );
}

export default Feedback;
