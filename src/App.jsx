import React, { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './components/Nav/Navbar';
import Header from './components/Header';
import Card from './components/Card';
import Footer from './components/Footer';


const App = () => {
  const [category,setCategory] = useState("general");
  return (
    
    <>
    
    <Navbar setCategory={setCategory}/>
    <Header category={category}/>
   <Card category={category}/>
   <Footer setCategory={setCategory}/>
    </>
  )
}

export default App