import React,{ useState, useEffect } from 'react';
import logo from './logo.svg';
import ProductList from './components/ProductList/ProductList';
import Cart from "./components/Cart/Cart";
import './App.css';

function App() {

  

  return (
    <div className="App">
      {/* Header */}
      <ProductList />
      <Cart />
      {/* Footer */}
    </div>
  );
}

export default App;
