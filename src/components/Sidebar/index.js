import React from 'react';
import './sidebar.css';

const imgUrl = "https://via.placeholder.com/50";

const Sidebar = () => {
  return (
    <div className="sidebar-div">
      <div className="sidebar-header">
        <div className="sidebar-img-div">
          <img className="sidebar-img" alt="" src={imgUrl} />
        </div>
        <div className="header-div-2">
          <p><b>Reckit Benckiser</b></p>
          <p style={{color: 'gray'}}>Kendra Badmus</p>
        </div>
      </div>
      <div className="sidebar-inner-div">
        <ul>
          <li className="dash">Dashboard</li>
        </ul>
        <ul>
          <li className="grp">Group A</li>
          <li>Manufacturers</li>
          <li>Selles <span className="label">2</span></li>
          <li>Buyers</li>
        </ul>
        <ul>
          <li className="grp">Group B</li>
          <li>Areas <span className="label">2</span></li>
          <li>Distributors</li>
          <li>Brands</li>
        </ul>
        <ul>
          <li className="grp">Group C</li>
          <li>Information</li>
          <li>Promotion</li>
        </ul>
      </div>
      <div>
        <p className="sidebar-footer">SALES MANAGER</p>
      </div>
    </div>
  );
}

export default Sidebar;
