import React from 'react';
import ReactDOM from 'react-dom/client';
import ProductPage from "./pages/ProductPage";
import Header from "./components/header/Header";
import reportWebVitals from './reportWebVitals';
import Basket from "./components/Basket/Busket";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

      <>
          <Header/>
    <ProductPage />
          <Basket />
      </>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
