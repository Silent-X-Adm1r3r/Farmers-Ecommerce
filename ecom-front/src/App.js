import './App.css';
import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PDetails from './pages/PDetails';
import { useState } from 'react';
import {Slide, ToastContainer} from 'react-toastify'
import'react-toastify/ReactToastify.css';
function App() {
  const [cartItems, setCartItems] = useState([]);
 
  return (
    <Router>
      <div className="App">
        <ToastContainer theme='dark' position="top-center" transition={Slide}/>
        <Header cartItems={cartItems}/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<Home />} />
            <Route path="/product/:id" element={<PDetails cartItems={cartItems} setCartItems={setCartItems} />} />
          </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
