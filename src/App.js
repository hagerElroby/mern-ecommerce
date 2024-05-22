import Home from './pages/Home';
import ProductList from './pages/ProductList';
import Product from './pages/Product';
import Register from './pages/Register';
import Login from './pages/Login';
import Cart from './pages/Cart';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import Success from './pages/Success';
import { useSelector } from 'react-redux';
import Profile from './pages/Profile';

function App() {
  const user = useSelector(state => state.user.currentUser);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:category" element={<ProductList />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/success" element={<Success />} />
        <Route path="/login" element={user != null ? <Navigate to="/" replace /> : <Login />} />
        <Route path="/register" element={user != null ? <Navigate to="/" replace /> : <Register />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  )

}

export default App;