import Section from './Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';
import React from 'react';

export default class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = tipeClick => {
    this.setState(preState => ({ [tipeClick]: preState[tipeClick] + 1 }));
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((accum, number) => {
      return accum + number;
    }, 0);
  };

  countPositiveFeedbackPercentage = () => {
    if (this.state.good === 0) {
      return 0;
    }
    return Math.round((this.state.good * 100) / this.countTotalFeedback());
  };

  render() {
    const feedBackKeys = Object.keys(this.state);

    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={feedBackKeys}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>

        <Section title="Section statistic">
          {this.countTotalFeedback() ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              countTotalFeedback={this.countTotalFeedback}
              countPositiveFeedbackPercentage={
                this.countPositiveFeedbackPercentage
              }
            />
          ) : (
            <Notification />
          )}
        </Section>
      </div>
    );
  }
}
