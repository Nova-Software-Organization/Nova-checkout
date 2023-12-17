export interface Product {
    id: string;
    price: string;
    description: string;
}
  
export interface CartState {
    quantity: number;
    product: Product;
}
  
export interface CartContextProps {
    cart: CartState[];
    cartDispatch: React.Dispatch<CartAction>;
    incrementQuantity: (productId: string) => void;
    decrementQuantity: (productId: string) => void;
    removeItem: (productId: string) => void;
    updateQuantity: (newQuantity: number, productId: string) => void;
}
  
export type CartAction =
    | { type: 'ADD_TO_CART'; payload: Product & { quantity: number } }
    | { type: 'REMOVE_FROM_CART'; payload: string }
    | { type: 'INCREMENT_QUANTITY'; payload: string }
    | { type: 'DECREMENT_QUANTITY'; payload: string }
    | { type: 'UPDATE_QUANTITY'; payload: CartState[]
};