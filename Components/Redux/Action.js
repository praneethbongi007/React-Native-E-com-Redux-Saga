import {ADD_TO_CART} from './Constants';
import {REMOVE_FROM_CART, USER_LIST} from './Constants';
export function AddtoCart(item) {
  return {
    type: ADD_TO_CART,
    data: item,
  };
}

export function RemoveFromCart(item) {
  return {
    type: REMOVE_FROM_CART,
    data: item,
  };
}

export function GetUserList() {
  return {
    type: USER_LIST,
  };
}
