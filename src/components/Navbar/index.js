import React from 'react';
import './navbar.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faBell } from '@fortawesome/free-solid-svg-icons';

const imgUrl = "https://via.placeholder.com/50";

const Navbar = () => {
  return (
    <div className="nav-div">
      <div className="innder-nav-div">
        <h1 className="nav-title">Buyers</h1>
        <div className="nav-icons">
          <ul>
            <li>
              <FontAwesomeIcon icon={faSearch} />
            </li>
            <li>
              <FontAwesomeIcon icon={faBell} />
            </li>
            <li>
              <img className="nav-img" alt="ector" src={imgUrl} />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
