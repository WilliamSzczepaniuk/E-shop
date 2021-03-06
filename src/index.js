import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ProductsProvider } from "./Providers/Products";
import { BrowserRouter } from "react-router-dom";
import { CartProvider } from "./Providers/Cart";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./styles/theme.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <ProductsProvider>
        <CartProvider>
          <ThemeProvider theme={theme}>
            <App />
          </ThemeProvider>
        </CartProvider>
      </ProductsProvider>
    </React.StrictMode>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
