import logo from './logo.svg';
import './App.css';
import { Navbar } from './components/Navbar/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Shop } from './Pages/Shop';
import { ShopCategory } from './Pages/ShopCategory';
import { Product } from './Pages/Product';
import { LoginSighUp } from './Pages/LoginSighUp';
import { Cart } from './Pages/Cart';
import men_banner from './assets/banner_mens.png'
import women_banner from './assets/banner_women.png'
import {Footer} from './components/Footer/Footer'
import kids_banner from './assets/banner_kids.png'

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Shop />} />
          <Route path='/mens' element={<ShopCategory banner={men_banner} category='men' />} />
          <Route path='/womens' element={<ShopCategory banner={women_banner} category='women' />} />
          <Route path='/kids' element={<ShopCategory banner={kids_banner} category='kid' />} />
          <Route path='/product' element={<Product />}>
            <Route path=':productId' element={<Product />} />
          </Route>
          <Route path='/cart' element={<Cart />} />
          <Route path='/login' element={<LoginSighUp />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
