import React from 'react';
import { AbortedDeferredError, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Collection from './pages/collection';
import About from './pages/About';
import Contact from './pages/contact';
import Product from './pages/product';
import Cart from './pages/cart';
import Login from './pages/login';
import Placeorder from './pages/Placeorder';
import Orders from './pages/Orders';
import Navbar from './components/Navbar';
import Fotter from './components/Fotter';
import SearchBar from './components/SearchBar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Verify from './pages/Verify';

const App = () => {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
      <ToastContainer/>
      <Navbar/>
      <SearchBar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/collection' element={<Collection/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/product/:productId' element={<Product/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/place-order' element={<Placeorder/>}/>
      <Route path='/orders' element={<Orders/>}/>
      <Route path='/verify' element={<Verify/>}/>
      </Routes>
      <Fotter/>
    </div>
  );
}

export default App;
