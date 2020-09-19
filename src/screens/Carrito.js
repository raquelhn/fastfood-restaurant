import React, { useContext, useState, useEffect } from 'react';
import { AppContext } from '../context/appContext';
import Footer from '../components/Footer';

function Carrito(){
	let {carrito,setCarrito} = useContext(AppContext);
	let [total,setTotal] = useState(0);
	  
	  console.log(carrito)
  
	useEffect(() => {
		calcularTotal();
	},[carrito]); //Se ejecuta cada vez que carrito cambia
	function calcularTotal(){
		let suma = carrito.reduce((sum,item) => sum + item.precio*item.cantidad, 0);
		setTotal(suma.toFixed(2));
  }
  
	function quitarProducto(idprod){
		// idprod= 10 <= el id que quiero quitar de la lista
		// carrito [3,6,9,10,45,23]
		let nCarrito = carrito.filter(item=>item.id!==idprod);
		console.log(nCarrito);
		setCarrito(nCarrito);
  }
  
	function comprar(){
		let fecha = new Date();
		let formato_fecha = fecha.getDate() + "/" + (fecha.getMonth() +1) + "/" + fecha.getFullYear();
		let venta = {
			"usuario_id" : 1, 
			"fecha" : formato_fecha,
			"total": total,
			"detalle" : carrito
    	}

    
		fetch('https://5f394f3441c94900169c0470.mockapi.io/ventas', {
		   method: 'POST',
		   body: JSON.stringify(venta),
		   headers: {
		   	"Content-type":"application/json; charset=UTF-8"
		   }
		})
		.then(response=>response.json())
		.then(json=>{
			setCarrito([]);
			alert("Tu compra ha sido satisfactoria!");
		});
	}
	return(
		<>
		<div id="carrito">
			<h2>Carrito</h2>
			<table className="tabla_carrito">
				<thead>
					<tr>
						<td>Nombre</td>
						<td>Cantidad</td>
						<td>Precio</td>
						<td>Subtotal</td>
						<td>Acciones</td>
					</tr>
				</thead>
				<tbody>
					{carrito.map((item)=>{
						return(
							<tr key={item.id}>
								<td>{item.nombre}</td>
								<td>{item.cantidad}</td>
								<td>S/ {item.precio}</td>
								<td>S/ {(item.cantidad*item.precio).toFixed(2)}</td>
								<td><button onClick={quitarProducto.bind(this,item.id)}>Eliminar</button></td>
							</tr>
						);
					})}
				</tbody>
				<tfoot>
					<tr>
						<td colSpan="4" align="right">Total</td>
						<td>S/ {total}</td>
					</tr>
				</tfoot>
			</table>
			<p align="right">
				<button className="btnComprar" onClick={comprar.bind(this)}>Comprar</button>
			</p>
		</div>
		<Footer />
		</>
	);
}
export default Carrito;