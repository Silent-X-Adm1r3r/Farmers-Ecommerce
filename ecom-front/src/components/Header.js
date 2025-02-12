import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import Search from './Search';
import { Link } from 'react-router-dom';

export default function Header({cartItems}) {
  return (
    <nav className="navbar navbar-expand-md bg-green p-3">
      <div className="container-fluid d-flex align-items-center justify-content-between">
        
        {/* Logo Section */}
        <div className="navbar-brand">
          <Link to="/">
            <img width="150px" src="/images/logo.png" alt="Logo" /></Link>
        </div>

        {/* Search Bar Section */}
        <div className="d-flex flex-grow-1 mx-4">
          <Search/>
        </div>

        {/* Cart Section */}
        <div className="text-center">
          <Link to={"/Cart"}>
            <span id="cart" className="ml-3">
            <i className="fa fa-shopping-cart"></i> Cart</span>
            <span className="badge bg-primary ms-1" id="cart_count">
              {cartItems.length}
            </span>
          </Link>
            
        </div>

      </div>
    </nav>
  );
}
