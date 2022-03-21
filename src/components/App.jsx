import Section from './Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';
import React from 'react';
import { useState } from 'react';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const state = { good, neutral, bad };

  const onLeaveFeedback = clickBtn => {
    if (clickBtn === 'good') {
      setGood(state => state + 1);
    } else if (clickBtn === 'neutral') {
      setNeutral(state => state + 1);
    } else if (clickBtn === 'bad') {
      setBad(state => state + 1);
    }
  };

  const countTotalFeedback = () => {
    return Object.values(state).reduce((accum, number) => {
      return accum + number;
    }, 0);
  };

  const countPositiveFeedbackPercentage = () => {
    if (good === 0) {
      return 0;
    }
    return Math.round((good * 100) / countTotalFeedback());
  };

  const feedBackKeys = Object.keys(state);

  return (
    <div>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={feedBackKeys}
          onLeaveFeedback={onLeaveFeedback}
        />
      </Section>

      <Section title="Section statistic">
        {countTotalFeedback() > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            countTotalFeedback={countTotalFeedback}
            countPositiveFeedbackPercentage={countPositiveFeedbackPercentage}
          />
        ) : (
          <Notification />
        )}
      </Section>
    </div>
  );
}

// export default class App extends React.Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   onLeaveFeedback = tipeClick => {
//     this.setState(preState => ({ [tipeClick]: preState[tipeClick] + 1 }));
//   };

//   countTotalFeedback = () => {
//     return Object.values(this.state).reduce((accum, number) => {
//       return accum + number;
//     }, 0);
//   };

//   countPositiveFeedbackPercentage = () => {
//     if (this.state.good === 0) {
//       return 0;
//     }
//     return Math.round((this.state.good * 100) / this.countTotalFeedback());
//   };

//   render() {
//     const feedBackKeys = Object.keys(this.state);

//     return (
//       <div>
//         <Section title="Please leave feedback">
//           <FeedbackOptions
//             options={feedBackKeys}
//             onLeaveFeedback={this.onLeaveFeedback}
//           />
//         </Section>

//         <Section title="Section statistic">
//           {this.countTotalFeedback() ? (
//             <Statistics
//               good={this.state.good}
//               neutral={this.state.neutral}
//               bad={this.state.bad}
//               countTotalFeedback={this.countTotalFeedback}
//               countPositiveFeedbackPercentage={
//                 this.countPositiveFeedbackPercentage
//               }
//             />
//           ) : (
//             <Notification />
//           )}
//         </Section>
//       </div>
//     );
//   }
// }
