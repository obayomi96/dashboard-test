import React from 'react';
import './order.css';

import Table from 'react-bootstrap/Table';

import prod from '../../assets/images/3563071689.jpg'

const Order = () => {
  return (
    <div className="order-div">
      <h3>Order #FC09882</h3>
      <Table  borderless={true} responsive>
        <thead className="t-2">
          <tr >
            <th>Date</th>
            <th>Status</th>
            <th>Distributor</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Aug 3, 2019</td>
            <td>Completed</td>
            <td>Suplias</td>
            <td><h1>₦2,350</h1></td>
          </tr>
        </tbody>
      </Table>
      <Table responsive>
        <thead>
          <tr>
            <th>Product</th>
            <th>Qty</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <img className="img-tb" src={prod} alt="product" />
              Nivea Fair & Bright Body…
            </td>
            <td>4</td>
            <td>23,00</td>
          </tr>
          <tr>
            <td>
              <img className="img-tb" src={prod} alt="product" />
              Nivea Fair & Bright Body…
            </td>
            <td>4</td>
            <td>11,00</td>
          </tr>
          <tr>
            <td>
            </td>
            <td></td>
            <td>Total - <b>₦2,350</b></td>
          </tr>
        </tbody>
      </Table>
      <button>
        Edit order
      </button>
    </div>
  );
}

export default Order;
