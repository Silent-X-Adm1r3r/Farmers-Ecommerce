import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import Search from './Search';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <nav className="navbar navbar-expand-md bg-dark p-3">
      <div className="container-fluid d-flex align-items-center justify-content-between">
        
        {/* Logo Section */}
        <div className="navbar-brand">
          <Link to="/"></Link>
          <a href="/">
            <img width="150px" src="/images/logo.png" alt="Logo" />
          </a>
        </div>

        {/* Search Bar Section */}
        <div className="d-flex flex-grow-1 mx-4">
          <Search/>
        </div>

        {/* Cart Section */}
        <div className="text-center">
          <span id="cart" className="ml-3">
            <i className="fa fa-shopping-cart"></i> Cart
          </span>
          <span className="badge bg-primary ms-1" id="cart_count">
            2
          </span>
        </div>

      </div>
    </nav>
  );
}
