import propTypes from 'prop-types';
import s from './FeedbackOptions.module.css';

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <div className={s.container}>
      {options.map(button => (
        <button
          className={s.button}
          key={button}
          onClick={() => onLeaveFeedback(button)}
        >
          {button}
        </button>
      ))}
    </div>
  );
}

FeedbackOptions.propTypes = {
  options: propTypes.array,
};
