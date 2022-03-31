import { useState, useEffect } from 'react';
import axios from 'axios';
import GlobalStyles from './GlobalStyles';

// router
import { Routes, Route } from 'react-router-dom';

// components
import Footer from './components/Footer';

// pages
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import CartPage from './pages/CartPage';
import CategoryPage from './pages/CategoryPage';
import CategoriesPage from './pages/CatagoriesPage';

// redux
import { useDispatch } from 'react-redux';
import { setItemList } from './redux/actions/cart.js';

function App() {

  const [ products, setProducts ] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);
    function handleProducts(){
      axios.get(`https://fakestoreapi.com/products`)
      .then(function(response){
        setProducts(response.data);
        dispatch(setItemList(response.data));
      })
      .catch(function(error){
        console.log(error)
      })
    }
    handleProducts();
  }, [dispatch]);

  return (
    <>
      <GlobalStyles />

      <Routes>
            <Route path='/' exact element={<HomePage products={products} />} />

            <Route path="/categories" exact element={<CategoriesPage products={products} />} />

            <Route path="/products/:id" exact element={<ProductPage products={products} />} />

            <Route path="/category/:category" exact element={<CategoryPage products={products} />} />

            <Route path="/cart" exact element={<CartPage products={products} />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
