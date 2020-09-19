import React, { useContext, useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { AppContext } from '../context/appContext';

function Cabecera(){
	let {carrito} = useContext(AppContext);

	return(
        <Router>
        <nav>
          <ul className="flex items-center justify-between flex-wrap bg-gray-800 p-6">
            <li className="text-sm lg:flex-grow">
              <Link className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4" to={"/"}>Inicio</Link>
            </li>
            <li className="text-sm lg:flex-grow">
              <Link className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4" to={"/menu"}>Menu</Link>
            </li>
            <li className="text-sm lg:flex-grow">
              <Link className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4" to={"/locales"}>Locales</Link>
            </li>
            <li className="text-sm lg:flex-grow">
              <Link  className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4" to={"/nosotros"}>Nosotros</Link>
            </li>
            <li className="text-sm lg:flex-grow">
              <Link className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4" to={"/reservas"}>Reservas</Link>
            </li >
            <li className="text-sm lg:flex-grow">
              <Link class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0" to={"/carrito"}>Carrito</Link>
            </li>
          </ul>
        </nav>
        </Router>
      

	);
}
export default Cabecera;