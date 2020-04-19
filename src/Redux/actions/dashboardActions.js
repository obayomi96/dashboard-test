import axios from 'axios';

import {
  GET_BUYER, 
  GET_ORDERS,
  GET_ORDER_ITEMS,
  GET_WEEKLY,
  GET_WEEKLY_ITEMS,
  GET_PRODUCTS,
} from './types';

import data from '../../data/buyer.json';

export const fetchBuyer = () => async (dispatch) => {
  // const response = await axios.get('../../data/buyer.json');
  fetch(data)
      .then(res => res.json())
      .then(data => console.log(data))
  console.log('buyer', res);
  if (res.code === 200) {
    dispatch({
      type: GET_BUYER,
      payload: res.data
    });
  }
}

export const fetchOrders = () => async (dispatch) => {
  const response = await axios.get('../../data/order.json');
  console.log('orders', response)
  if (response.code === 200) {
    dispatch({
      type: GET_ORDERS,
      payload: response.data
    })
  }
}

export const fetchOrderItem = () => async (dispatch) => {
  const response = await axios.get('../../data/order_item.json');
  console.log('order items', response)
  if (response.code === 200) {
    dispatch({
      type: GET_ORDER_ITEMS,
      payload: response.data
    })
  }
}

export const fetchWeekly = () => async (dispatch) => {
  const response = await axios.get('../../data/weekly.json');
  console.log('weekly', response);
  if (response.code === 200) {
    dispatch({
      type: GET_WEEKLY,
      payload: response.data
    })
  }
}

export const fetchWeeklyItems = () => async (dispatch) => {
  const response = await axios.get('../../data/weekly.json');
  console.log('weekly items', response)
  if (response.code === 200) {
    dispatch({
      type: GET_WEEKLY_ITEMS,
      payload: response.data
    })
  }
}


export const fetchProducts = () => async (dispatch) => {
  const response = await axios.get('../../data/product.json');
  console.log('product', response);
  if (response.code === 200) {
    dispatch({
      type: GET_PRODUCTS,
      payload: response.data
    })
  }
}
