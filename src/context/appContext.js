import React , { useState } from 'react';

let AppContext = React.createContext();
let { Provider, Consumer } = AppContext;

function AppProvider({children}){
	let [carrito,setCarrito] = useState([]);
	let [auth,setAuth] = useState(false);
	return(
		<Provider value={{carrito,setCarrito,auth,setAuth}}>
			{children}
		</Provider>
	)
}

export { AppProvider, Consumer as AppConsumer, AppContext }