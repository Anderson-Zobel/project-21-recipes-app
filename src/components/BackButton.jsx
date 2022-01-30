import React from 'react';
import { useHistory } from 'react-router-dom';
import backIcon from '../images/go-back-arrow.svg';
import '../css/BackButton.css';

export default function BackButton() {
  const history = useHistory();
  return (
    <input
      type="image"
      onClick={ () => history.goBack() }
      src={ backIcon }
      alt="food page"
      className="back-icon"
    />
  );
}
