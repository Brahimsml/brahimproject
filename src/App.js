import './App.css';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Menu from './pages/Menu';
import About from './pages/About';
import Contact from './pages/Contact';
import Cart from './pages/Cart';
import Login from './pages/Login';

import { AuthProvider } from './Components/AuthContext';
import { CartProvider } from './Context/CartContext';

const App = () => (
  <AuthProvider>
    <CartProvider>
      <Router>
        <div className="app-container">

          {/* Sidebar */}
          <NavBar />

          {/* Main Content */}
          <div className="main-content">
            <Routes>
              <Route index element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/menu" element={<Menu />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/login" element={<Login />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>

            {/* Footer inside main-content so it's never covered */}
            <Footer />
          </div>

        </div>
      </Router>
    </CartProvider>
  </AuthProvider>
);

export default App;
