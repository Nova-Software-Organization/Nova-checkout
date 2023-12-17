import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { CartProvider } from './context/cart/CartContext.tsx';
import { Router } from "./router/router.tsx";
import { GlobalStyle } from './styles/global';
import { defaultTheme } from './styles/themes/default.ts';

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <CartProvider>
          <Router />
        </CartProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  );
}