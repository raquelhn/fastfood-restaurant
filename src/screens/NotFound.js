import React from "react";

const NotFound = (props) => {
  // setTimeout(() => {
  //   props.history.push("/");
  // }, 3000);
  console.log(props);
  const goHome = () => {
    props.history.push("/");
  };

  return (
    <div>
      <h1>PAGINA NO ENCONTRADA</h1>
      <button className="btn-agregar" onClick={goHome}>Regresar al Inicio</button>
    </div>
  );
};

export default NotFound;