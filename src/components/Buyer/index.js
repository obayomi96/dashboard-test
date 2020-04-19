import React from 'react';
import './buyer.css';

import usrImg from '../../assets/images/userimage.png'

const Buyer = () => {
  return (
    <div className="buyer-div">
      <p style={{fontSize: '24px', padding: '0 15px'}}><b>Buyer Info</b></p>
      <div className="buyer-person">
        <div className="buyer">
          <img className="buyer-img" alt="person" src={usrImg} />
        </div>
        <div className="buyer buyer-info">
          <p><b>PERSON</b></p>
          <p>Marvelous Ottah</p>
          <p> 07034456172 </p>
        </div>
      </div>
      <div className="buyer buyer-store">
          <p><b>Store</b></p>
          <p>Marvelous Stores (Kiosk)</p>
      </div>  
      <div className="buyer buyer-billing">
        <p><b>BILLING ADDRESS</b></p>
        <p>14, Rosanwo Street, Aguda,
Surulere — Surulere, Lagos</p>
      </div>
      <div className="buyer buyer-balance">
        <p><b>WALLET BALANCE</b></p>
        <p>N4,200.00</p>
      </div>
      <div className="buyer">
        <p><b>RATNG</b></p>
      <p>3.0</p>
      </div>
      <div className="buyer buyer-date">
        <p><b>CREATED ON</b></p>
        <p>Aug. 8, 2019</p>
      </div>
    </div>
  );
}

export default Buyer;
