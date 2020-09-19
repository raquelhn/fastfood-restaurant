import React, { useState } from 'react';


const Reservas = () => {


    let [name,setName] = useState("");
    let [email,setEmail] = useState("");
    let [fecha,setFecha] = useState("");
    let [numerodePersonas,setNumerodePersonas] = useState(0);
    
    function updateNombre(e){
		setName(e.target.value);
    }

    function updateEmail(e){
		setEmail(e.target.value);
    }

    function updateFecha(e){
		setFecha(e.target.value);
    }

    function updateNumero(e){
        setNumerodePersonas(e.target.value);
    }

    function enviar(){
		let reserva = {
			"usuario_id" : 1, 
			"nombre" : name,
			"email": email,
            "fecha" : fecha,
            "numero de personas":numerodePersonas
    	}

    
		fetch('https://5f394f3441c94900169c0470.mockapi.io/reservas', {
		   method: 'POST',
		   body: JSON.stringify(reserva),
		   headers: {
		   	"Content-type":"application/json; charset=UTF-8"
		   }
		})
		.then(response=>response.json())
		.then(json=>{
            setName("");
            setEmail("");
            setFecha("");
            setNumerodePersonas(0)
			alert("Tu compra ha sido satisfactoria!");
		});
	}

  return (
    <div>
      <form className="form">
        <h2>Reserva con Nosotros</h2>
        <p type="Name:"><input name="nombre" onChange={updateNombre} placeholder="Escribe tu nombre aqui.."></input></p>
        <p type="Email:"><input name="email" onChange={updateEmail} placeholder="Dejanos tu email.."></input></p>
        <p type="Fecha:"><input name="fecha" onChange={updateFecha} placeholder="Que fecha nos acompañaras.."></input></p>
        <p type="Nro de Personas"><input type="number" name="nrodePersonas" onChange={updateNumero} ></input></p>
        <button onClick={enviar.bind(this)}>Enviar</button>
        </form>
    </div>
  )
}

export default Reservas