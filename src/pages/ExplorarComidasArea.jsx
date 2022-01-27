import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import ApiContext from '../Context/ApiContext';
import '../css/CustomSelect.css';

export default function ExplorarComidasArea() {
  const [area, setArea] = useState([]);
  const [filter, setFilter] = useState('All');
  const [apiFilter, setApiFilter] = useState([]);
  const { getPathName, returnApi } = useContext(ApiContext);

  const fetchArea = () => (
    fetch('https://www.themealdb.com/api/json/v1/1/list.php?a=list')
      .then((resp) => resp.json())
      .then((r) => setArea(r.meals))
  );

  const fetchNewArea = () => {
    if (filter !== 'All') {
      fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${filter}`)
        .then((resp) => resp.json())
        .then((r) => setApiFilter(r.meals));
    }
  };

  const renderOptions = () => {
    if (area.length !== 0) {
      return (
        <div className="custom-select">
          <select
            value={ filter }
            name="area"
            data-testid="explore-by-area-dropdown"
            onChange={ ({ target }) => setFilter(target.value) }
          >
            <option value="All" data-testid="All-option">All</option>
            {area.map((elem, i) => (
              <option
                key={ i }
                data-testid={ `${elem.strArea}-option` }
                value={ elem.strArea }
              >
                { elem.strArea }
              </option>
            ))}
          </select>
        </div>
      );
    }
  };

  const renderCards = () => {
    const TWELVE = 12;
    if (filter === 'All') {
      return returnApi.map((elem, index) => {
        if (index < TWELVE) {
          return (
            <Link
              to={ `/comidas/${returnApi[index].idMeal}` }
            >
              <div className="cards" data-testid={ `${index}-recipe-card` } key={ index }>
                <img
                  className="img-card"
                  data-testid={ `${index}-card-img` }
                  src={ elem.strMealThumb }
                  alt="thumb"
                />
                <h3
                  className="card__title"
                  data-testid={ `${index}-card-name` }
                >
                  { elem.strMeal }
                </h3>
              </div>
            </Link>
          );
        }
        return null;
      });
    }
    if (apiFilter.length !== 0) {
      return (
        apiFilter.map((elem, i) => {
          if (i < TWELVE) {
            return (
              <Link
                to={ `/comidas/${apiFilter[i].idMeal}` }
              >
                <div className="cards" data-testid={ `${i}-recipe-card` } key={ i }>
                  <img
                    className="img-card"
                    data-testid={ `${i}-card-img` }
                    src={ elem.strMealThumb }
                    alt="thumb"
                  />
                  <h3
                    className="card__title"
                    data-testid={ `${i}-card-name` }
                  >
                    { elem.strMeal }
                  </h3>
                </div>
              </Link>
            );
          }
          return null;
        })
      );
    }
  };

  useEffect(() => {
    fetchNewArea();
  }, [filter]);

  useEffect(() => {
    fetchArea();
    getPathName();
  }, []);

  return (
    <div>
      <Header />
      {renderOptions()}
      {renderCards()}
      <Navbar />
    </div>
  );
}
