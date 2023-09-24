import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Footer from './Components/Footer';
import CartList from './Components/CartList';


const App = () => {
  
   // Define an array of product objects with their details.
  const [products] = useState([
    {
        url: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/88916ece-6304-481a-8ae1-a845fb251cb7/air-jordan-6-retro-shoes-4m3b9d.png',
        name: 'Nike Air Jorden Shoes',
        category: 'Shoes',
        seller: 'NIKE Seller',
        price: 19999
      },
      {
        url: 'https://cdn1.smartprix.com/rx-i90lUSCYm-w1200-h1200/90lUSCYm.jpg',
        name: 'boAt Primia Smartwatch',
        category: 'Watches',
        seller: 'Boat Ltd',
        price: 4999
      },
      {
        url: 'https://i.dell.com/sites/csimages/App-Merchandizing_Images/all/laptop-category-latitude-14-9440-lf-rf-800x620.png',
        name: 'DELL Laptop',
        category: 'Laptops',
        seller: 'DELL Laptops',
        price: 50000
      },
      {
        url: 'https://m.media-amazon.com/images/I/51pSyU50WeS._AC_UF1000,1000_QL80_.jpg',
        name: 'Security WiFi Camera',
        category: 'CCTV',
        seller: 'Camron LTD',
        price: 4000
      },
      {
        url: 'https://m.media-amazon.com/images/I/61uxKvea0OL._SX425_.jpg',
        name: 'Adidas Football - FIFA',
        category: 'Football',
        seller: 'Adidas Football',
        price: 2999
      },
      {
        url: 'https://rukminim1.flixcart.com/image/416/416/xif0q/mug/z/m/l/coder-fuel-design-best-gift-for-engineers-on-birthday-color-original-imaggd4p5mwgybqk.jpeg?q=70',
        name: 'Coffee Mug for Coader',
        category: 'Cup',
        seller: 'Mugs Ltd',
        price: 349
      },
      {
        url: 'https://m.media-amazon.com/images/I/61p908UjaZL.jpg',
        name: 'Mens T-Shirt',
        category: 'Mens Cloths',
        seller: 'Men T-Shirts',
        price: 649
      },
      {
        url: 'https://rukminim1.flixcart.com/image/832/832/xif0q/jean/p/a/z/8-9-years-110121133dark-blue-pantaloons-junior-original-imaggg7hddnzngvj.jpeg?q=70',
        name: 'Mens Jeans',
        category: 'Mens Cloths',
        seller: 'Men Jeans',
        price: 1399
      },
      {
        url: 'https://i.pinimg.com/736x/13/13/9a/13139ad318ac15508718140ac9e03f06.jpg',
        name: 'Women Casual Top',
        category: 'Women Cloths',
        seller: 'Women Top',
        price: 2399
      },
      {
        url: 'https://m.media-amazon.com/images/I/61e5EIR-LhL._UX679_.jpg',
        name: 'Women Jeans',
        category: 'Women Cloths',
        seller: 'Women Jeans',
        price: 1299
      },
      {
        url: 'https://m.media-amazon.com/images/I/611mbcpYzFL._SX522_.jpg',
        name: 'Cycle',
        category: 'Sports Fitness',
        seller: 'Fitness Freak',
        price: 10999
      },
      {
        url: 'https://m.media-amazon.com/images/I/81pZSSuX3pL._SX522_.jpg',
        name: 'Tred Mill',
        category: 'Sports Fitness',
        seller: 'Fitness Junkey',
        price: 18999
      },
])

 // Define a state to manage the cart items.
 const [cart, setCart] = useState([]);

 // Function to add a product to the cart.
 const addToCart = (data) => {
   setCart([...cart, { ...data, quantity: 1 }]);
 };

 return (
   <div>
     <Router>
       {/* Render the Navbar component and pass the cart item count as a prop */}
       <Navbar count={cart.length} />
       <Routes>
         {/* Define routes for different pages */}
         <Route path="/totalitycorp-frontend-challenge/" element={<Home products={products} addToCart={addToCart} />} />
         <Route path="/totalitycorp-frontend-challenge/CartList" element={<CartList Cart={cart} />} />
       </Routes>
       {/* Render the Footer component */}
       <Footer />
     </Router>
   </div>
 );
}

export default App;