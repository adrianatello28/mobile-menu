import React from 'react';
import './ButtonLink.css';
import iconArrow from '/src/assets/images/icon-arrow.svg';

const ButtonLink = ({ text }) => {
  return (
    <a href="#" className="button-link">
      <span className="button-link__text">{text}</span>
      <img src={iconArrow} alt="Arrow" className="button-link__icon" />
    </a>
  );
};

export default ButtonLink;
