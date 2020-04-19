import React from 'react';
import './dashboard.css';

import Sidebar from '../Sidebar';
import Overview from '../Overview';
import Order from '../Order';
import Buyer from '../Buyer';


const Dashboard = () => {
  return (
    <div className="dash-div">
      <Sidebar />
      <section className="main-dash">
        <Buyer />
        <div className="overview">
          <section>
            <Overview />
          </section>
          <section>
            <Order />
          </section>
        </div>
      </section>
    </div>
  );
}

export default Dashboard;
