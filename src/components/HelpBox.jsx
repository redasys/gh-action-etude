import './HelpBox.css';
/* eslint-disable react/prop-types */
function HelpBox({ title, text }) {
  return (
    <article className="help-box">
      <h2>{title}</h2>
      <p>{text}</p>
    </article>
  );
}

export default HelpBox;
