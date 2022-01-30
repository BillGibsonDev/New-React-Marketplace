import { useState, useEffect } from 'react';
import axios from 'axios';
import GlobalStyles from './GlobalStyles';

// router
import { Routes, Route } from 'react-router-dom';

// components
import Nav from './components/Nav';
import Footer from './components/Footer';

// pages
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import CartPage from './pages/CartPage';
import CategoryPage from './pages/CategoryPage';

function App() {

  const [ products, setProducts ] = useState([]);
  const [ cart, setCart ] = useState([]);


  useEffect(() => {
    function handleProducts(){
      axios.get(`https://fakestoreapi.com/products`)
      .then(function(response){
        console.log(response.data)
        setProducts(response.data)
      })
    }
    handleProducts();
  }, []);
  

  return (
    <>
      <GlobalStyles />

      <Nav />

      <Routes>
            <Route path='/' exact element={<HomePage products={products} />} />

            <Route path="/:id" exact element={<ProductPage products={products} />} />

            <Route path="/:category" exact element={<CategoryPage products={products} />} />

            <Route path="/cart" exact element={<CartPage products={products} />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
