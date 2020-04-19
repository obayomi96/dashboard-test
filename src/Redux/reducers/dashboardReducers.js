import {
  GET_BUYER, 
  GET_ORDERS,
  GET_ORDER_ITEMS,
  GET_WEEKLY,
  GET_WEEKLY_ITEMS,
  GET_PRODUCTS,
} from '../actions/types';


export const initialState = {
  buyer: {},
  orders: [],
  orderItems: [],
  weelky: [],
  weekly_items: [],
  products: [],
};

export const dashboardReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_BUYER:
      return {
        ...state,
        buyer: action.payload,
      };
    case GET_ORDERS:
      return {
        ...state,
        orders: action.payload,
      };
    case GET_ORDER_ITEMS:
      return {
        ...state,
        orderItems: action.payload,
      }
      case GET_WEEKLY:
      return {
        ...state,
        weekly: action.payload,
      }
      case GET_WEEKLY_ITEMS:
      return {
        ...state,
        weeklyItems: action.payload,
      }
      case GET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      }
    default:
      return state;
  }
};
