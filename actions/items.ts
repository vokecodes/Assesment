import axios from 'axios';
import {BASE_URL} from '../constants/config';
import {CART_ITEMS, CATEGORIES, CATEGORY, ITEMS} from '../constants/types';
import {AppDispatch} from '../store';
import {CartProps} from '../utils/Interfaces';

export const setCategory =
  (selectedCategory: string | any) => (dispatch: AppDispatch) => {
    dispatch({type: CATEGORY, payload: selectedCategory});
  };

export const getCategories = () => (dispatch: AppDispatch) => {
  axios.get(`${BASE_URL}/categories.php`).then(({data}) => {
    const {categories} = data;
    dispatch({
      type: CATEGORIES,
      payload: categories.slice(0, 6),
    });
  });
};

export const getItems =
  (selectedCategory: string) => (dispatch: AppDispatch) => {
    axios.get(`${BASE_URL}/filter.php?c=${selectedCategory}`).then(({data}) => {
      const {meals} = data;
      dispatch({
        type: ITEMS,
        payload: meals.slice(0, 5),
      });
    });
  };

export const setCart =
  (cartItems: CartProps | any) => (dispatch: AppDispatch) => {
    dispatch({
      type: CART_ITEMS,
      payload: cartItems,
    });
  };
