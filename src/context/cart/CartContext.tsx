import { ReactNode, createContext, useContext, useEffect, useReducer } from 'react';
import { CartContextProps, CartState } from './ICartContext';
import { CartReducer } from './ts/CartReducer';

const CartContext = createContext<CartContextProps | undefined>(undefined);
const storedCart = localStorage.getItem('cart');
const initialCartState: CartState[] = storedCart ? JSON.parse(storedCart) : [];

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, cartDispatch] = useReducer(CartReducer, initialCartState);

  function incrementQuantity(productId: string) {
    cartDispatch({ type: 'INCREMENT_QUANTITY', payload: productId });
  }

  function decrementQuantity(productId: string) {
    cartDispatch({ type: 'DECREMENT_QUANTITY', payload: productId });
  }

  function removeItem(productId: string) {
    cartDispatch({ type: 'REMOVE_FROM_CART', payload: productId });
  }

  function updateQuantity(newQuantity: number, productId: string) {
    const updatedCart = cart.map((item) => {
      if (item.product.id === productId) {
        return { ...item, quantity: newQuantity };
      }
      return item;
    });

    cartDispatch({ type: 'UPDATE_QUANTITY', payload: updatedCart });
  }

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  return (
    <CartContext.Provider
      value = {{ cart, cartDispatch, incrementQuantity, decrementQuantity, updateQuantity, removeItem }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
