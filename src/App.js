import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { AppProvider} from './context/appContext';
import Carrito from './screens/Carrito';
import Home from './screens/Home';
import Menu from './screens/Menu';
import Locales from './screens/Locales';
import Nosotros from './screens/Nosotros';
import Reservas from './screens/Reservas';
import NotFound from "./screens/NotFound";





let App = () => {
  
  return (
    <AppProvider>
       <Router>
      <header>
      <nav>
          <ul>
            <li >
              <Link  to={"/"}>Inicio</Link>
            </li>
            <li>
              <Link  to={"/menu"}>Menu</Link>
            </li>
            <li>
              <Link to={"/locales"}>Locales</Link>
            </li>
            <li>
              <Link to={"/nosotros"}>Nosotros</Link>
            </li>
            <li>
              <Link to={"/reservas"}>Reservas</Link>
            </li >
            <li>
              <Link to={"/carrito"}>Carrito</Link>
            </li>
          </ul>
        </nav>
      </header>
   
      
      <hr />
      
      <Switch>
        <Route exact path={"/carrito"} component={Carrito} />
        <Route exact path={"/reservas"} component={Reservas} />
        <Route exact path={"/nosotros"} component={Nosotros} />
        <Route exact path={"/locales"} component={Locales}/>
        <Route exact path={"/menu"} component={Menu} />
        <Route exact path={"/"} component={Home} />
        <Route component={NotFound} />
      </Switch>
    </Router>
   
    </AppProvider>
  )
}

export default App
