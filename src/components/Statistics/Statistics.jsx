import propTypes from 'prop-types';
import s from './Statistics.module.css';

export default function Statistics({
  good,
  neutral,
  bad,
  countTotalFeedback,
  countPositiveFeedbackPercentage,
}) {
  return (
    <ul className={s.ul}>
      <li className={s.good}>good: {good}</li>
      <li className={s.neutral}>neutral: {neutral}</li>
      <li className={s.bad}>bad: {bad}</li>
      <li>Total: {countTotalFeedback()}</li>
      <li>Positive feedback: {countPositiveFeedbackPercentage()} %</li>
    </ul>
  );
}
Statistics.propTypes = {
  good: propTypes.number,
  neutral: propTypes.number,
  bad: propTypes.number,
};
