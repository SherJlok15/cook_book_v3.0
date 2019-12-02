import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import FilterPanelContainer from './FilterPanelContainer';

export default function NavBar(props) {
  return(
    <header className="sticky-top">
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <div className="collpase navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="navbar-item">
              <Link to="/recipes/" className="nav-link">Cook Book</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-nav mr-auto">
          <ul className="navbar-nav mr-auto">
            <li className="navbar-item">
              <Link to="/recipes/add/" className="nav-link">Create Recipe</Link>
            </li>
          </ul>
          <div className="navbar-nav mr-auto">
            <div className="d-flex align-items-center">
              <span className="position-relative bg-white border border-radius">
                <input
                className="border-none padding-left-10"
                type="text"
                value={props.navbarSearchValue}
                onChange={(event) => props.navbarGetSearchInputValue(event.target.value)}
                placeholder="Search Recipe"
                />
                <span
                  className="text-danger resetSearch position-absolute span-reset-input"
                  onClick={props.navbarSearchInputResetValue}
                >
                  &times;
                </span>
              </span>
            </div>
          </div>
        </div>
      </nav>
      {useLocation().pathname === "/recipes/" ? <FilterPanelContainer/> : '' }
    </header>
  )
}
