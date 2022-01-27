import React from 'react';
import { Link } from 'react-router-dom';
import drinkIcon from '../images/drinkIcon.svg';
import exporeIcon from '../images/exploreIcon.svg';
import mealIcon from '../images/mealIcon.svg';
import '../css/Navbar.css';

export default function Navbar() {
  return (
    <nav data-testid="footer" className="navbar">
      <div className="navi-container">
        <Link to="/bebidas">
          <img
            src={ drinkIcon }
            alt="drink-icon"
            data-testid="drinks-bottom-btn"
          />
        </Link>
        <Link to="/explorar">
          <img
            src={ exporeIcon }
            alt="explore-icon"
            data-testid="explore-bottom-btn"
          />
        </Link>
        <Link to="/comidas">
          <img
            src={ mealIcon }
            alt="food-icon"
            data-testid="food-bottom-btn"
          />
        </Link>
      </div>
    </nav>
  );
}
