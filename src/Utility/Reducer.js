import { Type } from "./Action.type";
// const [state, dispatcher]=useReducer(Reducer, InitialState);

export const initialState = {
  basket: [],
  user:null,
};
export const reducer = (state, action) => {
  switch (action.type) {
    case Type.ADD_TO_BASKET:
      // return{...state, basket:[...state.basket, action.item]}; //step one, we are updadint ing the state with the new item see the ff.
      // Now we are checking the same products that are already there in the basket
      const existingItem = state.basket.find(
        (item) => item.id === action.item.id
      ); //check if the item matches with the next item,keep action.item and keep the amount, update
      if (!existingItem) {
        return {
          ...state,
          basket: [...state.basket, { ...action.item, amount: 1 }], //keep the amount and add 1
        };
      } else {
        const updatedBasket = state.basket.map((item) => {
          return item.id === action.item.id
            ? { ...item, amount: item.amount + 1 }
            : item;
        });
        return {
          ...state,
          basket: updatedBasket,
        };
      }

    case Type.REMOVE_FROM_BASKET:
      const index = state.basket.findIndex((item) => item.id === action.id);
      let newBasket = [...state.basket];

      if (index >= 0) {
        //5 //4
        if (newBasket[index].amount > 1) {
          //[4, 5, 6]  index=1, 0
          newBasket[index] = {
            ...newBasket[index],
            amount: newBasket[index].amount - 1,
          };
        } else {
          newBasket.splice(index, 1); //remove the item from the basket
        }
      }
      return {
        ...state,
        basket: newBasket,
      };
      case Type.SET_USER:
      return {
        ...state,
        user: action.user,
      };
    default:
      return state;
  }
};
