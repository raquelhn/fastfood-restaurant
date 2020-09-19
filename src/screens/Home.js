import React from 'react'
import { BrowserRouter as Link } from "react-router-dom";
import Footer from '../components/Footer';


const Home = () => {
  return (
    <div>
      <main>
      <div className="carta-home">
        <Link  to={"/menu"}><button className="btn-agregar">Ver Menu</button></Link>
        <img className="foto-home" src="https://cdn.pixabay.com/photo/2019/07/29/05/52/burger-4369973_1280.jpg" alt="Imagen de la carta" />
        </div>        
 
    </main>
    <Footer/>
    </div>
  )
}

export default Home