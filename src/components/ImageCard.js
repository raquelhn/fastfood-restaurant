import React, { useContext, useState, useEffect } from "react";
import {URL_BACKEND,URL_BACKEND_HEROKU } from "../environment/environment";
import MenuContext from "../context/menuContext";
import PlatoItem from "./PlatoItem";
import { getPlatosByCategoriaId } from "../services/categoria";
import Footer from "./Footer";


const ImageCard = () => {

  const [platos, setPlatos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState('')
  

  useEffect(()=>{
    fetch(`${URL_BACKEND_HEROKU}/carta`)
    .then(res=>res.json())
    .then(data=>
      {
        setPlatos(data.platos)
        setIsLoading(false)
      })
    .catch(err=>console.log(err))
  },[term]) //whenever term changes, it changes the api
  


  return (
  <>
    <main>
      <div class="main-wrapper main-wrapper-carta">
        <div className="myBtnContainer">
            <button className="btn active" Onclick="filterSelection('all')"> Todos</button>
            <button className="btn" onclick="filterSelection('drinks')"> Bebidas</button>
            <button className="btn" onclick="filterSelection('fastFood')">Fast-food</button>
            <button className="btn" onclick="filterSelection('dessert')"> Postres</button>
        </div>

        <div className="carta_platos">
          {platos.map(objPlato=>(
            <PlatoItem key={objPlato.plato_id} data={objPlato}/>
          ))}
        </div>
        </div>
    </main>
   </>
  )
}

export default ImageCard