import React, { Component } from 'react';
import PropType from 'prop-type';

import FeedbackOptions from './Feedback/Feedback';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';

class App extends Component {
  state = { good: 0, neutral: 0, bad: 0, total: 0, positivePercentage: 0 };

  handleIncrement = e => {
    const { name } = e.target;
    this.setState(state => ({ [name]: state[name] + 1 }));
    this.countTotalFeedback();
  };

  countTotalFeedback = () => {
    this.setState(state => ({
      total: state.good + state.neutral + state.bad,
    }));
    this.countPositiveFeedbackPercentage();
  };

  countPositiveFeedbackPercentage() {
    this.setState(state => ({
      positivePercentage:
        (state.good * 100 + state.neutral * 50 + state.bad * 0) / state.total,
    }));
  }

  render() {
    const { good, neutral, bad, total, positivePercentage } = this.state;

    return (
      <div>
        <FeedbackOptions onLeaveFeedback={this.handleIncrement} />
        {total ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage}
          />
        ) : (
          <Notification message="No feedback given" />
        )}
      </div>
    );
  }
}
App.propType = {
  good: PropType.number,
  neutral: PropType.number,
  bad: PropType.number,
  total: PropType.number,
  positivePercentage: PropType.number,
};

export default App;
