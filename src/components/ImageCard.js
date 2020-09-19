import React, { useState, useEffect } from "react";
import {URL_BACKEND_HEROKU } from "../environment/environment";
import PlatoItem from "./PlatoItem";



const ImageCard = () => {

  const [platos, setPlatos] = useState([]);
  const [term, setTerm] = useState('')
  

  useEffect(()=>{
    fetch(`${URL_BACKEND_HEROKU}/carta`)
    .then(res=>res.json())
    .then(data=>
      {
        setPlatos(data.platos)
        
      })
    .catch(err=>console.log(err))
  },[term]) //whenever term changes, it changes the api
  


  return (
  <>
    <main>
      <div className="main-wrapper main-wrapper-carta">

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