import {PayloadAction} from '@reduxjs/toolkit';
import {CART_ITEMS, CATEGORIES, CATEGORY, ITEMS} from '../constants/types';

const initialState = {
  selectedCategory: null,
  categories: null,
  items: null,
  cartItems: [],
};

const itemsReducer = (state = initialState, action: PayloadAction) => {
  switch (action.type) {
    case CATEGORY:
      return {
        ...state,
        selectedCategory: action.payload,
      };
    case CATEGORIES:
      return {
        ...state,
        categories: action.payload,
      };
    case ITEMS:
      return {
        ...state,
        items: action.payload,
      };
    case CART_ITEMS:
      return {
        ...state,
        cartItems: action.payload,
      };
    default:
      return state;
  }
};

export default itemsReducer;
