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
          <li><b>Dashboard</b></li>
        </ul>
        <ul>
          <li>Group A</li>
          <li>Manufacturers</li>
          <li>Sellers</li>
          <li>Buyers</li>
        </ul>
        <ul>
          <li>Group B</li>
          <li>Areas</li>
          <li>Distributors</li>
          <li>Brands</li>
        </ul>
        <ul>
          <li>Group C</li>
          <li>Information</li>
          <li>Promotion</li>
        </ul>
      </div>
      {/* <p style={{width: '100%', fontSize: '30px', padding: '0 5px', fontWeight: 'bold', position: 'relative', bottom: '0', background: 'gray'}}>SALES MANAGER</p> */}
    </div>
  );
}

export default Sidebar;
