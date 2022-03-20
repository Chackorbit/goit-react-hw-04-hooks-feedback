import propTypes from 'prop-types';
import s from './Section.module.css';

export default function Section({ title, children }) {
  return (
    <div className={s.section}>
      <p className={s.title}>{title}</p>
      {children}
    </div>
  );
}
Section.propTypes = {
  title: propTypes.string,
};
