import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Footer from '../components/Footer';


const Home = () => {
  return (
    <div>
      <main>
      <div class="carta-home">
        <Link  to={"/menu"}><button class="btn-agregar">Ver Menu</button></Link>
        <img className="foto-home" src="https://cdn.pixabay.com/photo/2019/07/29/05/52/burger-4369973_1280.jpg" alt="Imagen de la carta" />
        </div>        
 
    </main>
    <Footer/>
    </div>
  )
}

export default Home