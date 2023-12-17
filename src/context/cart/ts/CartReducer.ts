import { CartAction, CartState } from "../ICartContext";

export function CartReducer(state: CartState[], action: CartAction): CartState[] {
    switch (action.type) {
      case 'ADD_TO_CART':
        {
          const existingProduct = state.find((item) => item.product.id === action.payload.id);
    
          if (existingProduct) {
            return state.map((item) =>
              item.product.id === action.payload.id
                ? { ...item, quantity: item.quantity + action.payload.quantity }
                : item
            );
          } else {
            return [...state, { quantity: action.payload.quantity, product: action.payload }];
          }
        }
    
      case 'REMOVE_FROM_CART':
        return state.filter((item) => item.product.id !== action.payload);
      case 'INCREMENT_QUANTITY':
        return state.map((item) =>
          item.product.id === action.payload ? { ...item, quantity: item.quantity + 1 } : item
        );
      case 'DECREMENT_QUANTITY':
        return state.map((item) =>
          item.product.id === action.payload && item.quantity > 1
            ? { ...item, quantity: item.quantity - 1 }
            : item
        );
      case 'UPDATE_QUANTITY':
        return action.payload;
      default:
        return state;
    }
  }