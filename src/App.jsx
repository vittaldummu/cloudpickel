import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Products from './pages/Products.jsx';
import Training from './pages/Training.jsx';
import Placement from './pages/Placement.jsx';
import WhyChooseUs from './pages/WhyChooseUs.jsx';
export default function App(){return (<Router><div className='flex flex-col min-h-screen'><Navbar /><main className='flex-grow'><Routes><Route path='/' element={<Home/>}/><Route path='/about' element={<About/>}/><Route path='/products' element={<Products/>}/><Route path='/training' element={<Training/>}/><Route path='/placement' element={<Placement/>}/><Route path='/why' element={<WhyChooseUs/>}/></Routes></main><Footer/></div></Router>);
}
