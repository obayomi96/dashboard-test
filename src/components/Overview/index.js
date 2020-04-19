import React from 'react';
import './overview.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilter } from '@fortawesome/free-solid-svg-icons'

import Table from 'react-bootstrap/Table';

const Overview = () => {
  return (
    <div className="overview-div">
      <h3>Overview</h3>
      <div className="small-nav">
        <div className="navs">
          <ul>
            <li>Orders</li>
            <li>Weekly order</li>
            <li>In cart</li>
          </ul>
        </div>
        <div className="small-nav-2">
          <div className="r-nav">
            <button
              type="button"
              className="btn resource-button__small--white resource-button__small--left
              r-nav-btn"
            >
              <FontAwesomeIcon className="filter" icon={faFilter} />
              Filter
            </button>
          </div>
          <div className="search-div">
            <input type="search" className="nav-search" placeholder="Search order..." />
          </div>
        </div>
      </div>
      <Table responsive>
        <thead>
          <tr>
            <th>Status</th>
            <th>Order Ref.</th>
            <th>Date</th>
            <th>Items</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><div className="color colored-col"></div></td>
            <td>#FC09910</td>
            <td> Aug 8, 2019</td>
            <td>4</td>
            <td>₦4,211</td>
          </tr>
          <tr>
          <td><div className="color colored-col-2"></div></td>
            <td>#FC09882</td>
            <td>Aug 3, 2019</td>
            <td>2</td>
            <td>₦2,350</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default Overview;
