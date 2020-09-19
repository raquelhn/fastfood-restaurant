import React, { useContext,useState } from "react";
import {AppContext} from "../context/appContext";

 const PlatoItem = ({ data }) => {
  let {carrito,setCarrito} = useContext(AppContext);
	
	let [cantidad,setCantidad] = useState(1);
 
  function updateCantidad(e){
		setCantidad(e.target.value);
  }


  function agregarProducto(data){
		let nProducto = {
			id: data.plato_id,
			nombre: data.plato_nom,
			precio: data.plato_pre,
			cantidad: parseInt(cantidad)
		}
		console.log(nProducto)
		let nCarrito = carrito;
		let encontrado = false;
		for(let item of nCarrito){ // Recorro los items del carrito
			if(item.id===data.plato_id){ // Si encuentro el producto en el carrito
				item.cantidad += nProducto.cantidad; //sumo la cantidad que compro a la existente
				encontrado = true;
				break;
			}
		}
		if(!encontrado) //si no se encontró el producto en el carrito
			nCarrito = carrito.concat(nProducto); //Agrego el producto
		console.log(nCarrito);
		localStorage.setItem("carrito",JSON.stringify(nCarrito));
		setCarrito(nCarrito);
		window.alert("Producto agregado!");
	}
  
  return (
    <div>
      <div className="column">
      <div className="content">
        <img src={data.plato_img} alt="Imagen del plato" />
        <h4 className="carta__titulo">{data.plato_nom}</h4>
        <span className="carta__precio">S/ {data.plato_pre}</span>
        <div className="botones">
          <input type="number" className="cajaCantidad"
         defaultValue="1" min="1" onChange={updateCantidad}/>
          <button className="btnCarrito" onClick={() => {
          agregarProducto(data);
        }}>Agregar al carrito</button>
        </div>
      </div>
      </div>
    </div>
  );
}

export default PlatoItem