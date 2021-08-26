import React from 'react';
import style from './Statistics.module.css';

function Statistics({ good, neutral, bad, total, positivePercentage }) {
  return (
    <div>
      <h1>Statistics</h1>
      <ul className={style.statisticsItems}>
        <li className={style.item}>Good: {good}</li>
        <li className={style.item}>Neutural: {neutral}</li>
        <li className={style.item}>Bad: {bad}</li>
        <li className={style.item}>Total: {total}</li>
        <li className={style.item}>Positive feedback: {positivePercentage}</li>
      </ul>
    </div>
  );
}

export default Statistics;
